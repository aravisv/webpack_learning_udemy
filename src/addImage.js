import selfie from "./selfie.jpg";
import altText from "./altText.txt";

export const addImage = () => {
  const imageElement = document.createElement("img");
  imageElement.alt = altText;
  imageElement.src = selfie;
  imageElement.width = 300;
  const body = document.querySelector("body");
  body.appendChild(imageElement);
};
