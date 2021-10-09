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
            this._alojamentos = database.GetCollection<Alojamento>("cabanas");
        }

        [HttpGet("feminino")]
        public async Task<IEnumerable<Alojamento>> GetFeminino()
        {
            return (await this._alojamentos.FindAsync(alojamento => alojamento.Genero == "F")).ToEnumerable();
        }

        
        [HttpGet("masculino")]
        public async Task<IEnumerable<Alojamento>> GetMasculino()
        {
            return (await this._alojamentos.FindAsync(alojamento => alojamento.Genero == "M")).ToEnumerable();
        }
    }
}
