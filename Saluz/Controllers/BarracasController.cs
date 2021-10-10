using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Saluz.Models;

namespace Saluz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BarracasController : ControllerBase
    {

        private readonly ILogger<BarracasController> _logger;
        private readonly IMongoCollection<Barraca> _barracas;

        public BarracasController(ILogger<BarracasController> logger)
        {
            _logger = logger;
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://saluzWebappUser:JkhmEYoZWjBf46h8@cluster0.rczf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var client = new MongoClient(settings);
            var database = client.GetDatabase("saluzWebapp");
            this._barracas = database.GetCollection<Barraca>("barracas");
        }

        [HttpGet]
        public IList<Barraca> Get()
        {
            var barracas = this._barracas.Find(barraca => true).ToList();
            return barracas;
        }

    }
}
