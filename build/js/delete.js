import clear from"./clear.js";const del=e=>{const t=e.lScreen.textContent;if(e.hScreen.textContent="",e.hScreen.innerHTML="",1==e.displayError)clear(e);else{let n=" "==t.slice(-1)?-3:-1;n=t.trim().endsWith("cos(")||t.trim().endsWith("sin(")||t.trim().endsWith("tan(")||t.trim().endsWith("log(")?-5:n,e.lScreen.textContent=t.slice(0,n)}};export default del;
//# sourceMappingURL=delete.js.map
