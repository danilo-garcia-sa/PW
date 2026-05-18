const formulario = document.querySelector("form");
 
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
 
  const nombre    = document.querySelector("#nombre").value.trim();
  const email     = document.querySelector("#email").value.trim();
  const telefono  = document.querySelector("#telefono").value.trim();
  const cantidad  = document.querySelector("#cantidad").value;
  const corte     = document.querySelector("#especie").value;
  const mensaje   = document.querySelector("#mensaje");
 
  const tamanioBolsa = document.querySelector('input[name="cantidad"]:checked');
 
  const carnesChecked = document.querySelectorAll('.opcion-checkbox input[type="checkbox"]:checked');
  const carnes = Array.from(carnesChecked).map(function(cb) {
    return cb.nextElementSibling.textContent.trim();
  });
 
  mensaje.className = "";
  mensaje.textContent = "";
 
  if (nombre === "") {
    mensaje.textContent = "⚠️ El nombre es obligatorio. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (email === "") {
    mensaje.textContent = "⚠️ El email es obligatorio. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (!email.includes("@")) {
    mensaje.textContent = "⚠️ El email no parece válido. Revisá que tenga @. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (telefono === "") {
    mensaje.textContent = "⚠️ El teléfono es obligatorio. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (carnes.length === 0) {
    mensaje.textContent = "⚠️ Tenés que seleccionar al menos un tipo de carne. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (corte === "") {
    mensaje.textContent = "⚠️ Tenés que elegir un tipo de corte. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (!tamanioBolsa) {
    mensaje.textContent = "⚠️ Tenés que elegir el tamaño de la bolsa. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  if (Number(cantidad) < 1) {
    mensaje.textContent = "⚠️ La cantidad de bolsas debe ser al menos 1. ⚠️";
    mensaje.className = "error";
    return;
  }
 
  const carnesTexto = carnes.join(", ");
  const tamanoTexto = tamanioBolsa.value;
  const corteTexto  = corte;
  const comentarios = document.querySelector("#comentarios").value;
 
  let resumen = `✅ ¡Pedido recibido, ${nombre}!
Carnes: ${carnesTexto}
Corte: ${corteTexto}
Tamaño de bolsa: ${tamanoTexto}
Cantidad de bolsas: ${cantidad}
Te confirmamos el pedido a: ${email}`;
 
  if (comentarios !== "") {
    resumen += `\nComentarios: ${comentarios}`;
  }
 
  mensaje.textContent = resumen;
  mensaje.className = "exito";
 
  console.log("Pedido enviado:", { nombre, email, telefono, carnes, corteTexto, tamanoTexto, cantidad, comentarios });
});