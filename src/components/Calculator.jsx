import Display from "./Display";
import Button from "./Button";
const Calculator = () => {
    return ( 
        <div className="calculator">
            <h2> Simple Javascript Calculator - React.js</h2>
            <div className="container">
                 <Display />
                 <div className="input">
                    <Button />
                 </div>
            </div>
        </div> 
    );
}
 
export default Calculator;