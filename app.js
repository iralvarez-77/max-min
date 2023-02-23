const vectorOfNumbers = [25, 2, 1, 111];

console.log(vectorOfNumbers);

let idxMaximo;
for ( let i = 0 ; i < vectorOfNumbers.length ; i++) {

  let count = vectorOfNumbers[i] 
  
  if ( vectorOfNumbers[0] <= count ) {
    idxMaximo = i;
  } 
}

console.log('maximo:', idxMaximo);

let idxMinimo ;
for ( let i = 0 ; i < vectorOfNumbers.length ; i++) {

  let count = vectorOfNumbers[i] 
  
  if ( vectorOfNumbers[0]>= count ) {
    idxMinimo = i;
  } 

}

console.log(`minimo: ${idxMinimo}`);

