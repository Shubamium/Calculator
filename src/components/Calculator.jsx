import Display from "./Display";
import Button from "./Button";
const Calculator = () => {
    return ( 
        <div className="calculator">
            <h2> Simple Javascript Calculator - React.js</h2>
            <div className="container">
                 <Display />
                 <div className="input">
                    <div className="numbers">
                        <Button text="1"/>
                        <Button text="2"/>
                        <Button text="3"/>
                        <Button text="4"/>
                        <Button text="5"/>
                        <Button text="6"/>
                        <Button text="7"/>
                        <Button text="8"/>
                        <Button text="9"/>
                        <Button text="."/>
                        <Button text="0"/>
                        <Button text="del"/>
                    </div>
                    <div className="symbols">
                        <Button text="+"/>
                        <Button text="-"/>
                        <Button text="*"/>
                        <Button text="/"/>
                    </div>
                    <Button text="="/>
                    <Button text="Clear"/>
                 </div>
            </div>
        </div> 
    );
}
 
export default Calculator;