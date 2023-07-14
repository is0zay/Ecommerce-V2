const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommercev2'
});

connection.connect((err) => {
	if (err) {
	  console.log(err);
	  return err;
	} else {
	  console.log("db connection successful!");
	}
  });



app.get("/api/products",  (req, res) => {
	 connection.query("SELECT * FROM products", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});