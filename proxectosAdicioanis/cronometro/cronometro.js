let segundos = 0;
let intervalo = null;

function formatarTempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segs = totalSegundos % 60;

  return (
    String(horas).padStart(2, "0") +
    ":" +
    String(minutos).padStart(2, "0") +
    ":" +
    String(segs).padStart(2, "0")
  );
}

function actualizarPantalla() {
  document.getElementById("tempo").textContent = formatarTempo(segundos);
}

function iniciar() {
  if (intervalo !== null) return;

  intervalo = setInterval(() => {
    segundos++;
    actualizarPantalla();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function reiniciar() {
  pausar();
  segundos = 0;
  actualizarPantalla();
}
