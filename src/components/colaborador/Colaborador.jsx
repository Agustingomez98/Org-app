import "./Colaborador.css"
import { IoMdCloseCircleOutline,   } from "react-icons/io";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";


export const Colaborador = (props) => {

    console.log("Props", props)
    const { nombre, puesto, foto, equipo,id,fav } = props.datos;
    const { primaryColor, eliminarColaborador,like } = props;

    return (<div className="colaborador">
        <IoMdCloseCircleOutline className="delete" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: primaryColor }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>
            }
            
        </div>
    </div>)
}
//"https://github.com/agustingomez98.png"