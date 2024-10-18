import { QRCodeSVG } from "qrcode.react"
import { SCAN_KEY } from "../../constants"
import styles from "./History.module.css"
export function ScannedHistory() {

    const data = JSON.parse(localStorage.getItem(SCAN_KEY) || '[]')

    return (
        <div className={styles.comp}>
            <h1>ИСТОРИЯ СКАНИРОВАНИЙ</h1>
            {data.map((text) => (
                <div className={styles.container}>
                    <p key={text} className={styles.txt}>{text}</p>
                    <QRCodeSVG value={text} className={styles.qr} /><br />
                </div>
            ))}
        </div>
    )
}