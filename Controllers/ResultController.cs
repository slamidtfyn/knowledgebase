using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace knowledgebase.Controllers
{

    [Route("api/[controller]")]
    public class ResultController : Controller
    {
        public static List<Result> Results { get; set; } = new List<Result>();

        public IEnumerable<string> Get() => ResultController.Results.Select(p=>p.Data);
        [HttpPut("{item}")]public void Put(string item)=>ResultController.Results.Add(new Result {Data=item });
    }



}