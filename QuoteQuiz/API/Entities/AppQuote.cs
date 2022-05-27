using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;

namespace API.Entities
{
    public class AppQuote
    {
        // public AppQuote()
        // {
        //     this.AppUser= new HashSet<AppUser>();
        // }
        public int Id { get; set; }
        public string Quiz { get; set; }
        public int QuoteType { get; set; }
        public int CurrectAnswer { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        // public virtual ICollection<AppUser> AppUser { get; set; }

    }
}