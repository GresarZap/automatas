import GR from "./gr.model.js";
import GRLD from "./grld.model.js";

export default class GRLinealIzquierda extends GR {
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
    if (!this.existRightRoot())
      return new GRLinealIzquierda(
        [...this.GetNTerminales],
        [...this.GetTerminales],
        [...this.GetProducciones],
        this.GetRaiz
      );

    let s = this.raiz + "'";
    let nT = [s, ...this.nTerminales];
    let T = [...this.terminales];
    let p = [];

    for (let index = 0; index < this.producciones.length; index++) {
      const produccion = this.producciones[index];

      if (produccion[0].includes(this.raiz)) p.push([s, produccion[1]]);

      p.push(produccion);
    }

    const g2 = new GRLinealIzquierda(nT, T, p, s);
    return g2;
  }

  createGRLD() {
    // if(this.existRightRoot())

    let s = this.raiz;
    let nT = [...this.nTerminales];
    let T = [...this.terminales];
    let p = [];

    for (let index = 0; index < this.producciones.length; index++) {
      const produccion = [...this.producciones[index]];
      //S-->a, S raiz
      //S-->a
      if (produccion[0].includes(s) && produccion[1].length == 1) {
        p.push(produccion);
      } else if (produccion[0].includes(s) && produccion[1].length == 2) {
        //S-->Xa, S raiz
        //X-->a
        p.push([produccion[1].charAt(0), produccion[1].charAt(1)]);
      } else if (produccion[1].length == 2) {
        //Y-->Xa, Y!=raiz
        //X-->aY
        p.push([
          produccion[1].charAt(0),
          produccion[1].charAt(1) + produccion[0],
        ]);
      } else {
        //Y-->a, Y!=raiz
        //S-->aY
        p.push([s, produccion[1] + produccion[0]]);
      }
    }

    const g = new GRLinealIzquierda(nT, T, p, s);
    return g;
  }
}
