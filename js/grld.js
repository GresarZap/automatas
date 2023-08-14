import GR from "./gr.js";
import GRLI from "./grli.js";

export default class GRLinealDerecha extends GR {
  constructor(nTerminales, terminales, producciones, raiz) {
    super(nTerminales, terminales, producciones, raiz);
  }

  // set setNTerminales(nTerminales) {
  //   console.log("N");
  //   for (let index = 0; index < nTerminales.length; index++) {
  //     const element = nTerminales[index];
  //     // if (!(element.length === 1)) {
  //     //   return "Cada no terminal debe ser un solo caracter.";
  //     // }
  //     if (!this.isUpperKey(element)) {
  //       return "Las no terminales deben ser Mayusculas.";
  //     }
  //   }

  //   console.log("ok no terminales");
  //   for (let index = 0; index < nTerminales.length; index++)
  //     this.nTerminales.push(nTerminales[index]);
  // }

  // isUpperKey(elemento) {
  //   if (elemento === elemento.toUpperCase()) return true;
  //   return false;
  // }

  removeRightRoot() {
    let s = this.raiz + "'";
    let nT = [s, ...this.nTerminales];
    let T = [...this.terminales];
    let p = [];

    for (let index = 0; index < this.producciones.length; index++) {
      const produccion = this.producciones[index];

      if (produccion[0].includes(this.raiz)) p.push([s, produccion[1]]);

      p.push(produccion);
    }

    const g2 = new GRLinealDerecha(nT, T, p, s);
    return g2;
  }

  createGRLI() {
    let s = this.raiz;
    let nT = [...this.nTerminales];
    let T = [...this.terminales];
    let p = [];

    // console.error(this.raiz);
    for (let index = 0; index < this.producciones.length; index++) {
      const produccion = this.producciones[index];

      // console.log(`index: ${index}`);

      if (produccion[0].includes(this.raiz) && produccion[1].length === 1) {
        // console.log(produccion, " raiz e igual a 1");
        p.push(produccion);
      } else if (
        produccion[0].includes(this.raiz) &&
        produccion[1].length > 1
      ) {
        // console.log(produccion, " raiz y mayor 1");
        p.push([produccion[1].charAt(1), produccion[1].charAt(0)]);
      } else if (produccion[1].length === 1) {
        // console.log(produccion, " no es raiz y mayor 1");
        p.push([this.raiz, produccion[0] + produccion[1]]);
      } else {
        // console.log(produccion, " no es raiz");
        p.push([
          produccion[1].charAt(1),
          produccion[0] + produccion[1].charAt(0),
        ]);
      }
    }

    const g2 = new GRLI(nT, T, p, s);

    return g2;
  }
}

// let nT = ["S", "B"];
// let T = ["a", "b"];
// let p = [
//   ["S", "aS"],
//   ["S", "bB"],
//   ["B", "bS"],
//   ["S", "a"],
// ];
// let S = "S";

// const g = new GRLinealDerecha(nT, T, p, S);
// g.mostrar();
// console.log(g.existRightRoot());

// const g2 = g.removeRightRoot();
// g2.mostrar();

// const g3 = g2.createGRLI();
// g3.mostrar();

// const g4 = new GRLinealDerecha(
//   ["S", "X"],
//   ["a", "b"],
//   [
//     ["S", "aX"],
//     ["X", "aX"],
//     ["X", "bX"],
//     ["X", "b"],
//   ],
//   "S"
// );
// g4.mostrar();
// const g5 = g4.createGRLI();
// g5.mostrar();
