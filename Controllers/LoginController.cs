using InternationFamilyWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;
using Tokens;

namespace InternationFamilyWeb.Controllers
{
	public class LoginController : Controller
	{
		private readonly HttpClient _httpClient;
		private readonly ILogger<LoginController> _logger;

		public LoginController(ILogger<LoginController> logger, IConfiguration configuration)
		{
			var handler = new HttpClientHandler();
			handler.ServerCertificateCustomValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true;
			_httpClient = new HttpClient(handler);
			_httpClient.BaseAddress = new Uri(configuration.GetSection("Server:Master").Value);
			_logger = logger;


		}
		public IActionResult Index()
		{
			return View();
		}




		[HttpPost]
		public async Task<IActionResult> ValidateLoginAsync([FromBody] LoginModel loginModel)
		{
			string data = JsonConvert.SerializeObject(loginModel);
			StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
			HttpResponseMessage response = _httpClient.PostAsync(_httpClient.BaseAddress + "/Login", content).Result;
			//loginDto = _loginRepository.GetLoginData(loginModel);
			if (response.IsSuccessStatusCode)
			{
				string responseData = await response.Content.ReadAsStringAsync();

				// Deserialize JSON data
				
				
			
				return RedirectToAction("Index", "Home");
			}
			else
			{
				TempData["Message"] = "Invalid Username and password";
				return RedirectToAction("Index");
			}
		}
	}
}
