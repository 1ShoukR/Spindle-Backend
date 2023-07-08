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

