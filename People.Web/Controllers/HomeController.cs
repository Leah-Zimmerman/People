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
                People = pm.GetAll(),
            };
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
            pm.AddMany(people);
            return Redirect("/home/index");
        }

    }
}