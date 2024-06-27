using System.ComponentModel.DataAnnotations;

namespace CarRentalBackend.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        //public int VehicleNo { get; set; }
        public string Model { get; set; } = string.Empty;
        public string Maker { get; set; } = string.Empty;
        public float RentalPrice { get; set; }
        // public bool Ordered { get; set; }
        //public bool AvailabilityStatus { get; set; }
        public Boolean Avaialblity { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; } = string.Empty;
        //public string ImageURL { get; set; }
        //public IFormFile Image { get; set; }

    }
}
