import { QRCodeSVG } from "qrcode.react"
import { GENERATE_KEY } from "../../constants"
import styles from "./History.module.css"
export function GenerateHistory() {

    const data = JSON.parse(localStorage.getItem(GENERATE_KEY) || '[]')



    return (
        <div className={styles.comp}>
            <h1>ИСТОРИЯ ГЕНЕРАЦИЙ</h1>
            {data.map((text) => (
                <div key={text + '1234'} className={styles.container}>
                    <p key={text} className={styles.txt}>{text}</p>
                    <QRCodeSVG value={text} className={styles.qr} /><br />
                </div>
            ))}
        </div>
    )
}