export default class GramaticaRegular {
  constructor(nTerminales, terminales, producciones, raiz) {
    this.nTerminales = nTerminales;
    this.terminales = terminales;
    this.producciones = producciones;
    this.raiz = raiz;
  }

  get GetNTerminales() {
    return this.nTerminales;
  }

  set setNTerminales(nTerminales) {
    this.nTerminales = nTerminales;
  }

  get GetTerminales() {
    return this.terminales;
  }

  set setTerminales(terminales) {
    this.terminales = terminales;
  }

  get GetProducciones() {
    return this.producciones;
  }

  set setProducciones(producciones) {
    this.producciones = producciones;
  }

  get GetRaiz() {
    return this.raiz;
  }

  set setRaiz(raiz) {
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
      nT += this.nTerminales[index];
      if (index + 1 < this.nTerminales.length) nT += ", ";
    }

    let p = "";

    for (let index = 0; index < this.producciones.length; index++) {
      p +=
        this.producciones[index][0] +
        " --> " +
        this.producciones[index][1] +
        "\n";
    }

    console.log(`GR = { {${nT}}, {${T}}, P, ${this.raiz}}`);
    console.log(`P: \n${p}`);
  }

  ToHtml(name = "GR") {
    let T = "";
    for (let index = 0; index < this.terminales.length; index++) {
      T += this.terminales[index];
      if (index + 1 < this.terminales.length) T += ", ";
    }

    let nT = "";
    for (let index = 0; index < this.nTerminales.length; index++) {
      nT += this.nTerminales[index];
      if (index + 1 < this.nTerminales.length) nT += ", ";
    }

    let p = "";

    for (let index = 0; index < this.producciones.length; index++) {
      p +=
        this.producciones[index][0] +
        " → " +
        this.producciones[index][1] +
        "<br>";
    }
    let str = "";
    str += `${name} = { {${nT}}, {${T}}, P, ${this.raiz}}`;
    str += `<br>P: <br>${p}`;

    console.log(str);
    return str;
  }
  existRightRoot() {
    for (let index = 0; index < this.producciones.length; index++) {
      const prod = this.producciones[index];
      if (prod[1].includes(this.raiz)) return true;
    }
    return false;
  }

  // removeRightRoot() {
  //   let s = this.raiz + "'";
  //   let nT = [s, ...this.nTerminales];
  //   let T = [...this.terminales];
  //   let p = [];

  //   for (let index = 0; index < this.producciones.length; index++) {
  //     const produccion = this.producciones[index];

  //     if (produccion[0].includes(this.raiz)) p.push([s, produccion[1]]);

  //     p.push(produccion);
  //   }

  //   const g2 = new GRLinealDerecha(nT, T, p, s);
  //   return g2;
  // }
}
