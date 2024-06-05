import "./OptionList.css"
export const OptionList = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return (
        <div className="option-list">
            <label>Equipo</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {
                    props.equipos.map((equipo, i) => <option key={i} value={equipo}>{equipo}</option>)}

            </select>

        </div>
    )
}