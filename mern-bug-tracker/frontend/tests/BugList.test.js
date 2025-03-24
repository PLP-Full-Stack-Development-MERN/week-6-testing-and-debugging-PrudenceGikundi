const request = require("supertest");
const app = require("../server");

describe("Bug API", () => {
  it("should return a list of bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
  });

  it("should create a bug", async () => {
    const res = await request(app).post("/api/bugs").send({ title: "Test Bug", description: "This is a test" });
    expect(res.statusCode).toBe(201);
  });
});
