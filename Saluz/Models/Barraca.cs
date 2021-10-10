using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Saluz.Models
{
    public class Barraca
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _Id { get; set; }
        [BsonElement("codigo")]
        public string Codigo { get; set; }
        [BsonElement("genero")]
        public string Genero { get; set; }
        [BsonElement("vagas")]
        public Vaga[] Vagas { get; set; }

    }

    public class Vaga
    {
        [BsonElement("codigo")]
        public string Codigo {get;set;}
        [BsonElement("disponivel")]
        public bool Disponivel {get;set;}
    }
}