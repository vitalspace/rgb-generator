const elem = (target) => document.querySelector(target);

const updateColor = () => {
  const r = elem("#range1").value;
  const g = elem("#range2").value;
  const b = elem("#range3").value;

  elem(".container").style.background = `rgb(${r}, ${g}, ${b})`;
  elem("#rangeValue1").textContent = r;
  elem("#rangeValue2").textContent = g;
  elem("#rangeValue3").textContent = b;
  elem("#rgbValue").textContent = `rgb(${r}, ${g}, ${b});`;
};

const onInput = (e) => {
  updateColor();
};

const copyToClipboard = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const handleCopy = () => {
  const text = elem("#rgbValue").textContent;

  copyToClipboard(text);

  const copyBtn = elem("#copyRgbValue");
  const originalText = copyBtn.textContent;

  copyBtn.textContent = "¡Copied!";

  setTimeout(() => {
    copyBtn.textContent = originalText;
  }, 2000);
};

const init = () => {
  updateColor();

  elem("#range1").addEventListener("input", onInput);
  elem("#range2").addEventListener("input", onInput);
  elem("#range3").addEventListener("input", onInput);
  elem("#copyRgbValue").addEventListener("click", handleCopy);
};

init();
