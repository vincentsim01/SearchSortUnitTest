const sum = require('./sum');

test('adds 1 + 2 equal 3', ()=>{
    expect(sum(1,2)).toBe(3);
})

test('adds 10 + 13 equal 23',() =>{
    expect(sum(10,13)).toBe(23);
})