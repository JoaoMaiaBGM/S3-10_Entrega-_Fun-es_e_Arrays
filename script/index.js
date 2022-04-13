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
    if(podio[1] == "Daniel"){
      podio[0] = "1º lugar:" + ' ' + competidores[1]
      podio[1] = "2º lugar:" + ' ' + competidores[0]
    }else if(podio[2] == "Daniel"){
      podio[1] = "2º lugar:" + ' ' + competidores[2]
      podio[2] = "3º lugar:" + ' ' + competidores[1]
    }
    console.log(podio)
}
positions("Rafael", "Manoel", "Daniel")
