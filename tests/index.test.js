import app from "../App/app"
const request = require('supertest')

// Put all tests here until this file gets too large

function add(x, y) {
    return x + y
}

// Example test
describe("testing add", () => {
    it("yields sum", async () => {
        // Given
        let x = 4
        let y = 2
        let expected_res = 6

        // When
        let res = add(x, y)

        // Then
        expect(res).toBe(expected_res)
    });
})

// Sanity check to see if the route exists
describe("GET / route", () => {
    it("yields response 200", async () => {
        // Given
        let expected_res = 200

        // When
        let res = await request(app).get("/");

        // Then
        expect(res.statusCode).toBe(expected_res)
    })
})
