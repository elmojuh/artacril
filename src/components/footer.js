

export default function Footer() {
    return (
        <Style>
            <footer className="cntr-footer">
                <a href='https://elmosprofile.vercel.app/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="texto-branco"
                >
                    Powered by{ }
                    <img src="images/foto.jpg" alt="Vercel Logo" width={"25px"} /></a>
                <a />
            </footer>
        </Style>
    )
    function Style ({children}){
        return (
            <div>
                {children}
                <style>{`
                    .texto-branco{
                        color: #FFFFFF;
                    }
                `}
                </style>
            </div>
        )
    }
}