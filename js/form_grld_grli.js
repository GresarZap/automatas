import GRLD from "./grld.js";
import GRLI from "./grli.js";

(function formGrldGrli() {
  const $form = document.querySelector("#grld_grli");
  const $button = document.querySelector("#solve");

  $button.addEventListener("click", (e) => {
    const $nTerminales = document.querySelector("#nTerminales");
    const $msgNT = document.querySelector("#msgNT");

    const $terminales = document.querySelector("#terminales");
    const $msgT = document.querySelector("#msgT");

    const $producciones = document.querySelector("#producciones");
    const $msgP = document.querySelector("#msgP");

    const $raiz = document.querySelector("#raiz");
    const $msgR = document.querySelector("#msgR");

    const $output = document.querySelector("#output");

    if (!$nTerminales.checkValidity()) {
      $msgNT.classList.remove("hidden");
      e.preventDefault();
      return;
    } else $msgNT.classList.add("hidden");
    if (!$terminales.checkValidity()) {
      $msgT.classList.remove("hidden");
      e.preventDefault();
      return;
    } else $msgT.classList.add("hidden");
    if (!$producciones.checkValidity()) {
      $msgP.classList.remove("hidden");
      e.preventDefault();
      return;
    } else $msgP.classList.add("hidden");
    if (!$raiz.checkValidity()) {
      $msgR.classList.remove("hidden");
      e.preventDefault();
      return;
    } else $msgR.classList.add("hidden");

    e.preventDefault();

    let nT = $nTerminales.value;
    let t = $terminales.value;
    let p = $producciones.value;
    let r = $raiz.value;

    let er = /([A-Z])/g;
    let nTerminal = er.exec(nT);
    const nTerminales = [];

    while (nTerminal) {
      nTerminales.push(nTerminal[1]);
      nTerminal = er.exec(nT);
    }

    er = /([a-z])/g;
    let terminal = er.exec(t);
    const terminales = [];

    while (terminal) {
      terminales.push(terminal[1]);
      terminal = er.exec(t);
    }

    er = /([A-Z])>([a-z][A-Z]*)/g;
    let produccion = er.exec(p);
    const producciones = [];

    while (produccion) {
      producciones.push([produccion[1], produccion[2]]);
      produccion = er.exec(p);
    }

    console.log(producciones);

    const raiz = $raiz.value;

    const g1 = new GRLD(nTerminales, terminales, producciones, raiz);
    g1.mostrar();

    let output = g1.ToHtml("GRLD") + "<br>";

    if (g1.existRightRoot()) {
      const g2 = g1.removeRightRoot();
      output +=
        "Construimos una GRLD que no tenga Simbolo raiz en la Derecha.<br><br>" +
        g2.ToHtml("GRLD'") +
        "<br>";
      const g3 = g2.createGRLI();
      output += g3.ToHtml("GRLI");
    } else {
      output += g1.createGRLI().ToHtml("GRLI");
    }

    $output.innerHTML = output;

    const $salida = document.querySelector(".output");
    $salida.scrollIntoView({ behavior: "smooth" });
  });
})(document);
