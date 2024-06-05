import "./Inputs.css";

export const Input = (props) => {

    const {type = "text"} = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className={`input input-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={props.placeholder}
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type= {type}
                />
        </div>
    )
}