function task3() {
    console.log("Задача 3");

    let d = parseInt(prompt("Введіть цифру d:"), 10);

    if (!Number.isNaN(d) && d >= 0 && d <= 9) {
        let sum = 0;
        for (let i = 100; i <= 999; i++) {
            if (String(i).includes(d)) {
                sum += i;
            }
        }

        console.log(`Введені дані: d = ${d}`);
        console.log(`Результат виконання скрипта: сума = ${sum}`);
    } else {
        console.log("Некоректні дані. Будь ласка, спробуйте ще раз.");
    }
}

if (confirm("Ви хочете перейти до розв’язку наступної задачі?")) {
    task3();
}