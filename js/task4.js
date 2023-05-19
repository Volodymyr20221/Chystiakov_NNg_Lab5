function isPalindrome(number) {
    let str = number.toString();
    return str === str.split("").reverse().join("");
}

function task4() {
    console.log("Задача 4");

    let inputValid = false;
    let num = 0;

    while (!inputValid) {
        let input = prompt("Введіть число:");

        if (input === null) {
            console.log("Виконання завершено.");
            return;
        }

        let value = parseInt(input);

        if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
            inputValid = true;

            if (isPalindrome(value) && isPalindrome(value * value)) {
                console.log(`Число ${value} є поліндромом, квадрат якого також є паліндромом.`);
            } else {
                console.log(`Число ${value} не є поліндромом, квадрат якого також є паліндромом.`);
            }
        } else {
            alert("Помилка: Введене значення не є коректним числом.");
        }
    }
}

task4();