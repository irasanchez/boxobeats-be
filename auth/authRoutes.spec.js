const request = require("supertest");
const server = require("../server");
const db = require("../data/db-config");

describe("authRoutes.js", () => {
  it("should log the user in", () => {
    return request(server)
      .post("/api/register")
      .send({ username: "kdshfkdhsakh", password: "wi93499" })
      .then((res) => {
        console.log("&&&&&&&&&&&&", res.body);
        expect(res.body).toHaveProperty("username");
      });
  });
});

describe("login route", () => {
  it("exists", () => {
    expect(server).toBeTruthy();
  });
});
