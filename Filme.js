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
    console.log('Reproduzindo ->');
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

  Ficha() { 
    console.log(`
      Título: ${this.titulo}
      Ano: ${this.ano}
      Gênero: ${this.genero}
      Diretor: ${this.diretor}
      Atores: ${this.atores}
      Duracao: ${this.duracao}
    `);
    this.Reproduzir()
  };

};

let filme1 = new Filme('Vingadores', 2000, 'Ação', 'Max Walt', ['Fulano', 'Fulana', 'Cilclaninho'], '2h:30min');

filme1.Ficha()

let filme2 = new Filme('Batman', 2005, 'Ação', 'Walter Max', ['Beltrano', 'Ciclana', 'Fulano'], '2h:30min');

filme2.Ficha()