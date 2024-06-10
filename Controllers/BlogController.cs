using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
