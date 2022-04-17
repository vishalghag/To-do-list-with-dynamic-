const Display = (props) =>{
    const {values, value, onenter} = props;
    return(
        <input type="text" onChange={values} value={value} onKeyUp={onenter}/>
    )
}

export default Display;