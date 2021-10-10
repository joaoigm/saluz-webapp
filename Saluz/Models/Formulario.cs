using System.Collections.Generic;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Saluz.Models
{
    public class Formulario
    {
        public string nome { get; set; }
        public string igreja { get; set; }
        public string idade { get; set; }
        public string email { get; set; }
        public string quantidadeParcelas { get; set; }
        public string dataPrimeiroPagamento { get; set; }
        public string sexo { get; set; }
        public string vencimento { get; set; }
        public string tipo { get; set; }
        public string camaId { get; set; }
        public string barracaId { get; set; }
        public string vagaId { get; set; }
               
    }

    
}