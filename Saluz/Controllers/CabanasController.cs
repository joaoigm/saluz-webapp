using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Saluz.Models;

namespace Saluz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CabanasController : ControllerBase
    {

        private readonly ILogger<CabanasController> _logger;
        private readonly IMongoCollection<Cabana> _cabanas;

        public CabanasController(ILogger<CabanasController> logger)
        {
            _logger = logger;
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://saluzWebappUser:JkhmEYoZWjBf46h8@cluster0.rczf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var client = new MongoClient(settings);
            var database = client.GetDatabase("saluzWebapp");
            this._cabanas = database.GetCollection<Cabana>("cabanas");
        }

        [HttpGet]
        public IEnumerable<Cabana> Get()
        {
            return this._cabanas.Find(cabana => true).ToEnumerable();
        }
    }
}
