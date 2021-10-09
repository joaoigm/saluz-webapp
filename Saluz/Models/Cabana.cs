using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Saluz.Models
{
    public class Cabana
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _Id { get; set; }
        public int Id { get; set; }
        public string Genero { get; set; }
        [BsonRepresentation(BsonType.Array)]
        public Vaga[] Vagas { get; set; }

    }

    public class Vaga
    {
        public int Id;
        public bool Disponivel;
    }
}