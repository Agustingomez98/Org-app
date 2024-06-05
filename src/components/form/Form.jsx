import { useState } from "react"
import { Button } from "../Button/Button"
import { OptionList } from "../ListaOpciones/OptionList"
import "./Form.css"
import { Input } from "../inputs/Inpunt"

export const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const submitForm = (e) => {
        e.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo,primaryColor:color});
    }

    return (
        <section className="form">
            <form onSubmit={submitForm}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Input
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre}
                />
                <Input
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <Input
                    titulo="Foto"
                    placeholder="Ingresar url de la foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />
                <OptionList 
                valor={equipo} 
                actualizarValor={setEquipo} 
                equipos={props.equipos}
                />
                <Button texto="Crear" />
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Input
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <Input
                    titulo="Color"
                    placeholder="Ingresar el color en Hex"
                    required
                    valor={color}
                    actualizarValor={setColor}
                    type="color"
                />
                <Button texto="Registrar equipo" />

            </form>
        </section>
    )
}