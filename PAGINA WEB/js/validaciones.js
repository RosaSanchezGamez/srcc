const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#btnCrear");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
  } else {
    otherText.style.visibility = "hidden";
  }
});