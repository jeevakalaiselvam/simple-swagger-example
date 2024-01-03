// app.js

const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3000;

// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Swagger Example",
      version: "1.0.0",
      description: "A simple example of using Swagger with Express",
    },
  },
  apis: ["app.js"], // Path to the API routes and JSDoc comments
};

const specs = swaggerJsdoc(options);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(specs, { explorer: true }));

// Your API routes with JSDoc comments
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     responses:
 *       200:
 *         description: A successful response with a hello message
 */
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, Swagger!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
