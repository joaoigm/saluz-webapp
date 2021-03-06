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
    public class AlojamentoController : ControllerBase
    {

        private readonly ILogger<AlojamentoController> _logger;
        private readonly IMongoCollection<Alojamento> _alojamentos;

        public AlojamentoController(ILogger<AlojamentoController> logger)
        {
            _logger = logger;
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://saluzWebappUser:JkhmEYoZWjBf46h8@cluster0.rczf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var client = new MongoClient(settings);
            var database = client.GetDatabase("saluzWebapp");
            this._alojamentos = database.GetCollection<Alojamento>("alojamentos");
        }

        [HttpGet("feminino")]
        public IList<Alojamento> GetFeminino()
        {
            var alojamentos = _alojamentos.Find(alojamento => alojamento.Genero == "F").ToList();
            return alojamentos;
        }

        
        [HttpGet("masculino")]
        public IList<Alojamento> GetMasculino()
        {
            var alojamentos = this._alojamentos.Find(alojamento => alojamento.Genero == "M").ToList();
            return alojamentos;
        }
    }
}
