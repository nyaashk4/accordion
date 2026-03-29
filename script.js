const buttons = document.querySelectorAll(".accordion-button");
const contents = document.querySelectorAll(".accordion-content");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    contents.forEach(function (item) {
      item.style.display = "none";
    });

    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (!isOpen) {
      content.style.display = "block";
      button.classList.add("active");
    }
  });
});
