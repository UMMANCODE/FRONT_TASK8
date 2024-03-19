//  - Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function
function sumOfNumbers(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

//  - Verilmiş arraydəki ən böyük ədədi tapın qaytaran function
function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

//  - Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

//  - Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function
function mostRepeatedNumber(numbers) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostRepeatedNumber;

    numbers.forEach(number => {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            mostRepeatedNumber = number;
        }
    });
    return mostRepeatedNumber;
}

const numbers = [1, 3, 5, 7, 3, 9, 2, 5, 3, 7];
console.log("Sum: ", sumOfNumbers(numbers));
console.log("Largest: ", findLargestNumber(numbers));
console.log("Sum of digits: ", sumOfDigits(12345));
console.log("Mode: ", mostRepeatedNumber(numbers));
