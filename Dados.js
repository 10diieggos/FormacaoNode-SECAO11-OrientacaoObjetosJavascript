//Aula 170 - Desafio do dado

//Sistema de Cassino
//Vários tipos de Dados
//Rolar Dados

//Esta é a minha versão REFATORADA da solução. A do professor Victor Lima vem no próximo commit

class Dado {

  constructor(faces) {
    this.faces = faces
  };

  Rolar() { 
    let aleatory = Math.random();
    aleatory = aleatory * this.faces;
    aleatory = Math.ceil(aleatory);
    console.log(aleatory);
  };
};

let dado = new Dado(6);

dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
dado.Rolar();
