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

		[HttpGet]
		public IActionResult Index(string topic = "", string sortBy = "", string limit = "5")
		{
			// Get all articles from the database
			List<Article> articles = GetArticlesFromDatabase();

			if (!string.IsNullOrEmpty(topic))
			{
				articles = articles.Where(a => a.Topic.Contains(topic)).ToList();
			}
			switch (sortBy)
			{
				case "newest":
					articles = articles.OrderByDescending(a => a.Published).ToList();
					break;
				case "oldest":
					articles = articles.OrderBy(a => a.Published).ToList();
					break;
			}
			if (string.IsNullOrEmpty(limit))
			{
				return Ok(articles.Take(5).ToList()); //Standard 5
			}
			else
			{
				if (int.TryParse(limit, out int amount)) //Borde kanske även kolla antalet...
				{
					return Ok(articles.Take(amount).ToList());
				}
				else
				{
					//Error! Inte en siffra.
					return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
				}
			}
			return Ok(articles.Take(1).ToList()); //Borde aldrig komma hit, då har någon ändrat i koden och gjort fel
		}

		private List<Article> GetArticlesFromDatabase(bool ascending = true)
		{
			// Connection string for MySQL database
			string connStr = "server=localhost;user=root;database=newsextractdb;port=3306;password=password";

			// SQL query to retrieve data from database
			string sql = "SELECT title, summary, link, published, topic FROM news";

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
							article.Topic = new List<string>(reader.GetString("topic").Split(','));
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
