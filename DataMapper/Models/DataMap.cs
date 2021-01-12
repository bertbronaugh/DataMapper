using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataMapper.Models
{
    public class DataMap
    {

        //[Key]
        public int DataMapId { get; set; }

        //[Required]
        public int CustNo { get; set; }

        //[Required]
        public string Table { get; set; }

        //[Required]
        public string Data1Value { get; set; }

        //[Optional]
        public string Data1Description { get; set; }

        //[Required]
        public string Data2Value { get; set; }

        //[Optional]
        public string Data2Description { get; set; }

    }
}
