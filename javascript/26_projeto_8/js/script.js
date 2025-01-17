// seleção de elementos
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// eventos
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;
    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `imgs/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 100);
  });
});
