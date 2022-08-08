import React from "react";
import { Pokemon, Types } from "../interface/interface";
import "./Pokedex.css";

const PATH_API = "https://pokeapi.co/api/v2/pokemon/";

const query = async (search: string) => {
	const result = await fetch(`${PATH_API}${search}`);
	const pokemon: Pokemon = await result.json();
	return pokemon;
};

const Pokedex = () => {
	const [types, setTypes] = React.useState<Array<Types>>([]);

	const button = React.createRef<HTMLDivElement>();
	const image = React.createRef<HTMLDivElement>();
	const typesContainer = React.createRef<HTMLDivElement>();
	const search = React.createRef<HTMLInputElement>();

	return (
		<div className="container">
			<div className="header">
				<div className="header_left">
					<div className="bigButton" ref={button}></div>
					<div className="smallButtons">
						<div className="smallButton"></div>
						<div className="smallButton"></div>
						<div className="smallButton"></div>
					</div>
				</div>
				<div className="header_right"></div>
			</div>
			<div className="main">
				<div className="screenFrame">
					<div className="screen">
						<div className="image" ref={image}></div>
						<div className="types" ref={typesContainer}>
							{types.length > 0
								? types.map((pokemon) => (
										<p>
											Tipo {pokemon.slot}: {pokemon.type.name}
										</p>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="mainButtons">
					<div className="mainButtons_screen">
						<div className="mainButtons_start_select">
							<div className="mainButtons_start"></div>
							<div className="mainButtons_select"></div>
						</div>
						<div className="searchScreen">
							<input
								className="search"
								ref={search}
								type="text"
								placeholder="Pokemon Name"
							/>
						</div>
					</div>
					<div className="mainButtons_directionalPad">
						<input
							className="search_button"
							type="button"
							value="Buscar"
							onClick={() => {
								if (search.current && image.current && typesContainer.current) {
									const height = image.current.getBoundingClientRect().height;
									const width = image.current.getBoundingClientRect().width;
									const pokemon = search.current.value.toLowerCase();
									image.current.style.backgroundColor = "#fff";
									typesContainer.current.style.backgroundColor = "#fff";
									query(pokemon).then((pokemon) => {
										image.current!.innerHTML = `<img
										width="${width - 10}" 
										height="${height - 10}" 
										src=${pokemon.sprites.front_default} />`;
										setTypes(pokemon.types);
										button.current!.style.backgroundColor = "#00f";
									});
								}
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pokedex;
