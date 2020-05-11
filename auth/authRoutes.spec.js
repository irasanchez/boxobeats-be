const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db-config");

describe("authRoutes.js", () => {
  const newUser = {
    email: "kdshfkdhsakh@someemail.com",
    stage_name: "beatbud",
    password: "wi93499",
  };
  const { email } = newUser;

  beforeEach(async () => {
    await db("user").truncate(); // Empty rows, reset ID back to 1
  });

  it("should register the user", async () => {
    await request(server)
      .post("/api/auth/register")
      .send(newUser)
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  it("returns the user object", async () => {
    await request(server)
      .post("/api/auth/register")
      .send(newUser)
      .then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("stage_name");
        expect(res.body).toHaveProperty("email");
        expect(res.body).toHaveProperty("password");
      });
  });
});
