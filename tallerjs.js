function sumar(a, b) {

    const num1 = Number(a);
    const num2 = Number(b);


    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Los valores ingresados deben ser números válidos.");
    }

    return num1 + num2;
}