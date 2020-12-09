console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90
console.log('+71234567890');
console.log(phone.length);



alert('Существует две строки: Мама мыла раму; Собака друг человека;  ');
const firstRow='Мама мыла раму';
const secondRow='Собака друг человека';
const CHAR = prompt('Пожалуйста, укажите букву, по которой будет выбрана строка с наибольшим повторением этой буквы');


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

alert(getRow(firstRow, secondRow));






