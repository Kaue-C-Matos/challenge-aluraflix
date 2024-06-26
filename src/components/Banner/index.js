import styles from './Banner.module.css'
import video from './player.png'

function Banner (){
    return(
        <section className={styles.banner} style={{backgroundImage: `url(${video})`, backgroundColor: "rgba(0, 0, 250, 0.2)", backgroundBlendMode: "overlay"}}>
            <div>
                <h1>Front End</h1>
                <h2>SEO com React</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <img src={video} alt='Vídeo destaque'/>
        </section>
    )
}

export default Banner