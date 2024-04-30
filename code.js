//goal: 10 - 40 - 39
    //num1 = 10
    //num2 uses num1 to equal 40
    //num3 uses num2 and num1 to equal 39


/*
num1 is EQUAL TO 10 by ADDING 1 AND 9
num2 is EQUAL T0 40 by MULTIPLYING num2 by 4
num3 is EQUAL TO 39 by SUBTRACTING the num1 DIVIDED num1
*/

const num1 = 1 + 9
const num2 = num1 * 4
const num3 = num2 - (num1 / num1)

const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'
alert(`${message}\n${num1} - ${num2} - ${num3}`)