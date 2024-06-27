namespace CarRentalBackend.Models
{

    public class BookCarRequest
    {
        public int UserId { get; set; }
        public int CarId { get; set; }
        public DateTime RentalStartDate { get; set; }
        public DateTime RentalEndDate { get; set; }
    }
}
