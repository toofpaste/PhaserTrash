using System;
using MySql.Data.MySqlClient;
using PhaserTEst;

namespace PhaserTEst
{
  public class DB
  {
    public static MySqlConnection Connection()
    {
      MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
      return conn;
    }
  }
}
