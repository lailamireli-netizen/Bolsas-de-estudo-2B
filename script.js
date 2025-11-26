console.log("Site carregado!");

const fakeEmail = "teste@gmail.com";
const fakeSenha = "123456";

if (window.location.pathname.includes("login.html")) {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;
    const senha = form.querySelector("input[type='password']").value;

    if (email === fakeEmail && senha === fakeSenha) {
      alert("Login bem-sucedido!");
      window.location.href = "index.html";
    } else {
      alert("Email ou senha incorretos!");
    }
  });
}
