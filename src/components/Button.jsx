const Button = (props) => {
    let text = props.text;
    let functionality = props.action;
    return (  
        <button onClick={functionality} className={props.className || '' }>{text}</button>
    );
}

Button.defaultProps ={
    text:"New Button",
    action: ()=>{console.log("a button is pressed, but no functionality is passed to the prop.")},
    className:''
}
export default Button;