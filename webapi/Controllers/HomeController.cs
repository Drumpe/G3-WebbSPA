using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using webapi.Models;

namespace webapi.Controllers
{
	//[Authorize]
	[ApiController]
	[Route("[controller]")]
	public class HomeController : ControllerBase
	{
		private readonly ILogger<HomeController> _logger;
		private IList<Article> _articles;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		/**
		 * Index
		 * topic: välj ämne
		 * sortBy: newest | oldest
		 * limit: hur många artiklar
		 * from: med början från
		 * Returns: Lista med artiklar 
		 * Exempel: topic="All", sortBy = "newest", limit = "50", from = "100" returns: De nyaste artiklarna från 100 till 150  
		 *		    Om inga invärden tillhandahålls returneras de 50 nyaste artiklarna
		 */
		[HttpGet]
		public IActionResult Index(string topic = "", string sortBy = "newest", string limit = "50", string from = "0")
		{
			topic = topic.ToLower() == "all" ? "": topic; // 'All' översätts till tom sträng
			bool ascending = sortBy == "oldest" ? true : false; //Fallande eller ökande
			//Gör om 'string limit' till 'integer amount'
			if (!int.TryParse(limit, out int amount)) //Om inte siffra => Error
			{
				return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
			}
			//Gör om 'string from' till 'integer start'
			if (!int.TryParse(from, out int start)) //Om inte siffra => Error
			{
				return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
			}
			_logger.LogInformation($"Debug: {ascending} {topic} {limit} {start}");
			// Get articles from the database och returnera dem (SQL är bättre på att hantera listor än C# => detta är snabbast)
			return Ok(GetArticlesFromDatabase(ascending, topic, amount, start));	
		}

		private List<Article> GetArticlesFromDatabase(bool ascending = true, string topic = "", int limit = 50, int start = 0)
		{
			// Connection string for MySQL database
			string connStr = "server=localhost;user=root;database=newsextractdb;port=3306;password=sommar";
			string order = ascending ? "ASC" : "DESC";
			string sql;

			// SQL query to retrieve data from database
			if (string.IsNullOrEmpty(topic))
			{
				sql = $"SELECT title, summary, link, published, topic FROM news ORDER BY published {order} LIMIT {limit} OFFSET {start}";
			}
			else
			{
				sql = $"""SELECT title, summary, link, published, topic FROM news WHERE topic LIKE '%{topic}%' ORDER BY published {order} LIMIT {limit} OFFSET {start}""";
			}
			// Create a list to hold Article objects
			List<Article> articles = new List<Article>();

			using (MySqlConnection conn = new MySqlConnection(connStr))
			{
				using (MySqlCommand cmd = new MySqlCommand(sql, conn))
				{
					conn.Open();
					using (MySqlDataReader reader = cmd.ExecuteReader())
					{
						// Loop through each row in the result set and create an Article object from the data
						while (reader.Read())
						{
							Article article = new Article();
							article.Title = reader.GetString("title");
							article.Summary = reader.GetString("summary");
							article.Link = reader.GetString("link");
							article.Published = reader.GetDateTime("published");
							article.Topic = new List<string>(reader.GetString("topic").Split(", ").Distinct().ToList());
							articles.Add(article);
						}
					}
				}
			}

			return articles;
		}
		[HttpGet("Privacy")]
		public IActionResult Privacy()
		{
			return Ok(); // Changed from View()
		}

		[HttpGet("Error")]
		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }); // Changed from View()
		}
	}
}
