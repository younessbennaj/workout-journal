function sum(a, b) {
    return a + b;
}

describe('sample test', () => {
    test('sum 2 + 3', () => {
        expect(sum(2, 3)).toBe(5);
    })
})