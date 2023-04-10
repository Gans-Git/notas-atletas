let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   for (let i = 0; i < atletas.length; i++) {
    console.log("Atleta: " + atletas[i].nome)
    atletas[i].notas.sort()
    console.log("Notas Obtidas: " + atletas[i].notas)
    let notasCut = atletas[i].notas.sort(function(a,b){
      if(a>b) return 1
      if(a<b) return - 1
      return 0
    })
    let notasValidas = notasCut.slice(1,4)
    let total = notasValidas[0] + notasValidas[1] + notasValidas[2]
    let media = total/notasValidas.length
    console.log(media)
   }
