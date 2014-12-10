using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class DefaultController : Controller
    {
        public ActionResult TestPage()
        {
            return View("~/Views/TestPage.cshtml");
        }
    }
}