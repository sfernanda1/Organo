import './Footer.css'

const Footer = () => {
    return(
    <section className="footer-container">
        <div className="footer">
            <div className='social-media'>
                <img src='/assets/ig.png' alt='icone instagram '/>
                <img src='/assets/tw.png' alt='icone twiter'/>
                <img src='/assets/fb.png' alt='icone facebook'/>
            </div>
            <div>
                <img src='/assets/logo.png' alt='icone twiter'/>
            </div>
            <div>
                <p>Desenvolvido durante curso da Alura</p>
            </div>
        </div>
        
    </section>
    )
}

export default Footer