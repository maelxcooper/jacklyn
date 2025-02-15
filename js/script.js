document.addEventListener("DOMContentLoaded", function () {
  // Bouncing Letters
  const bounceLetter = document.querySelectorAll(".gr-lt span");

  bounceLetter.forEach((span) => {
    span.addEventListener("mouseover", function () {
      this.classList.add("bounce");
      setTimeout(
        function () {
          this.classList.remove("bounce");
        }.bind(this),
        1000
      );
    });
  });
});
