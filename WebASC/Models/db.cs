﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using Demo.Models;


namespace Demo.Models
{
    public class db
    {
        public int userlogin(Admin ad)
        { 
            // admin
            if (ad.UserName == "admin" && ad.PassWord == "admin")
            {
                return 1;
            }
            else
            {  
                 return -1;  
            }
              
        }
    }
}