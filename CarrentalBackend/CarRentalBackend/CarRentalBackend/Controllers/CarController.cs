using CarRentalBackend.Context;
using CarRentalBackend.Models;
using CarRentalBackend.Models.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {

        private readonly AppDbContext _context;
        public CarController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "ADMIN")]
        [Authorize]
        [HttpGet("GetAgreement/{id}")]
        public IActionResult GetAgreement(int id)
        {
            var res = _context.Orders.Where(x => x.Id == id);
            if (res != null) return Ok(res);
            else return BadRequest();
        }
       
       [Authorize(Roles = "ADMIN")]
        [HttpPut("UpdateAgreement/{id}")]
        public IActionResult UpdateAgreement(int id, updateRental newAgreement)
        {
            var agreement = _context.Orders.Where(x => x.Id == id).FirstOrDefault();
            if (agreement != null)
            {
                agreement.Days = newAgreement.Day;
                agreement.TotalCost = newAgreement.tRent;
                _context.SaveChanges();
                return Ok(agreement);
            }
            else
            {
                return BadRequest();
            }
        }
        
        [Authorize(Roles = "ADMIN")]
        [HttpDelete("DeleteAgreement/{id}")]
        public IActionResult DeleteAgreement(int id)
        {
            var agreement = _context.Orders.Where(x => x.Id == id).FirstOrDefault();
            var car = _context.Cars.Where(x => x.Id == agreement.CarId).FirstOrDefault();

            _context.Orders.Remove(agreement);
            car.Avaialblity = true;
            _context.SaveChanges();
            return Ok();
        }
        // [Authorize(Roles = "ADMIN")]
        [Authorize]
        [HttpGet("PushReturn/{id}")]
        public IActionResult pushReturn(int id)
        {
            var agreement = _context.Orders.Where(x => x.Id == id).FirstOrDefault();

            agreement.Avaialblity = true; _context.SaveChanges();
            return Ok(agreement);
        }
        [Authorize(Roles = "ADMIN")]
        [HttpGet("AcceptReturn/{id}")]
        public IActionResult acceptReturn(int id)
        {

            var agreement = _context.Orders.Where(x => x.Id == id).FirstOrDefault();
            var car = _context.Cars.Where(x => x.Id == agreement.CarId).FirstOrDefault();
            _context.Orders.Remove(agreement);
            car.Avaialblity = true;
            _context.SaveChanges();
            return Ok(agreement);
        }
        [Authorize(Roles = "ADMIN")]
        [HttpPost("AddCar")]
        public async Task<IActionResult> AddCar([FromBody] Car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _context.Cars.Add(car);
                await _context.SaveChangesAsync();

                return Ok(car);
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, $"Failed to add car: {ex.Message}");
            }
        }
    }
    //[HttpPost]
    //[Route("AddCar")]
    //public async Task<IActionResult> AddCar([FromForm] Car carModel)
    //{
    //    if (carModel == null)
    //    {
    //        return BadRequest("Invalid car details.");
    //    }

    //    // Handle the image file
    //    if (carModel.Image != null && carModel.Image.Length > 0)
    //    {
    //        var fileName = Guid.NewGuid().ToString() + Path.GetExtension(carModel.Image.FileName);
    //        var filePath = Path.Combine("wwwroot/images", fileName);

    //        using (var stream = new FileStream(filePath, FileMode.Create))
    //        {
    //            await carModel.Image.CopyToAsync(stream);
    //        }

    //        carModel.ImageURL = "/images/" + fileName;
    //    }

    //    // Map CarModel to Car entity
    //    var car = new Car
    //    {
    //        Model = carModel.Model,
    //        Maker = carModel.Maker,
    //        Description = carModel.Description,
    //        RentalPrice = carModel.RentalPrice,
    //        ImageURL = carModel.ImageURL,
    //        Rating = carModel.Rating,
    //        Avaialblity = carModel.Avaialblity
    //    };

    //    _context.Cars.Add(car);
    //    await _context.SaveChangesAsync();

    //    return Ok(car);
    //}
   
}



