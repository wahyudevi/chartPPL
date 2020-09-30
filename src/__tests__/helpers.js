/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const helper = require('../helpers');

test('Jika qty adalah 6, ketika dikurangi 1 jadi = 5', () => {
    expect(helper.decrementQty(6)).toBe(5);
});

test('Jika qty adalah 6, ketika ditambah 1 jadi = 7', () => {
    expect(helper.incrementQty(6)).toBe(7);
});



