using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataMapper.Data;
using DataMapper.Models;

namespace DataMapper.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    //[DisableCors]
    public class DataMapsController : ControllerBase
    {
        private readonly DataMapsContext _context;
        private readonly IDataRepository<DataMap> _repo;

        public DataMapsController(DataMapsContext context, IDataRepository<DataMap> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/DataMaps
        [HttpGet]
        public IEnumerable<DataMap> GetDataMaps()
        {
            return _context.DataMap.OrderByDescending(p => p.DataMapId);
        }

        // GET: api/DataMaps/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDataMap([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var DataMap = await _context.DataMap.FindAsync(id);

            if (DataMap == null)
            {
                return NotFound();
            }

            return Ok(DataMap);
        }

        // PUT: api/DataMaps/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDataMap([FromRoute] int id, [FromBody] DataMap DataMap)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != DataMap.DataMapId)
            {
                return BadRequest();
            }

            _context.Entry(DataMap).State = EntityState.Modified;

            try
            {
                _repo.Update(DataMap);
                var save = await _repo.SaveAsync(DataMap);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DataMapExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DataMaps
        [HttpPost]
        public async Task<IActionResult> PostDataMap([FromBody] DataMap DataMap)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(DataMap);
            var save = await _repo.SaveAsync(DataMap);

            return CreatedAtAction("GetDataMap", new { id = DataMap.DataMapId }, DataMap);
        }

        // DELETE: api/DataMaps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDataMap([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var DataMap = await _context.DataMap.FindAsync(id);
            if (DataMap == null)
            {
                return NotFound();
            }

            _repo.Delete(DataMap);
            var save = await _repo.SaveAsync(DataMap);

            return Ok(DataMap);
        }

        private bool DataMapExists(int id)
        {
            return _context.DataMap.Any(e => e.DataMapId == id);
        }

    }

}
