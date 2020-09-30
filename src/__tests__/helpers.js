/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require('../helpers.js')
// cek apakah hasil penambahan qty berhasil
test('Qty 1 jika ditambahkan 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});
// cek inputan angka dalam bentuk string
test('Qty 1 jika ditambahkan "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});
// cek penghitungan ulang subtotal
test('Subtotal dari 25000 dan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(25000, 2)).toBe(50000);
});
// cek inputan angka penjumlahan ulang dengan string
test('subtotal dengan inputan string', () => {
    expect(recalculateSubtotal('25000', 4)).toBe(100000);
});
// cek keberhasilan pengurangan qty
test('decrementQty bisa berkurang', () => {
    expect(decrementQty(2)).toBe(1);
});
// pengurangan qty min qty adalah 1
test('decrementQty tidak boleh berkurang ketika qty > 0', () => {
    expect(decrementQty(1)).toBe(1);
});
// cek perubahan subtotal sesuai KODE discount yang di pilih dari perhitungan di app.js
test('subtotal dengan discount', () => {
    expect(recalculateSubtotal(50000, 3, 50)).toBe(75000);
})