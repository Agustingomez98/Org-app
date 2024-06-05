import { useState } from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import { Form } from './components/form/Form'
import { MyOrg } from './components/MyOrg/MyOrg'
import { Team } from './components/team/Team'
import { Footer } from './components/footer/Footer'
import { v4 as uuid } from 'uuid';


function App() {

  const [viewForm, setViewForm] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ])
  const [equipos, setEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programacion",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }

  ])

  const modifyViewForm = () => {
    setViewForm(!viewForm)
  }

  const registrarColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, { ...colaborador, id: uuid() }])
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  }

  //Actualizar color del equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      console.log(color, id)
      if (equipo.id === id) {
        equipo.primaryColor = color;
      }
      return equipo;
    })
    setEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    console.log(equipos)
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    setColaboradores(colaboradoresActualizados);
  }

  return (
    <>
      <Header />
      {viewForm && <Form
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo} />}

      <MyOrg modifyViewForm={modifyViewForm} />
      {
        equipos.map((equipo) => <Team
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like} />)
      }
      <Footer />
    </>
  )
}

export default App
