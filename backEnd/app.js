const express = require("express");
const app = express();

// app.all('*')
const sleep = async (time) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
};

app.get("/info", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // next();
  res.json({
    code: 0,
    data: "ok",
  });
});

app.get("/info-late", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // next();
  await sleep(5000);
  res.json({
    code: 0,
    data: "ok",
  });
});

app.get("/info2", (req, res, next) => {
  // next();
  res.json({
    code: 0,
    data: "ok",
  });
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
