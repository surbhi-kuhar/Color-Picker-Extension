const color = document.querySelector(".color");
const hexcode = document.querySelector(".hex-code");
const pickbtn = document.querySelector(".pick-btn");

pickbtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);

  const eyeDropper = new EyeDropper();
  console.log("created");
  const sel = await eyeDropper.open();
  console.log("opened");
  console.log(sel);

  color.style.backgroundColor = sel.sRGBHex;
  hexcode.innerHTML = sel.sRGBHex;

  navigator.clipboard.writeText(sel.sRGBHex);
  
});
