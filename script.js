// console.log(10);

// function getOnlyOddNumbers (counter){
//     let result = '';

//     for (let i=0; i < counter; i++) {
//         if(i % 2 === 0){
//             continue;
//         }
//         result += i + ' ';
//     }
//     return result;
// }
// console.log(getOnlyOddNumbers(20));

const firstRow='Мама мыла раму';
const secondRow='собака друг человека';
const CHAR ='а';

function getRow(firstRow, secondRow){
    let firstResult = counterChar(firstRow, CHAR);
    let secondResult = counterChar(secondRow, CHAR);

    if (firstResult === secondResult){
        return 'Здесь одинаковое количество букв ' + CHAR;
    }




return firstResult > secondResult ? firstRow : secondRow;
}

function counterChar(row, char){
    let counted = 0;

    for (let i=0; i<row.length; i++){
        if (row.charAt(i) === char){
            counted++;
        }
    }
    return counted;
}

console.log(getRow(firstRow, secondRow)); 
