// Update with your config settings.
//Defines our DB connection
module.exports = {
  development: {
    client: "sqlite3", //which DBMS driver to use
    useNullAsDefault: true, // Seeting necessary when using SQLite
    connection: {
      filename: "./produce.db3", //specify file names - sometimes its an enpoitn or port
    },
  },
};
