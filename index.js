/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];
let max = 0;

function result(numbers) {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > max){
        max = numbers[i];
        }
    }
    console.log(max);
    }

result(numbers);

