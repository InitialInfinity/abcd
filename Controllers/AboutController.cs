﻿using Microsoft.AspNetCore.Mvc;

namespace InternationFamilyWeb.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
