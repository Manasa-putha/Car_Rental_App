using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRentalBackend.Migrations
{
    public partial class intialDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Maker = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RentalPrice = table.Column<float>(type: "real", nullable: false),
                    Avaialblity = table.Column<bool>(type: "bit", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CarId = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RentalStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RentalEndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Days = table.Column<int>(type: "int", nullable: false),
                    TotalCost = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AgrrementId = table.Column<int>(type: "int", nullable: false),
                    Avaialblity = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RefreshToken = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RefreshTokenExpiryTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "Avaialblity", "Description", "Maker", "Model", "Rating", "RentalPrice" },
                values: new object[,]
                {
                    { 1, true, "The Mahindra Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra and Mahindra Ltd.", " Corman", "BMW", 5, 100f },
                    { 2, true, "Renowned for its clarity and depth, this book provides an extensive exploration of algorithms and their applications. From sorting and searching algorithms to graph algorithms and data structures, it offers a wealth of knowledge supported by insightful explanations and practical examples.", " Corman", "Cargio", 5, 100f },
                    { 3, true, "The Hyundai Creta, also known as Hyundai ix25 in China, is a subcompact crossover SUV produced by Hyundai since 2014 mainly for emerging markets, particularly BRICS. It is positioned above the Venue and below the Tucson in Hyundai's SUV line-up. ", "Robert Sedgewick & Kevin Wayne", "Hyundai Creta", 4, 200f },
                    { 4, true, "The Suzuki Swift is a supermini car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred to as a supermini in the British Isles.", "Steve Skiena", "Maruti Swift", 5, 300f },
                    { 5, true, "The Tata Punch is a crossover city car manufactured by Tata Motors Cars since 2021. Positioned as the smallest SUV of the brand below the Nexon, the Punch is built on ALFA-ARC platform shared with the Altroz hatchback", "Adnan Aziz", "Tata Punch", 3, 400f },
                    { 6, true, "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", "Eric Matthes", "TOYOTA", 3, 700f },
                    { 7, true, "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", "Eric Matthes", "TOYOTA", 3, 700f },
                    { 8, false, "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety o", "Eric Matthes", "TOYOTA", 2, 700f },
                    { 9, false, "The Mahindra Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra and Mahindra Ltd.", "Paul Barry", "Mahindra Thar", 2, 800f },
                    { 10, true, "The MG 4 EV comes under the category of Hatchback body type. 0 HelpfulReply.", "Joshua Bloch", "MG Hector", 3, 900f },
                    { 11, true, "The MG 4 EV comes under the category of Hatchback body type. 0 HelpfulReply.", "Joshua Bloch", "MG Hector", 4, 900f },
                    { 12, true, "Seating Capacity: It is available in 7- and 9-seater layout. Engine and Transmission: The Scorpio Classic is powered by a 2.2-litre diesel engine, derived from the Scorpio N's less powerful diesel version, that makes 132 PS and 300 Nm, and is mated to a 6-speed manual gearbox.", "James F Kurose and Keith W Ross", "Scropio", 4, 1400f },
                    { 13, true, "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering ", "Rich Seifert and James Edwards", "Maruti Suzuki Brezza", 3, 1500f },
                    { 14, true, "Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering .", "Rich Seifert and James Edwards", "Maruti Suzuki Brezza", 5, 1500f }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "AgrrementId", "Avaialblity", "CarId", "Days", "Email", "OrderDate", "RentalEndDate", "RentalStartDate", "TotalCost", "UserId" },
                values: new object[,]
                {
                    { 1, 0, false, 1, 5, "Sai@gmail.com", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 6, 23, 13, 28, 12, 0, DateTimeKind.Unspecified), new DateTime(2024, 6, 19, 13, 28, 12, 0, DateTimeKind.Unspecified), 0m, 2 },
                    { 2, 0, false, 4, 3, "Sai@gmail.com", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 6, 21, 13, 28, 12, 0, DateTimeKind.Unspecified), new DateTime(2024, 6, 19, 13, 28, 12, 0, DateTimeKind.Unspecified), 0m, 2 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedOn", "Email", "FirstName", "LastName", "MobileNumber", "Password", "RefreshToken", "RefreshTokenExpiryTime", "Token", "UserType", "Username" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 6, 11, 13, 28, 12, 0, DateTimeKind.Unspecified), "admin@gmail.com", "Admin", "Admin", "1234567890", "admin1234", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "ADMIN", "Admin" },
                    { 2, new DateTime(2024, 3, 6, 13, 30, 12, 0, DateTimeKind.Unspecified), "sai@gmail.com", "sai", "lakshmi", "1234567890", "sai1234", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "USER", "sai" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
