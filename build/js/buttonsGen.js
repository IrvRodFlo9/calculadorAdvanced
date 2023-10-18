import{buttons,specialClasses}from"./data.js";const generateBtns=t=>{buttons.forEach(e=>{const s=document.createElement("button");s.innerHTML=e;const n=specialClasses[e];n&&s.classList.add(n),t.appendChild(s)})};export default generateBtns;
//# sourceMappingURL=buttonsGen.js.map
