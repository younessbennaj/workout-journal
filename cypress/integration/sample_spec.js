function sum(a, b) {
    return a + b;
}

describe('my first test', () => {
    //group related test together
    it('test sum 3 + 4', () => {
        expect(sum(3, 4)).to.equal(7);
    })

})