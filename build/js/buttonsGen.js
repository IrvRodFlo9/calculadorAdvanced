import{buttons}from"./data.js";const generateBtns=t=>{buttons.forEach(e=>{const s=document.createElement("button");s.innerHTML=e,"Del"===e&&s.classList.add("btn-delete"),"Clear"===e&&s.classList.add("btn-clear"),"="===e&&s.classList.add("btn-equals"),"Ans"===e&&s.classList.add("btn-answer"),t.appendChild(s)})};export default generateBtns;
//# sourceMappingURL=buttonsGen.js.map
