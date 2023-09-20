document.querySelector(".btnlogin-popup").addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach((item) => {
      item.classList.toggle("showing");
    });
  });