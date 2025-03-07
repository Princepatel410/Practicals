function area()
{
    const pi = 3.14;
    let radius = 5;
    let area = pi * radius * radius;
    console.log(area);
}
area();

//higher order function

//imumutability
// const numbers = [1, 2, 3, 4, 5];
function addElementToArray(originalArray, newElement) {
    return [...originalArray, newElement];
}

const numbers = [1, 2, 3,4,5];
const newNumbers = addElementToArray(numbers, 4);

console.log(numbers);      
console.log(newNumbers);   
