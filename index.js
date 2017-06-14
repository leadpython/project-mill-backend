const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;

// const routes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
// app.use('/api', routes);

// Create a database constiable outside of the database connection callback to reuse the connection pool in your app.
const db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  const server = app.listen(process.env.PORT || 3000, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});


// API
app.get("/api/vendors", function(request, response) {
  db.collection('vendors').find({}).toArray(function(error, data) {
    if (err) {
      handleError(response, error.message, "Failed to get contacts.");
    } else {
      response.status(200).json(data);
    }
  });
});

app.post("/api/vendors", function(request, response) {
  let newVendor = request.body;

  db.collection('vendors').insertOne(newVendor, function(error, data) {
    if (error) {
      handleError(response, error.message, "Failed to create new contact.");
    } else {
      response.status(201).json(data.ops[0]);
    }
  });
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/vendors/:id", function(req, res) {
});

app.put("/api/vendors/:id", function(req, res) {
});

app.delete("/api/vendors/:id", function(req, res) {
});

