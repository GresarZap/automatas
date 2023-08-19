import GR from "./gr.js";
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
}
