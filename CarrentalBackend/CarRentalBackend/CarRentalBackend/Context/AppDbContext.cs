using CarRentalBackend.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Order> Orders { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
         new User()
         {
             Id = 1,
             FirstName = "Admin",
             LastName = "Admin",
             Username = "Admin",
             Email = "admin@gmail.com",
             MobileNumber = "1234567890",
             UserType = UserType.ADMIN,
             Password = "admin1234",
             CreatedOn = new DateTime(2024, 06, 11, 13, 28, 12),

         },
         new User()
         {
             Id = 2,
             FirstName = "sai",
             LastName = "lakshmi",
             Username = "sai",
             Email = "sai@gmail.com",
             MobileNumber = "1234567890",
             UserType = UserType.USER,
             Password = "sai1234",
             CreatedOn = new DateTime(2024, 03, 06, 13, 30, 12),

         }
     ) ;

            modelBuilder.Entity<Car>().HasData(
            new Car { Id = 1, Avaialblity = true, RentalPrice = 100, Maker = " Corman",  Model = "BMW", Description = "The Mahindra Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra and Mahindra Ltd.", Rating = 5 },
            new Car { Id = 2, Avaialblity = true, RentalPrice = 100, Maker = " Corman", Model = "Cargio", Description = "Renowned for its clarity and depth, this book provides an extensive exploration of algorithms and their applications. From sorting and searching algorithms to graph algorithms and data structures, it offers a wealth of knowledge supported by insightful explanations and practical examples.", Rating = 5 },
            new Car { Id = 3, Avaialblity = true, RentalPrice = 200, Maker = "Robert Sedgewick & Kevin Wayne", Model = "Hyundai Creta", Description = "The Hyundai Creta, also known as Hyundai ix25 in China, is a subcompact crossover SUV produced by Hyundai since 2014 mainly for emerging markets, particularly BRICS. It is positioned above the Venue and below the Tucson in Hyundai's SUV line-up. ", Rating = 4 },
            new Car { Id = 4, Avaialblity = true, RentalPrice = 300, Maker = "Steve Skiena", Model = "Maruti Swift", Description = "The Suzuki Swift is a supermini car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred to as a supermini in the British Isles.", Rating = 5 },
            new Car { Id = 5, Avaialblity = true, RentalPrice = 400, Maker = "Adnan Aziz", Model = "Tata Punch", Description = "The Tata Punch is a crossover city car manufactured by Tata Motors Cars since 2021. Positioned as the smallest SUV of the brand below the Nexon, the Punch is built on ALFA-ARC platform shared with the Altroz hatchback", Rating = 3 },
            new Car { Id = 6, Avaialblity = true , RentalPrice = 700, Maker = "Eric Matthes", Model = "TOYOTA", Description = "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", Rating = 3 },
            new Car { Id = 7, Avaialblity = true, RentalPrice = 700, Maker = "Eric Matthes", Model = "TOYOTA", Description = "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", Rating = 3},
            new Car { Id = 8, Avaialblity = false, RentalPrice = 700, Maker = "Eric Matthes", Model = "TOYOTA", Description = "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", Rating = 2},
            new Car { Id = 9, Avaialblity = false, RentalPrice = 800, Maker = "Paul Barry", Model = "Mahindra Thar", Description = "The Mahindra Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra and Mahindra Ltd.", Rating = 2 },
            new Car { Id = 10,  Avaialblity = true, RentalPrice = 900, Maker = "Joshua Bloch", Model = "MG Hector", Description = "The MG 4 EV comes under the category of Hatchback body type. 0 HelpfulReply.", Rating = 3},
            new Car { Id = 11, Avaialblity = true, RentalPrice = 900, Maker = "Joshua Bloch", Model = "MG Hector", Description = "The MG 4 EV comes under the category of Hatchback body type. 0 HelpfulReply.", Rating = 4 },
            new Car { Id = 12, Avaialblity = true, RentalPrice = 1400, Maker = "James F Kurose and Keith W Ross", Model = "Scropio", Description = "Seating Capacity: It is available in 7- and 9-seater layout. Engine and Transmission: The Scorpio Classic is powered by a 2.2-litre diesel engine, derived from the Scorpio N's less powerful diesel version, that makes 132 PS and 300 Nm, and is mated to a 6-speed manual gearbox.", Rating = 4 },
            new Car { Id = 13, Avaialblity = true, RentalPrice = 1500, Maker = "Rich Seifert and James Edwards", Model = "Maruti Suzuki Brezza", Description = "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering ", Rating = 3},
            new Car { Id = 14, Avaialblity = true, RentalPrice = 1500, Maker = "Rich Seifert and James Edwards", Model = "Maruti Suzuki Brezza", Description = "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering .", Rating = 5 });

            modelBuilder.Entity<Order>().HasData(
                new Order { Id = 1, CarId = 1, Email = "Sai@gmail.com", Days = 5, UserId = 2, RentalStartDate = new DateTime(2024, 06, 19, 13, 28, 12), RentalEndDate = new DateTime(2024, 06, 23, 13, 28, 12),  },
                new Order { Id = 2, CarId = 4, Email = "Sai@gmail.com", Days = 3, UserId = 2, RentalStartDate = new DateTime(2024, 06, 19, 13, 28, 12), RentalEndDate = new DateTime(2024, 06, 21, 13, 28, 12),  }
            );
          
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<UserType>().HaveConversion<string>();
        }
    }
}

