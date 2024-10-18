import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styles from "./QrGenerator.module.css"
import { GENERATE_KEY } from "../../constants";


export function QrCodeGenerate() {

    const [text, setText] = useState()
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        setResult(text)
        setText('')
        const prevData = JSON.parse(localStorage.getItem(GENERATE_KEY) || '[]')
        localStorage.setItem(GENERATE_KEY, JSON.stringify([...prevData, text]))
    }

    const changeText = (event) => {
        setText(event.target.value)
        setResult('')
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Введите текст для генерации" onChange={changeText} className={styles.input_qr_text} /> <br />
            <button onClick={onClickHandler} className={styles.generate_button}>
                Сгенерировать QR-code
            </button><br />
            {result !== '' ? <QRCodeSVG value={result} size={200} /> : null}
        </div>
    )
}