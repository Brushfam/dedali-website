import footer from '../../styles/components/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.imprint}>
                <span>
                    © 2022 DeDali
                </span>
                <span>
                    <font size="+1" color={"#FFFFFF"}>Coming soon!</font>
                </span>
                <span>
                    Twitter: <strong>@dedali_io</strong>
                </span>
            </div>

        </footer>
    )
}

export default Footer