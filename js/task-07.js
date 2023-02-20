const textRef = document.getElementById("text");

const inputRef = document.getElementById("font-size-control");

inputRef.addEventListener("input", (e) => {
  const size = inputRef.value;
//   console.log(size);

  textRef.style.fontSize = size + "px";
});