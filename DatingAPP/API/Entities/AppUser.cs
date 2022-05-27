using System.Collections;
using System.Collections.Generic;

namespace API.Entities

{
    public class AppUser
    {
        // public AppUser()
        // {
        //     this.AppQuote = new HashSet<AppQuote>();
        // }
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // public virtual ICollection<AppQuote> AppQuote { get; set; }
    }
}