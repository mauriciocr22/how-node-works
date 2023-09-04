const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (request, response) => {
  console.log("Request received");
  console.log(request.url);
  response.end("Request received");
});

server.on("request", (request, response) => {
  console.log("Another request 😊");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, () => {
  console.log("Waiting for request");
});
