const express = require("express");
const cors = require("cors");
require("dotenv").config();


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    //// Rutas ///

    this.chatSonic = "/api/chatSonic";

    /// middleware ///
    this.middleware();

    this.routes();

    this.listen();
  }

  middleware() {
   
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.chatSonic, require("../routes/chat_sonic_route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;