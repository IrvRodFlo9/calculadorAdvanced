import debugExpression from"./debugExpression.js";const calculate=screen=>{const newExpression=debugExpression(screen);try{const result=eval(newExpression);return screen.displayResult=!0,screen.ans=result,result}catch{return screen.displayError=!0,"Expresión Inválida"}};export default calculate;
//# sourceMappingURL=calculate.js.map
