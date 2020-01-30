/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsFound = "";
    let consonantsFound = "";

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsFound += s[i] + "\n";
        } else {
            consonantsFound += s[i] + "\n";
        }
    }

    console.log(vowelsFound.substring(0,vowelsFound.length-1));
    console.log(consonantsFound.substring(0, consonantsFound.length - 1));
}

