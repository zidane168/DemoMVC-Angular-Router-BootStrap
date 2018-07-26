using Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebASC.Controllers
{
    public class HomeController : Controller
    {
         db dblayer = new db();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult userLogin(Admin ad)
        {
            int result = dblayer.userlogin(ad);
            if (result == 1)
            {
                Session["user"] = ad.UserName;
            }
            else
            {
                TempData["msg"] = "Email or pass in wrong";
            }
            return Json(result);

        }
    }
}