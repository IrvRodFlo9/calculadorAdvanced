import{changesExpression}from"./data.js";const debugExpression=e=>{let s=e.lScreen.textContent;for(let e in changesExpression)s.includes(e)&&(s=s.replace(e,changesExpression[e]));return s.includes("Ans")&&(s=s.replace("Ans",e.ans)),s};export default debugExpression;
//# sourceMappingURL=debugExpression.js.map
