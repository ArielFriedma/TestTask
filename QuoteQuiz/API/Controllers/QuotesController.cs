using System.Linq;
using System.Security.Cryptography;
using System.Net;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    [Route("[controller]")]
    public class QuotesController : BaseApiController
    {
        private readonly DataContext _context;

        public QuotesController(DataContext context)
        {
            _context = context;
        }

       [HttpPost("new-quote")] //api/quote/new-quote
        public async Task<ActionResult<AppQuote>> newQuote(AppQuote appQuote)
        {
            // using var hmac = new HMACSHA512();

            if (await QuotesExists(appQuote.Quiz)) return BadRequest("Quote already exists");

            var newquote = new AppQuote
            {
                Quiz = appQuote.Quiz,
                QuoteType = appQuote.QuoteType,
                CurrectAnswer = appQuote.CurrectAnswer
            };

            _context.Quotes.Add(newquote);

            await _context.SaveChangesAsync();

            
            return newquote;
        }

        // [HttpPost("login")] //api/quote/login
        // public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        // {
        //     var user = await this._context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());
        //     if (user == null) return Unauthorized("invalid username");

        //     using var hmac = new HMACSHA512(user.PasswordSalt);

        //     var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDto.Password));

        //     for (int i = 0; i < computedHash.Length; i++)
        //     {
        //         if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("invalid password");
        //     }

        //     return new UserDto {
        //         Username = user.UserName,
        //         Token = _tokenService.CreateToken(user)
        //     };
        // }
        private async Task<bool> QuotesExists(string quiz)
        {
            return await _context.Quotes.AnyAsync(x => x.Quiz == quiz.ToLower());
        }
    }
}