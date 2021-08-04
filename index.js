const http = require("http");

const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environment");
const data = require("./lib/data");

const app = {};

data.read(
  "test",
  "newFile",

  (err, data) => {
    console.log(err, data);
  }
);

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listening to port ${environment.port}`);
  });
};

app.handleReqRes = handleReqRes;

app.createServer();
