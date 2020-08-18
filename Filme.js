class Filme{
  constructor(t,a,g,d,o,u) {
    this.titulo = t;
    this.ano = a;
    this.genero = g;
    this.diretor = d;
    this.atores = o;
    this.duracao = u;
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

let vingadores = new Filme('Vingadores', 2000, 'Ação', 'Max Walt', ['Fulano', 'Fulana', 'Cilclaninho'], '2h:30min');

console.log(vingadores)