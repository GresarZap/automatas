export default class GrliController {
  constructor(model) {
    this.model = model;
  }

  handleEvent(e) {
    e.preventDefault();
    if (e.target.matches("#solve")) {
      console.log("solve!!");
      this.clickSolve();
    }
  }

  clickSolve() {
    const $nTerminales = document.querySelector("#nTerminales");
    const $msgNT = document.querySelector("#msgNT");

    const $terminales = document.querySelector("#terminales");
    const $msgT = document.querySelector("#msgT");

    const $producciones = document.querySelector("#producciones");
    const $msgP = document.querySelector("#msgP");

    const $raiz = document.querySelector("#raiz");
    const $msgR = document.querySelector("#msgR");

    const $output = document.querySelector("#output");

    //revisando si la entrada nTerminales cumple con el formato
    if (!$nTerminales.checkValidity()) {
      $msgNT.classList.remove("hidden");
      return;
    } else $msgNT.classList.add("hidden");

    //revisando si la entrada Terminales cumple con el formato
    if (!$terminales.checkValidity()) {
      $msgT.classList.remove("hidden");
      return;
    } else $msgT.classList.add("hidden");

    //revisando si la entrada Producciones cumple con el formato
    if (!$producciones.checkValidity()) {
      $msgP.classList.remove("hidden");
      return;
    } else $msgP.classList.add("hidden");

    //revisando si la entrada Raiz cumple con el formato
    if (!$raiz.checkValidity()) {
      $msgR.textContent =
        "Solo ingresar Mayusculas(El simbolo deberia pertenecer al no terminal): S!!";
      $msgR.classList.remove("hidden");
      return;
    } else if (!$nTerminales.value.includes($raiz.value)) {
      $msgR.textContent = "La raiz debe pertener a los Terminales!!";
      $msgR.classList.remove("hidden");
      return;
    } else $msgR.classList.add("hidden");

    //EXTRAYENDO LAS ENTRADAS
    let nT = $nTerminales.value;
    let t = $terminales.value;
    let p = $producciones.value;
    let r = $raiz.value;

    //no terminales
    let er = /([A-Z])/g;
    let nTerminal = er.exec(nT);
    const nTerminales = [];

    while (nTerminal) {
      nTerminales.push(nTerminal[1]);
      nTerminal = er.exec(nT);
    }

    //terminales
    er = /([a-z])/g;
    let terminal = er.exec(t);
    const terminales = [];

    while (terminal) {
      terminales.push(terminal[1]);
      terminal = er.exec(t);
    }

    //producciones
    er = /([A-Z])>([A-Z][a-z]*)/g;
    let produccion = er.exec(p);
    const producciones = [];

    while (produccion) {
      producciones.push([produccion[1], produccion[2]]);
      produccion = er.exec(p);
    }

    //raz
    const raiz = $raiz.value;

    //setting valores para el modelo
    this.model.setNTerminales = nTerminales;
    this.model.setTerminales = terminales;
    this.model.setProducciones = producciones;
    this.model.setRaiz = raiz;

    //poniendo la referencia del modelo en g1
    const g1 = this.model;

    //cadena de salida
    let output = g1.ToHtml("GRLD") + "<br>";

    g1.mostrar();

    //verificando si existe raiz en parte derecha
    if (g1.existRightRoot()) {
      //removemos raiz derecha
      const g2 = g1.removeRightRoot();
      output +=
        "Construimos una GRLD que no tenga Simbolo raiz en la Derecha.<br><br>" +
        g2.ToHtml("GRLD'") +
        "<br>";
      //creamos GRLD
      const g3 = g2.createGRLD();
      output += g3.ToHtml("GRLD");
    } else {
      //creamos GRLD
      output += g1.createGRLD().ToHtml("GRLD");
    }

    $output.innerHTML = output;

    const $salida = document.querySelector(".output");
    $salida.scrollIntoView({ behavior: "smooth" });
  }
}
