function task2() {
    console.log("Задача 2");

    let x0 = parseFloat(prompt("Введіть координату x0:"));
    let y0 = parseFloat(prompt("Введіть координату y0:"));
    let x1 = parseFloat(prompt("Введіть координату x1:"));
    let y1 = parseFloat(prompt("Введіть координату y1:"));

    if (isNaN(x0) || isNaN(y0) || isNaN(x1) || isNaN(y1)) {
        console.log("Некоректні дані. Будь ласка, спробуйте ще раз.");
    } else {
        let distanceA = Math.sqrt(x0 * x0 + y0 * y0);
        let distanceB = Math.sqrt(x1 * x1 + y1 * y1);
        let result = distanceA > distanceB ? "A" : "B";

        console.log(`Введені дані: A(${x0}, ${y0}), B(${x1}, ${y1})`);
        console.log(`Результат виконання скрипта: Точка ${result} є найбільш віддалена від початку координат`);
    }
}

if (confirm("Ви хочете перейти до розв’язку наступної задачі?")) {
    task2();
}