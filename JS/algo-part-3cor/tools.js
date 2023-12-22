function displayArray(obj) {
    let out = 'Vos Notes :\n\n'; // "\n" = saut de ligne
    for (let i in obj) {
        out += "Note " + i + " -> " + obj[i] + "\n \n";
    }

    alert(out + '\n' + "La moyenne est de " + totalResult);
}
/* 
 * Display inside an alert box the formatted content of an array
 * with something like : "index : i -> value" for each item of the array.
 * 
 * parameters: obj: array to display
 * return:  
 */

