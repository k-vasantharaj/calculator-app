import { LightningElement } from 'lwc';
import calculator from './calculatorApp.html';
import scientificCalculator from './scientificCalculator.html';
import normalCalculator from './basicCalculator.html';
export default class Calculator extends LightningElement {

chosenStyle;  
currentInput ='';  
sciFunction = null;
    handleClick(event)
    {
        this.chosenStyle = event.target.label;
    }

    render()
    {
        return this.chosenStyle === 'CALCULATOR' ? normalCalculator :
            this.chosenStyle === 'SCIENTIFIC CALCULATOR' ? scientificCalculator : calculator;
    }

    closeCalculator()
    {
        this.chosenStyle = null;
    }
    clearAll()
    {
        this.currentInput = '';
    }
    handleInput(event)
    {
        if(this.currentInput.length >= 20) return; 
        this.currentInput +=event.target.value;
    }
    backspace()
    {
        this.currentInput = this.currentInput.slice(0,-1);
    }
    calculate()
    {
      try {
            let num = parseFloat(this.currentInput);

            if (this.sciFunction)
                 {
                switch (this.sciFunction) 
                {
                    case 'sin': this.currentInput = Math.sin(num).toFixed(5); 
                    break;
                    case 'cos': this.currentInput = Math.cos(num).toFixed(5); 
                    break;
                    case 'tan': this.currentInput = Math.tan(num).toFixed(5); 
                    break;
                    case 'log': this.currentInput = Math.log10(num).toFixed(5); 
                    break;
                    case 'cbrt': this.currentInput = Math.cbrt(num).toFixed(5); 
                    break;
                }
                this.sciFunction = null; 
            }
            else 
            {
                this.currentInput = eval(this.currentInput);
            }
        } 
        catch (e)
         {
            this.currentInput = 'Error';
        }
    }

    handleSciInput(event)
     {
        this.sciFunction= event.target.value;
     }
}
