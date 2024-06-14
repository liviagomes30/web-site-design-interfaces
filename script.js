// barra de progresso
window.addEventListener("scroll", function () {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

// ao ir para alguma seção da página, subir um pouco para ficar na posição correta
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = -80; // Ajuste este valor para mais ou menos pixels

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
