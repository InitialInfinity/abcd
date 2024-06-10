using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
