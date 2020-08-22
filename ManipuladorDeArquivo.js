class Reader {
  constructor(file) {
    this.file = file;
  };
  Read () {
    console.log(`Content of ${this.file}`)
  };
};
class Writer {
  constructor(file) {
    this.file = file;
  };
  Write (file, content) {
    console.log(`Writed content in ${this.file}`);
  };
};
class Creator {
  constructor(file) {
    this.file = file;
  };
  Create   () {
    console.log(`File ${this.file} created...`);
  };
};
class Destroyer {
  constructor(file) {
    this.file = file;
  };
  Delete () {
    console.log(`File ${this.file} deleted...`);
  };
};
class fileHandler {
  constructor (file) {
    this.reader = new Reader(file);
    this.writer = new Writer(file);
    this.creator = new Creator(file);
    this.destroyer = new Destroyer(file);
  };
};

let handler = new fileHandler('meuArquivo.txt');

handler.creator.Create();
handler.writer.Write();
handler.reader.Read();
handler.destroyer.Delete();