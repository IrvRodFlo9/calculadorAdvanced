import clear from"./clear.js";const del=e=>{const t=e.lScreen.innerHTML;if(e.hScreen.innerHTML="",e.displayError)clear(e);else{let r=" "==t.slice(-1)?-3:-1;r=t.trim().endsWith("cos(")||t.trim().endsWith("sin(")||t.trim().endsWith("tan(")||t.trim().endsWith("log(")?-5:r,e.lScreen.textContent=t.slice(0,r)}};export default del;
//# sourceMappingURL=delete.js.map
