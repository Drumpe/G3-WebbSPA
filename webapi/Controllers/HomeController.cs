using Duende.IdentityServer.Extensions;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Diagnostics;
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

		// Connection string for MySQL database - global in HomeController used in 3 functions  -  Kanske inte så bra att lagra på Git.
		//string connStr = "server=localhost;user=root;database=newsextractdb;port=3306;password=sommar"; 
		//string connStr = "server=db-g3.cj6tuuscsywt.us-east-1.rds.amazonaws.com;user=admin;database=newsextractdb;port=3306;password=password"; //Bobbys AWS DB
		string connStr = "server=aws-newsfeeddb.ci1dhftr505s.eu-north-1.rds.amazonaws.com;user=admin;database=newsextractdb;port=3306;password=N.LLJMFw52n#i}d"; //Olas AWS DB

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
		 * searchFor: om sträng finns i titel eller summary kommer artikeln med. Om tom sträng gör den ingen skillnad.
		 * Returns: Lista med artiklar 
		 * Exempel: topic="All", sortBy = "newest", limit = "50", from = "100" returns: De nyaste artiklarna från 100 till 150  
		 *		    Om inga invärden tillhandahålls returneras de 50 nyaste artiklarna
		 */
		[HttpGet]
		public IActionResult Index(string topic = "", string sortBy = "newest", string limit = "50", string from = "0", string searchFor = "")
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
			_logger.LogInformation("Index DEBUG: {ascending} {topic} {limit} {start} {searchFor}", ascending, topic, limit, start, searchFor);
			// Get articles from the database och returnera dem (SQL är bättre på att hantera listor än C# => detta är snabbast)
			return Ok(GetArticlesFromDatabase(ascending, topic, amount, start, searchFor));	
		}

		private List<Article> GetArticlesFromDatabase(bool ascending = true, string topic = "", int limit = 50, int start = 0, string searchFor = "")
		{
			string order = ascending ? "ASC" : "DESC";
			string sql;

			// SQL query to retrieve data from database
			if (string.IsNullOrEmpty(topic) && string.IsNullOrEmpty(searchFor) ) //Inget topic eller sök
			{
				sql = $"SELECT title, summary, link, published, topic FROM news ORDER BY published {order} LIMIT {limit} OFFSET {start}";
			}
			else if (!string.IsNullOrEmpty(topic) && string.IsNullOrEmpty(searchFor)) //Topic men inget sök
            {
				sql = $"""SELECT title, summary, link, published, topic FROM news WHERE topic LIKE '%{topic}%' ORDER BY published {order} LIMIT {limit} OFFSET {start}""";
			} else if (!string.IsNullOrEmpty(topic) && !string.IsNullOrEmpty(searchFor)) //Topic och sök
			{
				sql = $"""SELECT title, summary, link, published, topic FROM news WHERE topic LIKE '%{topic}%' AND (title LIKE '%{searchFor}%' OR summary LIKE '%{searchFor}%') ORDER BY published {order} LIMIT {limit} OFFSET {start}"""; 
			} else //Inget topic men sök
			{
				sql = $"""SELECT title, summary, link, published, topic FROM news WHERE title LIKE '%{searchFor}%' OR summary LIKE '%{searchFor}%' ORDER BY published {order} LIMIT {limit} OFFSET {start}""";
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
					conn.Close();
				}
			}
			return articles;
		}

		[HttpPost("SubmitEmail")]
		public IActionResult SubmitEmail(string email)
		{
			if (!email.IsNullOrEmpty() && email.Contains('@'))
            {
				//Borde kontrollera längden på email och andra saker
				int affectedRows = 0;
				string sql = $"INSERT INTO newsletter (NewsLetter_email) VALUES ('{email}')";
				using (MySqlConnection conn = new MySqlConnection(connStr))
				{
					using (MySqlCommand cmd = new MySqlCommand(sql, conn))
					{
						conn.Open();
						affectedRows = cmd.ExecuteNonQuery();
						conn.Close() ;
					}
				}
				if(affectedRows == 1) {
					_logger.LogInformation("SubmitEmail INSERTED {email}", email);
					return Ok();
				}
				_logger.LogInformation("SubmitEmail DEBUG: {email}", email);
			}
			return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		[HttpPost("SubmitSupport")]
		public IActionResult SubmitSupport(string name, string email, string supporttext)
		{
			if (!name.IsNullOrEmpty() && !email.IsNullOrEmpty() && email.Contains('@') && !supporttext.IsNullOrEmpty())
			{
				//Borde kontrollera längden på strängarna och andra saker
				int affectedRows = 0;
				string sql = $"INSERT INTO support (support_name, support_email, support_comment) VALUES ('{name}', '{email}', '{supporttext}')";
				using (MySqlConnection conn = new MySqlConnection(connStr))
				{
					using (MySqlCommand cmd = new MySqlCommand(sql, conn))
					{
						conn.Open();
						affectedRows = cmd.ExecuteNonQuery();
						conn.Close();
					}
				}
				if (affectedRows == 1)
				{
					_logger.LogInformation("SubmitSupport INSERTED {name} {email} {supporttext}", name, email, supporttext);
					return Ok();
				}
				_logger.LogInformation("SubmitSupport DEBUG: name: {name} email: {email} st: {supporttext}", name, email, supporttext);
			}
			return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
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
