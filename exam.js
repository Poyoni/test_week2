
function Mission1(array) {
    const evenNumbers = array.filter(function(number) {
        return number % 2 === 0;
    });
    return evenNumbers;
}

function Mission2(str) {
    const words = str.split(' ');
    return words.filter(word => word.length === 4).length;
}

const arrOfArras = [[1,2,3],[4,5,6],[7,8,9]]
function Mission3(arrayOfArras) {
    return arrayOfArras.flat();
}


function Mission6(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return Mission6(num - 1) + Mission6(num - 2);
    }
}

module.exports ={
    Mission1,
    Mission3,
    Mission3,
    Mission6
}