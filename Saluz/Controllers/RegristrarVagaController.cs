using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Saluz.Models;
using System.Linq;

namespace Saluz.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RegistrarVagaController : ControllerBase
    {

        private readonly ILogger<RegistrarVagaController> _logger;
        private readonly IMongoCollection<Alojamento> _alojamentos;
        private readonly IMongoCollection<Barraca> _barracas;
        private readonly IMongoCollection<Formulario> _inscritos;

        public RegistrarVagaController(ILogger<RegistrarVagaController> logger)
        {
            _logger = logger;
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://saluzWebappUser:JkhmEYoZWjBf46h8@cluster0.rczf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var client = new MongoClient(settings);
            var database = client.GetDatabase("saluzWebapp");
            this._alojamentos = database.GetCollection<Alojamento>("alojamentos");
            this._barracas = database.GetCollection<Barraca>("barracas");
            this._inscritos = database.GetCollection<Formulario>("inscritos");
        }


        [HttpPost]
        public IActionResult RegistrarVaga([FromBody]Formulario formulario) {
            
            switch(formulario.tipo) {
                case "A": {
                    var alojamento = _alojamentos.Find(a => a.Genero == formulario.sexo).First();
                    alojamento.Camas.FirstOrDefault(c => c.Codigo == formulario.camaId).Disponivel = false;
                    _alojamentos.ReplaceOne(a => a.Id == alojamento.Id, alojamento);
                    break;
                }
                case "B": {
                    var barraca = _barracas.Find(b => b.Codigo == formulario.barracaId).First();
                    barraca.Vagas.First(v => v.Codigo == formulario.vagaId).Disponivel = false;
                    if(string.IsNullOrEmpty(barraca.Genero)) {
                        barraca.Genero = formulario.sexo;   
                    }
                    _barracas.ReplaceOne(b => b._Id == barraca._Id, barraca);
                    break;
                }
            }

            _inscritos.InsertOne(formulario);
            return Ok();
        }
    }
}