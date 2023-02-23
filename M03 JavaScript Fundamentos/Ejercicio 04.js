/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   num ** 2;
   return num
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   num ** 3
   return num 
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   num ** exponent
   return num
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   Math.round(num)
   console.log(num)
   return num
}

redondearNumero(0.49)

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   Math.ceil (num);
   console.log(num)
}

redondearHaciaArriba(3.27)

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   Math.random()
   console.log()
}

numeroRandom ()

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
