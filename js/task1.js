function task1() {
    console.log("Задача 1");

    let input = parseInt(prompt("Введіть чотирицифрове число:"), 10);

    if (!Number.isNaN(input) && input >= 1000 && input <= 9999) {
        let stringWithUnderscores = String(input).split('');
        stringWithUnderscores.splice(1, 2, '_', '_');
        let result = stringWithUnderscores.join('');

        console.log(`Введені дані: ${input}`);
        console.log(`Результат виконання скрипта: ${result}`);
    } else {
        console.log("Некоректні дані. Будь ласка, спробуйте ще раз.");
        task1();
    }
}

if (confirm("Ви хочете перейти до розв’язку наступної задачі?")) {
    task1();
}