import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./components/Pokedex";
import "./components/Pokedex.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Pokedex />
	</React.StrictMode>
);
