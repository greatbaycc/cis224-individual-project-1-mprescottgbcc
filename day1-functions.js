/*
 * Create the function factorial here
 */
function factorial(n) {
    let fact = Number(n);
    for (let i = fact-1; i > 0; i--) {
        fact *= i;
    }
    return fact;
}
