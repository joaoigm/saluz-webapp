using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Saluz.Models
{
    public class Alojamento
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _Id { get; set; }
        // Masculino ou Feminino
        public string Genero {get;set;}
        [BsonRepresentation(BsonType.Array)]
        public Cama[] Camas { get; set; }

    }

    public class Cama
    {
        public char Tipo { get; set; }
        public int Id { get; set; }
        public bool Disponivel { get; set; }
    }
}