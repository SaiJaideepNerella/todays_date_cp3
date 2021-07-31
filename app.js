const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let presentDate = new Date();
  response.send(
    `${presentDate.getDate()}-${
      presentDate.getMonth() + 1
    }-${presentDate.getFullYear()}`
  );
});
module.exports = app;
