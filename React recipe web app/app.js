import React, { useEffect, useState } from "react"; 3.5k
import Recipe from  './Recipe'
import "./App.css";

const App =()=> {
	const APP_ID ="87608702";
	const APP_KEY = "942a7a19bfd36ee56409ecc84f667045";

	const[recipes, setRecipes] =useState([]);
	const[search, setSearch] =useState("");
	const[query, setquery] =useState('chicken');
	
	useEffect(() =>{
		getrecipes();
	}, [] );

	const getrecipes = async () => {
		const response = await fetch(
			"https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY }"	
		);
		const data =await response.json();
		setRecipes(data.hits);
		console.log(data);
	};

	const updateSearch = e =>{
		setSearch(e.target.value);
		console.log(search);
	};
	const getSearch = e =>{
		e.preventDefault();
		setquery(search);
	}

	return(
		<div className="App">
			<form onSubmit={getSearch} className="Search-form">
				<input className="Search-bar"
						type="text"
						value={search}
						onChange={updateSearch}	
				>	
				</input>
				<button className="search-button" type="submit">
					search
				</button>
			</form>
			{recipes.map(recipe =>(
				<Recipe
				    key={recipe.recipe.label}
			))}
			
		</div>
	);
	

};
//@rickswordfire2023