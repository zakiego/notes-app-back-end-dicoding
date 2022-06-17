import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import routes from "./routes";

const init = async () => {
  const server: Server = Hapi.server({
    port: 5001,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
