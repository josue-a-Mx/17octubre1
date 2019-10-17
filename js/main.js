/* let num = prompt("Ingrese un valor")

if ((num%2)==0)
{
    console.log("Número par") //Versión 1
}
else
{
    console.log("Número impar")
} */

/* let num1 = prompt("Ingrese un número")

let opc = prompt("¿Hay otro número?", "1: Sí, 2: No")

if (opc == 1)
{
    let num2 = prompt("Ingrese un número")
    if (num1 >= num2)
    {
        console.log(num1, "es mayor que", num2)
    }
    else                    //Versión 2
    {
        console.log(num2, "es mayor que", num1)
    }
}
else if (opc == 2)
{
    if ((num1%2) == 0)
    {
        console.log(num1, "es un número par")
    }
    else
    {
        console.log(num1, "es un número impar")
    }
} */

let num1 = prompt("Ingrese un número")

let num2 = prompt("Ingrese otro número")

let moduloUno = num1%2

let moduloDos = num2%2

if ((moduloUno == 0) && (moduloDos == 0))
{
console.log(num1, "es un número par, y", num2, "también")
}

else if ((moduloUno == 0) || (moduloDos == 0))
{
console.log("Uno de los dos valores es par")
}

if (num1 >= num2)
{
console.log(num1, "es mayor que", num2) //Versión final
}

else if (num1 == num2)
{
console.log("Son iguales")
}

else
{
console.log(num2, "es mayor que", num1)
}