const romanMap = {
    "I": 1,
    "II": 2,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function convert(romamNumber){
    var sum=0;
    var before=0;
    for(var i = romamNumber.length-1; i>=0; i--){
        var atual =romanMap[romamNumber[i]]; 
        var mult = 1;
        if(before > atual){
            mult=-1;
        }
        sum+=atual*mult;
        before = atual;
    }
    return sum;
}

module.exports = {convert};