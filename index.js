const pesoImc = document.getElementById("peso");
const alturaImc = document.getElementById("altura");
const submitImc = document.getElementById("btnimc");
const resultadoImc = document.getElementById("imc");
const toastContainer = document.getElementById("toast-container");

const getImcMessage = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade Grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade Grau 2";
    return "Obesidade Grau 3";
};

const showToast = (message) => {
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.role = "alert";
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Resultado do IMC</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">${message}</div>
    `;
    
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
};

submitImc.addEventListener("click", (e) => {
    e.preventDefault()
    const peso = parseFloat(pesoImc.value);
    const altura = parseFloat(alturaImc.value);
    
    if (!peso || !altura || altura <= 0) {
        showToast("Por favor, insira valores válidos para peso e altura.");
        return;
    }
    
    const imc = peso / (altura * altura);
    resultadoImc.textContent = imc.toFixed(1);
    
    const message = getImcMessage(imc);
    showToast(`Seu IMC é ${imc.toFixed(1)} - ${message}`);
});
