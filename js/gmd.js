class Grd {
  constructor(nTerminales, terminales, producciones, raiz) {
    this.terminales = terminales;
    this.setTerminales = terminales;

    this.nTerminales = [];
    this.setNTerminales = nTerminales;

    this.producciones = producciones;
    this.raiz = raiz;
  }

  mostrar() {
    let T = "";
    for (let index = 0; index < this.terminales.length; index++) {
      T += this.terminales[index];
      if (index + 1 < this.terminales.length) T += ", ";
    }

    let nT = "";
    for (let index = 0; index < this.nTerminales.length; index++) {
      nT += this.terminales[index];
      if (index + 1 < this.nTerminales.length) nT += ", ";
    }

    let p = "";

    for (let index = 0; index < this.producciones.length; index++) {
      p +=
        this.producciones[index][0] +
        " ==> " +
        this.producciones[index][1] +
        "\n";
    }

    console.log(`GRD = { {${nT}}, {${T}}, P, ${this.raiz}}`);
    console.log(`P: \n${p}`);
  }

  set setNTerminales(nTerminales) {
    console.log("N");
    for (let index = 0; index < nTerminales.length; index++) {
      const element = nTerminales[index];
      if (!(element.length === 1)) {
        return "Cada no terminal debe ser un solo caracter.";
      }
      if (!this.isUpperKey(element)) {
        return "Las no terminales deben ser Mayusculas.";
      }
    }

    console.log("ok no terminales");
    for (let index = 0; index < nTerminales.length; index++)
      this.terminales.push(nTerminales[index]);
  }

  isUpperKey(elemento) {
    if (elemento === elemento.toUpperCase()) return true;
    return false;
  }
}

let nT = ["S", "A"];
let T = ["a", "b"];
let p = [
  ["S", "aS"],
  ["S", "a"],
];
let S = "S";

const g = new Grd(nT, T, p, S);
g.mostrar();
