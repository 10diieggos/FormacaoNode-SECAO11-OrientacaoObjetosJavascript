class Filme{
  constructor() {
    this.titulo = "";
    this.ano = "";
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duracao = "";
  };

  Reproduzir() { 
    console.log('reproduzindo...');
  };

  Pausar() { 
    console.log('pausado ||');
  };

  Avançar() { 
    console.log('avançar >>');
  };

  Fechar() { 
    console.log('fechar X');
  };

};