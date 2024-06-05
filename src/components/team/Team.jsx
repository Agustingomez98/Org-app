import { Colaborador } from "../colaborador/Colaborador";
import "./Team.css"

export const Team = (props) => {

    const { nombre, primaryColor, secondaryColor,id } = props.datos;
    const { colaboradores,eliminarColaborador,actualizarColor,like } = props;

    return <>
    {colaboradores.length > 0  &&
        <section className="team" style={{ backgroundColor: secondaryColor }}>
            <input 
            type="color"
            className="color"
            value={secondaryColor}
            onChange={(event) => {
                actualizarColor(event.target.value, id );
            }}/>
            <h3 style={{ borderColor: primaryColor }}> {nombre}  </h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador}
                        key={index}
                        eliminarColaborador={eliminarColaborador}
                        primaryColor={primaryColor}
                        like={like} 
                    />)
                }
            </div>
        </section>
    }
    </>   
}