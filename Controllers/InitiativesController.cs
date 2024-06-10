using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class InitiativesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
