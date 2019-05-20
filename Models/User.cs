using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;


namespace PhaserTEst
{
  public class User
  {
    private string _email;
    private string _password;
    private string _username;
    public User(string eCookie, string pCookie, string uCookie)
    {
      _email = eCookie;
      _password = pCookie;
      _username = uCookie;
    }
    public string getEmail()
    {
      return _email;
    }
    public string getPass()
    {
      return _password;
    }
    public string getUser()
    {
      return _username;
    }

    public void Save()
  {
    MySqlConnection conn = DB.Connection();
    conn.Open();
    var cmd = conn.CreateCommand() as MySqlCommand;
    cmd.CommandText = @"INSERT INTO user (email, password, username) VALUES (@UserEmail,  @UserPassword, @UserName);";
    MySqlParameter email = new MySqlParameter();
    email.ParameterName = "@UserEmail";
    email.Value = this._email;
    MySqlParameter password = new MySqlParameter();
    MySqlParameter username = new MySqlParameter();
    username.ParameterName = "@UserPassword";
    password.ParameterName = "@UserName";
    username.Value = this._password;
    password.Value = this._username;
    cmd.Parameters.Add(email);
    cmd.Parameters.Add(password);
    cmd.Parameters.Add(username);
    cmd.ExecuteNonQuery();
    conn.Close();
    if (conn != null)
    {
      conn.Dispose();
    }
  }

  }
}
