const test = require('tape');
const romanos = require('../romanos');

test("Converter o numero romano I", (t)=>{
    t.equal(romanos.convert("I"), 1, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano V", (t)=>{
    t.equal(romanos.convert("V"), 5, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano X", (t)=>{
    t.equal(romanos.convert("X"), 10, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano C", (t)=>{
    t.equal(romanos.convert("C"), 100, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano II", (t)=>{
    t.equal(romanos.convert("II"), 2, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano Vi", (t)=>{
    t.equal(romanos.convert("VI"), 6, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano IV", (t)=>{
    t.equal(romanos.convert("IV"), 4, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano IX", (t)=>{
    t.equal(romanos.convert("IX"), 9, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano XC", (t)=>{
    t.equal(romanos.convert("XC"), 90, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano CMXLIX", (t)=>{
    t.equal(romanos.convert("CMXLIX"), 949, "Conversão realizada com sucesso");
    t.end();
});

test("Converter o numero romano CMXLIX", (t)=>{
    t.notEqual(romanos.convert("CMXLIX"), 948, "CMXLIX não é 948");
    t.end();
});