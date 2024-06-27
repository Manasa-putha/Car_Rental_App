using System.ComponentModel.DataAnnotations;

namespace CarRentalBackend.Models
{

    public class Order
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public int CarId { get; set; }
        public string Email { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RentalStartDate { get; set; }
        public DateTime RentalEndDate { get; set; }
        //public bool Returned { get; set; }
        public int Days { get; set; }
        // public DateTime? ReturnDate { get; set; }
        //public DateTime RentalDurationDays { get; set; }
        public decimal TotalCost { get; set; }
        //public int VehicleNo { get; set; }
        //public int FinePaid { get; set; }

        public int AgrrementId {get; set;}
        public Boolean Avaialblity { get; set; }
    }
}
