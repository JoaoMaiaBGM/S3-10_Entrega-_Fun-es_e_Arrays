function positions(firstPlace, secondPlace, lastPlace){

  let competidores = [firstPlace, secondPlace, lastPlace]

  if(competidores[0] == "Daniel"){
    return `1º colocado: ${firstPlace} ` + `2º colocado: ${secondPlace} ` + `3º colocado ${lastPlace} `
  }

  if(competidores[1] == "Daniel"){
    return `1º colocado: ${secondPlace} ` + `2º colocado: ${firstPlace} ` + `3º colocado ${lastPlace} `
  }
  
  if(competidores[2] == "Daniel"){
    return `1º colocado: ${secondPlace} ` + `2º colocado: ${lastPlace} ` + `3º colocado ${firstPlace} `
  }
}
console.log(positions("Manoel", "Rafael", "Daniel"))