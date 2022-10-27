import banner from '../../../styles/components/BannerMain.module.scss'

const BannerMain = () => {
    return (
        <div className={banner.banner} >
            <div className={banner.background}>
                <img src={`/img/neon.svg`} alt='lines'/>
            </div>

            <div className={banner.dedali}>
                <img src={`/img/dedali.png`} alt='lines'/>
            </div>

        </div>
    )
}

export default BannerMain;