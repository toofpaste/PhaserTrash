using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhaserTEst.Models;
using System.Collections;
using System.Web;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Options;

namespace PhaserTEst.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
          string eCookie = Request.Cookies["umail"];
          string pCookie = Request.Cookies["pword"];
          string uCookie = Request.Cookies["uname"];
          string i = eCookie;
          string p = pCookie;
          string u = uCookie;
          User user = new User(i, p, u);
          user.Save();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
