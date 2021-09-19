// Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba proporcionados al final del enunciado.

function Ricks(array) {
  let suma = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       suma = (suma + array[i]);}
       let promd = (suma/array.length);
       if (array.length=0)
       {return promd=0}
       else
       {return promd}}

               console.log(Ricks([96, 108, 89]))
               console.log(Ricks([]))

 //2. Compare los puntajes promedio del equipo para determinar el ganador de la competencia, e imprimirlo en la consola. No olvides que puede haber un empate, así que toma en cuenta ese caso también.


 function Mortys(array) {
  let suma = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       suma = (suma + array[i]);}
       let prom2= (suma/array.length);
       if (array.length=0)
       {return prom2=0}
       else
       {return prom2}}

               console.log(Mortys([88, 91, 110]))
               console.log(Mortys([]))
 
if (Mortys>Ricks){
  console.log ("Mortys ganador");
}
else if(Mortys<Ricks){
  console.log ("Ricks ganador");
  }
else 
     if(Ricks===Mortys){
     console.log("empates");
}

//Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo solo gana si tiene una puntuación más alta que el otro equipo, y además tiene una puntuación de al menos 100 puntos. 

let requisito=100;
if (Mortys > Ricks && Mortys === requisito ) {
  console.log("ganador Mortys");
}
console.log("ganador Ricks");

   

// ¡La puntuación mínima también se aplica a un empate! Entonces, un empate solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo gana el premio. 
if (Mortys === Ricks) {
    console.log("empates");
}
else 
  if (Ricks >= 100 && Mortys >= 100){
      console.log("Son empates");
  }
  console.log("Son perdedores");

  //5. Cree una arrow function 'calcAverage' para calcular el promedio de 3 puntuaciones


const puntos = [45, 45, 22, 8]
function calcAverage(puntos){
  let suma = 0;
  for (let i=0; i<3;i++){
    suma += puntos[i];
  
  return suma / (puntos.length);
}
console.log("devuelve promedio de los 3  ", calcAverage(puntos));



//6. Usa la función para calcular el promedio de ambos equipos.

function calcAverage(rick){
  let sum = 0;
  for(let i=0; i< rick.length;i++){
    suma+= rick[i];
  }
  return suma / (rick.length);
}
function calcAverage(morty){
  let sum = 0;
  for(let i=0; i< morty.length;i++){
    suma+= morty[i];
  }
  return suma / (morty.length);

}
console.log("promedio de Rick:",calcAverage("rick"), "promedio de Morty:",calcAverage(morty));
};
//7. Cree una función 'checkWinner' que tome la puntuación media de cada equipo. como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan (30 contra 13)" 8. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y Datos 2 
