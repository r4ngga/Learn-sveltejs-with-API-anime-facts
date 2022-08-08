<script>
	import Header from './components/Header.svelte';
	import Search from './components/Search.svelte';
	import List from './components/List.svelte';
	// import New from './components/New.svelte';
	// import entries from './entries.json';
	import {onMount, afterUpdate} from 'svelte';
	import { store as entries} from './store.js';

	onMount(function(){
		// entries = $store;		 
		// store.subscribe(function(value){
		// 	entries = value;
		// });
		// entries = JSON.parse(localStorage.getItem("dataEntries")) || [];
	});

	afterUpdate(function(){
		localStorage.setItem("dataEntries", JSON.stringify($entries));
	});
	
	// export let entries;
	export let nameheader;
	// export let entries;
	
	// let entries = [];
	let showForm = false;

	function increment(id){
        console.log(id);
		
		//get index by id
		const index = $entries.findIndex(function(e){
			if(e.id === id){
				return true;
			}
		});

		//increment score
		$entries[index].score += 10;
    }

	function toggleForm(){
		showForm = !showForm;
	}

	let resultlength = [];

	function addEntry({search}){
		console.log({search});
		const searchvalue = search;
		
		const anime = "https://anime-facts-rest-api.herokuapp.com/api/v1/"+searchvalue;

		fetch(anime).then(res => res.json()).then(response => {
		// response is an object but we need the array in property data
		const data = response.data;
		for (let searchres of data) {
				console.log(searchres);
		}
		// alternative
		//data.forEach(item => console.log(item));
		});

		// cara lama ini
		// entries.push({id: entries.length+1 , url, title, description, creator, score: 0});
		// entries = entries;

		//cara terbaru ES6
		// $entries = [...$entries, {id: $entries.length+1 , url, title, description, creator, score: 0}];
	}
</script>


<Header title={nameheader} toggleForm={toggleForm}/>

<main>
	<!-- <h1>Hello {name}</h1> -->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#if showForm}
	<Search addEntry={addEntry}/>
	{/if}
	<List entries = {$entries} display="" increment={increment}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>