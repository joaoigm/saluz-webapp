using System.Collections.Generic;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Saluz.Models
{
    public class Alojamento
    {
        [BsonId()]
        public ObjectId Id { get; set; }
        // Masculino ou Feminino
        [BsonElement("genero")]
        public string Genero {get;set;}
        [BsonElement("camas")]
        public Cama[] Camas { get; set; }

    }

    public class Cama
    {
        [BsonElement("tipo")]
        [JsonIgnore]
        public string Tipo { get; set; }
        [BsonElement("codigo")]
        public string Codigo { get; set; }
        [BsonElement("disponivel")]
        public bool Disponivel { get; set; }
    }
}