namespace CarRentalBackend.Models.Dtos
{
    public class updateRental
    {
        public int Day { get; set; }
        public int tRent { get; set; }
        public User? User { get; set; }
        public Car? Car { get; set; }
    }
    public class Email
    {
        public string Emails { get; set; }
    }
    public class CarModel
    {
      
        public IFormFile Image { get; set; }
    }
}
