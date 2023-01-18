import fastify from "fastify";
import cors from "@fastify/cors"

const app = fastify();

app.register(cors)

app.get("/", () => {
  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("Server Running"));
