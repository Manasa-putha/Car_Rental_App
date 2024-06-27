using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalBackend.Models
{
    public class User
    {

        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string MobileNumber { get; set; } = string.Empty;
        //public string Role { get; set; }
        public string? Token { get; set; }
        public DateTime CreatedOn { get; set; }
        public UserType UserType { get; set; } = UserType.NONE;
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        // public AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPROOVED;
    }
 


}
