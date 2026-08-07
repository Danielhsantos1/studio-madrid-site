// Número do Studio Madrid (formato internacional, sem espaços/símbolos)
const WHATSAPP_NUMBER = "5515996858705";

// ---- Menu mobile ----
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
  });
}

// ---- Formulário de agendamento -> WhatsApp ----
const form = document.getElementById("bookingForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const servico = form.servico.value;
    const data = form.data.value;
    const horario = form.horario.value;
    const telefone = form.telefone.value.trim();

    const dataFormatada = data
      ? new Date(data + "T00:00:00").toLocaleDateString("pt-BR")
      : "";

    const mensagem =
      `Olá! Gostaria de agendar um horário no Studio Madrid.\n\n` +
      `Nome: ${nome}\n` +
      `Serviço: ${servico}\n` +
      `Data desejada: ${dataFormatada}\n` +
      `Horário: ${horario}\n` +
      `Meu WhatsApp: ${telefone}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
}
