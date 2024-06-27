using CarRentalBackend.Context;
using CarRentalBackend.Models;
using CarRentalBackend.Models.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly AppDbContext _context;

        public OrderController(AppDbContext dataContext, IConfiguration config)
        {
            _config = config;
            _context = dataContext;
        }

        [Authorize]
        [HttpGet("GetUserData")]
        public IActionResult GetAllUsers()
        {
            var res = _context.Users.ToList();
            return Ok(res);
        }


        [HttpGet("UserDetails/{email}")]
        public IActionResult GetUser(string email)
        {
            var res = _context.Users.ToList();
            var userr = res.FirstOrDefault(c => c.Email == email);
            if (userr != null) return Ok(userr);
            else return BadRequest("Failure");
        }

        [Authorize]
        [HttpGet("AllData")]
        public IActionResult GetAllCars()
        {
            var res = _context.Cars.ToList();
            return Ok(res);
        }


        [Authorize]
        [HttpGet("CarDetials/{id}")]
        public IActionResult GetCar(int id)
        {

            var res = _context.Cars.ToList();

            var car = res.FirstOrDefault(c => c.Id == id);
            if (car != null) return Ok(car);
            else return BadRequest("Failure");
        }

        [Authorize]
        [HttpPost("RentalAgrement")]
        public async Task<IActionResult> Rentalform(Order rental)
        {

            if (rental == null)
            {
                return BadRequest("Invalid rental information.");
            }

            // Fetch car details
            var car = await _context.Cars.FindAsync(rental.CarId);
            if (car == null)
            {
                return BadRequest("Invalid carId.");
            }

            car.Avaialblity = rental.Avaialblity;
            rental.OrderDate = DateTime.Now;

            try
            {
                // Add rental to Orders and save changes
                _context.Orders.Add(rental);
                await _context.SaveChangesAsync();

                // Update car availability in database
                _context.Cars.Update(car);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }

        }

        [Authorize]
        [HttpGet("GetAllAggrement")]
        public IActionResult GetAllAggrement()
        {
            var res = _context.Orders.ToList();
            return Ok(res);
        }



        [Authorize]
        [HttpPost("GetUserAggrement")]
        public IActionResult gett(Email _email)
        {
            var fullData = _context.Orders.ToList();

            List<Order> lis = new List<Order>();
            foreach (var item in fullData)
            {
                if (string.Equals(item.Email, _email.Emails, StringComparison.OrdinalIgnoreCase))
                {
                    lis.Add(item);
                }
            }
            return Ok(lis);
        }

    }
}

