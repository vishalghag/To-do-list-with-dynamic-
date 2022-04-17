import style from './Button.module.css'

const Button = (props) =>{

    const {btnText, add} = props;    

    return(
        <>
        {/* <div className={style.btn}> */}
        <button style={{color: "whitesmoke",  backgroundColor: 'lightblue', fontSize:"15px", marginLeft:"10px",marginBottom:"10px"}} onClick={add}>{btnText}</button>
        {/* </div> */}
        </>
    )
}

export default Button;