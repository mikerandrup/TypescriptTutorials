using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace MvcApplication1.Models
{
    public enum HowEnumsWork
    {
        Unknownable,
        VeryWell,
        NotAtAll,
        TheWorldExplodes
    }


    [TsClass]
    public class SampleModel
    {
        public SampleModel(string name)
        {
            _name = name;
        } 

        private string _name;
        public string Name { get { return _name; } }

        public int PrimaryKey { get; set; }

        public float Price { get; set; }

        public HowEnumsWork EnumTest { get; set; }
    }
}