import display from"./display.js";import generateBtns from"./buttonsGen.js";import calculate from"./calculate.js";import clear from"./clear.js";import del from"./delete.js";import debugInput from"./debugInput.js";const btnContainer=document.querySelector(".buttons-container"),lScreen=document.querySelector(".low-screen"),hScreen=document.querySelector(".high-screen");let screen={lScreen:lScreen,hScreen:hScreen,displayError:!1,displayResult:!1,ans:""};const checkInput=e=>{if("="==e){const e=screen.lScreen.innerHTML,n=calculate(screen);display(screen.hScreen,e),display(screen.lScreen,n)}else if("Clear"==e)clear(screen);else if("Del"==e)del(screen);else if("Ans"==e){const e=screen.lScreen.textContent+"Ans";display(screen.lScreen,e)}else{(screen.displayError||screen.displayResult&&!["+","x","÷","-"].includes(e))&&clear(screen),screen.displayResult=!1;let n=debugInput(e);let r=screen.lScreen.textContent+n;display(screen.lScreen,r)}},clickEvent=e=>{const n=e.target.innerHTML;"section"!=e.target.localName&&checkInput(n)};generateBtns(btnContainer),btnContainer.addEventListener("click",e=>{clickEvent(e)}),hScreen.addEventListener("click",e=>{const n=e.target.textContent;clear(screen),display(lScreen,n)});
//# sourceMappingURL=app.js.map
