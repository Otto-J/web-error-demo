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

app.head('/collect', (req, res) => {
  console.log(req)
})

app.get('/collect2', (req, res) => {
  console.log(req)
  res.json({
    data:'ok'
  })
})

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

app.get("/info-late2", async (req, res, next) => {
  console.log('late get in')
  await sleep(5000);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.json({
    code: 0,
    data: "ok",
  });
  console.log('late get out')

});

app.post("/info-late", async (req, res, next) => {
  console.log('late post in')
  await sleep(5000);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // next();

  res.json({
    code: 0,
    data: "ok",
  });
  console.log('late post out')

});

app.get("/info2", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // next();
  res.status(500).end()
  // res.json({
  //   code: 0,
  //   data: "err500",
  // });
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
