//Aula 171 - Reslvendo desafio do dado

//Sistema de Cassino
//Vários tipos de Dados
//Rolar Dados

//Esta é a minha versão REFATORADA da solução. A do professor Victor Lima vem no próximo commit

class Dado {

  constructor(faces) {
    this.faces = faces;
  };

  Rolar() { 
    console.log(this.GetRandomIntInclusive(1, this.faces));
  };

  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
