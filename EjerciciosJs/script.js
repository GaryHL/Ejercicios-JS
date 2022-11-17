// Suma de dos numeros

function suma(a, b) {
   result = a + b;
   return result;
}

console.log("suma", suma(1, 1));


//  Par o impart

function parOImpar(numero) {
   if (numero % 2 == 0) {
      return "es par";
   } else {
      return "es impar";
   }
}

console.log("par o impar", parOImpar(3));


//  Objeto carro

const carro = {
   nombre: "Rayo MQueen",
   marca: "Nascar",
   puertas: "2 pero.. ¿para que sirven?",
   carreras_ganadas: ["copa piston 1", "copa piston 2", "copa piston 3"],
};

//Ver marca

const verMarca = () => {
   return carro.marca;
};

console.log("ver Marca", verMarca());


// Ver puertas

const verPuertas = () => {
   return carro.puertas;
};

console.log(verPuertas());


// Ver objeto anidado

const verObjetoAnidado = () => {
   return carro.carreras_ganadas[1];
};

console.log("ver objeto anidado", verObjetoAnidado());


// array de 10 numeros

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//imprimir todos los numeros

const imprimir = (array) => {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
};

imprimir(numeros);


//imprimir solo pares

const imprimirPares = (array) => {
    
   let arrayPares = array.filter(number => number %2 == 0 )
   console.log(arrayPares)

};

imprimirPares(numeros);


console.log("--------------Segunda parte--------------------");
