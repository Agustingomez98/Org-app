import "./Footer.css"

export const Footer = () => {

    return (<>
        <footer className="footer" style={{ backgroundImage: "url(/src/assets/footer.png)" }}>
            <div className="redes">
                <a href='https://www.aluracursos.com/'>
                    <img src="src\assets\linkedin.png" alt="linkedin" />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="src\assets\github.png" alt="github" />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="src\assets\instagram.png" alt="instagram" />
                </a>
            </div>
            <img src='src\assets\icon-logo.svg' alt='org' id="logo" />
            <strong>Desarrollado por Agustin Gomez</strong>
        </footer>
    </>)
}