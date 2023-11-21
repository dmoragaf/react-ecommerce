import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function RouterPrincipal() {
  return (
    <>
        <Router>
            <NavBar />
        </Router>
    </>
  );
}
