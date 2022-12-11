import Display from "./Display";
import Button from "./Button";
import { useState } from "react";
const Calculator = () => {
    let [result, setResult] = useState('');

    const addInput = (toInput)=>{
        setResult((prev)=>{
            return prev += toInput;
        });
    }

    const removeInput = ()=>{
        setResult((prev)=>{
            return prev === "" ? prev : prev.slice(0,-1);
        });
    }

    const clearInput = ()=>{
        setResult('');
    }
    
    const evaluateInput = ()=>{
        const escapeInput = (val)=>val.replace(/x/,"*").replace(/÷/,'/');
        setResult((prev)=>{
            let res = eval(escapeInput(prev)) || '';
            return res;
        })
    }
    
    return ( 
        <div className="calculator">
            <h2> Simple Javascript Calculator - React.js</h2>
            <div className="container">
                 <Display text={result}/>
                 <div className="input">
                    <div className="numbers">
                        <Button text="1" action={()=>{addInput('1');}}/>
                        <Button text="2" action={()=>{addInput('2');}}/>
                        <Button text="3" action={()=>{addInput('3');}}/>
                        <Button text="4" action={()=>{addInput('4');}}/>
                        <Button text="5" action={()=>{addInput('5');}}/>
                        <Button text="6" action={()=>{addInput('6');}}/>
                        <Button text="7" action={()=>{addInput('7');}}/>
                        <Button text="8" action={()=>{addInput('8');}}/>
                        <Button text="9" action={()=>{addInput('9');}}/>
                        <Button text="." action={()=>{addInput('.');}}/>
                        <Button text="0" action={()=>{addInput('0');}}/>
                        <Button text="del" action={removeInput} />
                    </div>
                    <div className="symbols">
                        <Button text="+" action={()=>{addInput('+')}}/>
                        <Button text="-" action={()=>{addInput('-')}}/>
                        <Button text="*" action={()=>{addInput('x')}}/>
                        <Button text="÷" action={()=>{addInput('÷')}}/>
                    </div>
                    <Button text="=" action={evaluateInput}/>
                    <Button text="Clear" action={clearInput}/>
                 </div>
            </div>
        </div> 
    );
}
 
export default Calculator;