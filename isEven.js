/*
 * Even Number
 *
 * Find if a given whole number is even using recursion.
 */

function isEven(number) {

    if (number >= 0) {
        number -= 2;

        if (number === 0) {
            return true;
        }
        else if (number === 1) {
            return false;
        }
        else {
            return isEven(number);
        }
    } else {
        console.log("Please enter an integar greater than 0.");
    }

}

isEven(50);