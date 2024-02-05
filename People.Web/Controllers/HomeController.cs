using Microsoft.AspNetCore.Mvc;
using People.Data;
using People.Web.Models;
using System.Diagnostics;
using System.Diagnostics.Metrics;

namespace People.Web.Controllers
{
    public class HomeController : Controller
    {
        private string _connectionString = @"Data Source=.\sqlexpress; Initial Catalog=People; Integrated Security=true;";
        private int _number = 0;
        public IActionResult Index()
        {
            var pm = new PersonManager(_connectionString);
            var pvm = new PeopleViewModel
            {
                People = pm.GetAll()
            };
            if (TempData["message"]!=null)
            {
                pvm.Message = TempData["message"].ToString();
            }
            return View(pvm);
        }
        public IActionResult PeopleForm()
        {
            return View();
        }
        [HttpPost]
        public IActionResult AddPerson(List<Person> people)
        {
            var pm = new PersonManager(_connectionString);
            var peopleToAdd =
                people.Where(p => !string.IsNullOrEmpty(p.FirstName) && !string.IsNullOrEmpty(p.LastName)).ToList();
            pm.AddMany(peopleToAdd);
            TempData["message"] = "People added succesfully!";
            return Redirect("/home/index");
        }

    }
}