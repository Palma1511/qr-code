import { QrCodeGenerate } from "../QrGenerate/QrGenerate";
import styles from "./Layout.module.css"
import { QrScanned } from "../QrScanned/QrScanned";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { GenerateHistory } from "../History/GenerateHistory.jsx";
import { ScannedHistory } from "../History/ScannedHistory.jsx";

export function Layout() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerate />} />
                <Route path="/scaner" element={<QrScanned />} />
                <Route path="/generate-history" element={<GenerateHistory />} />
                <Route path="/scaner-history" element={<ScannedHistory />} />
            </Routes>

        </>

    )
}