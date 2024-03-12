import React from "react";
import "./Nav.css";
import { Link, Route, Routes } from "react-router-dom";
import { Account } from "../Account/Account";
import App from "../../App";

// navbar
export default ({setMenu}) => {
    return (
        <>
            <nav className="navBox">
                <ul className="navList">
                    <li className="navItem" onClick={() => <Link to="/Account">Account</Link>}>Account</li>
                    <li className="navItem" onClick={() => setMenu("bilder")}>Bilder</li>
                    <li className="navItem" onClick={() => setMenu("lastOpp")}>Last opp</li>
                    <li className="navItem" onClick={() => {
                            const result = fetch("http://localhost:3000/loggut", {
                                method: "GET",
                                credentials: "include"
                            });                        
                            setMenu("loggInn")
                        }
                    }>Logg ut</li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/Account" element={<Account />}/>
            </Routes>
        </>
    );
}