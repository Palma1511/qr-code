import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import styles from "./QrScanned.module.css"
import { SCAN_KEY } from "../../constants";
export function QrScanned() {
    const [scan, setScan] = useState(null)

    const ScanHandler = (res) => {
        setScan(res[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_KEY) || '[]')

        localStorage.setItem(SCAN_KEY, JSON.stringify([...prevData, res[0].rawValue]))
    }

    const compScaner = {
        audio: false,
        finder: true,
    }

    return (
        <>
            <div className={styles.component}>
                <h1>Сканер QR</h1> <br />
                <Scanner
                    onScan={ScanHandler}
                    components={compScaner}
                    styles={{ container: { width: 300, position: 'absolute', margin: '5rem' } }}
                    classNames={styles.scan}
                />
                <div className={styles.link}>
                    <a>{scan} https://github.com/Palma1511</a>
                </div>
            </div>

        </>
    )

}