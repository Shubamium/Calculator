const Display = (props) => {
    return ( 
        <>
            <input type="text" id="number" class="display" disabled placeholder="Input your calculations. . ." value={props.text}/>
        </>
    );
}
 
export default Display;