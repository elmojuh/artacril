

export default function Footer() {
    const imageStyle = {
        paddingLeft: '10px',
        width: '40px'
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
                    Powered by: 
                    <img style={imageStyle} src="images/foto.jpg" alt="@elmojuh"/></a>
                <a />
            </footer>
        </div>
    )
}