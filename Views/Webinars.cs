using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Views
{
    public class Webinars : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
