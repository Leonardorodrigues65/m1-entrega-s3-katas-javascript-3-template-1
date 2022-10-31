//////  1  //////

function xRunning(running){
   
  for(let i = 0 ; i < running.length ; i++){
    running[i] = "x";

    if( i != 0){
      running[i - 1] = "-";
    }

    console.log(running);
  };


};

xRunning (["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);

//////   2  /////

function vowelsCounter(counter){

  let vogal = [];

  for(let i = 0 ; i < counter.length ; i++){
    let fruta = counter[i];
    let contVogal = 0

    for( let v = 0 ; v < fruta.length ; v++){
      let frutaVogal = fruta[v];

      if(frutaVogal == "a"){
        contVogal++
      }else if (frutaVogal == "e"){

        contVogal++
      }else if (frutaVogal == "i"){

        contVogal++
      }else if (frutaVogal == "o"){
        
        contVogal++
      }else if (frutaVogal == "u"){
        contVogal++
      };

    
    };

    vogal.push(contVogal);
  };

   return vogal;
}

console.log(vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]));

//////  3 //////

function stringTripletGroup(triple){    

let fraseFatiada = [];

for(let i = 0 ; i < triple.length ; i+= 3){

  let letra = triple[i];
  let vazia = "";

  triple[i + 1];
  triple[i + 2];
  vazia += triple[i];

  if(triple[i + 1] == undefined) {
    vazia += " "

  }else {
     vazia += triple[i + 1 ]

  }if (triple[i + 2 ] == undefined ){
    vazia += " "

  }else{
    vazia += triple[i + 2]

  };

   fraseFatiada.push(vazia);

};

   return fraseFatiada;


};


console.log(stringTripletGroup("Os três mosqueteiros"));


///////     4    ///////

function dominantPet(pet){

  let contCat = 0;
  let contDog = 0;

  for(let i = 0 ; i < pet.length ; i++){

    let letra = pet[i];

    if(letra.toLowerCase() == "dog"){
      contDog++

    }else if (letra.toLowerCase() == "cat"){
      contCat++
    };
     
  };

    if (contCat === contDog){
      console.log(` "DRAW"`)

    }else if(contDog > contCat){
      console.log(`"DOG !"`)

    }else{
      console.log(` "CAT !"`)
    };



};

dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]);


//////  5 //////

function divisibleList (lista , n ){

let divisible = [];

for(let i = 0 ; i < lista.length ; i++){
   let numero = lista[i];

   if(numero % n == 0 ){
    divisible.push(numero)
   };
};

 return divisible;


};

console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));


///////  6 //////

function trustMeOrNot(bool , n){

let trust = [];

for(let i = 0 ; i < n ; i++){
  let numero = i ; 

  trust.push(bool);
};

return trust;

};

console.log(trustMeOrNot(true, 8));


/////// 7 ///////


function changeLampStatus(lista){

let change = [];

for(let i = 0 ; i < lista.length ; i++){
    let lamp = lista[i];

    if(lamp == true){
      change.push(false)

    }else{
      change.push(true)
    };
};

return change;


};

console.log(changeLampStatus([false, false, true, false, true, true, true]));


///////   8    ///////

function gradeAverage (lista){

  let soma = 0 ; 
  let cont = 0 ; 
  let grade = [];


  for(let i = 0 ; i < lista.length ; i++){
    let notas = lista[i];
    soma += notas ;
    cont ++;
  };

  let media = (soma / cont).toFixed(2);

  if (media >= 0.00 && media <= 10.00){
    console.log(` "A media das notas é : ${media}"`)
  };
};

gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]);


///////  9  ///////

function canvasDeliveriesPercentage(lista){

  let soma = 0 ;
  let cont = 0 ; 

  for(let i = 0 ; i < lista.length ; i++){
   let nota = lista[i];
   soma += nota / 10 
   cont ++

  };

  let porcentagem = (soma * cont ).toFixed(2);

  if(porcentagem >= 0.00 && porcentagem <= 100.00){
    console.log(`"A media das notas é ${porcentagem}%" , Pois foram distribuidos 100 pontos e o aluno conseguiu apenas 71.1 deles. `)

  }else{
    console.log("valor de notas acima do permitido")
  }
};

canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]);


/////// 10   //////



function shouldIGo(lista){

let should = [];

   for(let i = 0; i < lista.length ; i++){
    let letra = lista[i];

  if(letra == "R"){
    should.push("Stop!")

   } else if(letra == "r"){
   should.push("Stop!")

  } else if(letra == "Y"){
   should.push("Attention!") 

  } else if(letra == "y"){
   should.push("Attention!")

  } else if(letra == "G"){
   should.push("Go!")

  } else if(letra == "g"){
   should.push("Go!")
 };

   };
    return should;

};

  console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]));

