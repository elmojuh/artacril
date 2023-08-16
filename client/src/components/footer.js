

export default function Footer() {
    const imageStyle = {
        paddingLeft: '5px',
        width: '45px',
        borderRadius: '50%',
        
    }
    const texto = {
        color: '#ffffff'
    }
    return (
        <div >
            <footer className="cntr-footer">
                <a style={texto} href='https://elmosprofile.vercel.app/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="texto-branco"
                >
                    Powered in 2023 by: 
                    <img style={imageStyle} src="images/logoDev/logoPreta.jpg" alt="Desenvolvedor @elmojuh"/></a> 
                    2023
                <a />
            </footer>
        </div>
    )
}