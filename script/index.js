function positions(firstPlace, secondPlace, lastPlace){
  let competidores = [firstPlace, secondPlace, lastPlace];
  
  let variavel1 = 2
  let variavel2 = 1
  let variavel3 = 0

  let podio = []
    if(variavel1 > variavel2 && variavel1 > variavel3){
      podio.push(competidores[0])
    }
    if(variavel1 > variavel2 && variavel2 > variavel3){
    podio.push(competidores[1])
    }
    if(variavel2 > variavel3){
      podio.push(competidores[2])
    }
    if(podio[1] == "Daniel" || podio[2] == "Daniel"){
      podio[0] = `1º colocado: ${competidores[1]}`
      podio[1] = `2º colocado: ${competidores[2]}`
      podio[2] = `3º colocado: ${competidores[0]}` 
    }
  
    console.log(podio.toString())
}
positions("Rafael", "Daniel", "Manoel")