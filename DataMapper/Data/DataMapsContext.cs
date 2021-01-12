using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DataMapper.Models;

namespace DataMapper.Data
{
    public class DataMapsContext : DbContext
    {
        public DataMapsContext (DbContextOptions<DataMapsContext> options)
            : base(options)
        {
        }

        public DbSet<DataMapper.Models.DataMap> DataMap { get; set; }
    }
}
