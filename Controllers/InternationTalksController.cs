using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class InternationTalksController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
