using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class TrainersProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
