<script>
	import Header from './components/Header.svelte';
	import Search from './components/Search.svelte';
	import List from './components/List.svelte';

	
	// export let entries;
	export let nameheader;
	// export let entries;
	
	// let entries = [];
	let showForm = false;

	function toggleForm(){
		showForm = !showForm;
	}

	let resultlength = [];

	function SearchEntry({search}){
		console.log({search});
		if(search == ''){
			resultlength = "not found";
			console.log(resultlength);
		}else{
		const searchvalue = search;
		
		const anime = "https://anime-facts-rest-api.herokuapp.com/api/v1/"+searchvalue;

		fetch(anime).then(res => res.json()).then(response => {
		// response is an object but we need the array in property data
		const data = response.data;
		resultlength = response.data;
		for (let searchres of data) {
			console.log(searchres);
		}
		return resultlength;
		// console.log("val resultlength"+resultlength);
		// alternative
		//data.forEach(item => console.log(item));
		});
	 }
	}
</script>


<Header title={nameheader} toggleForm={toggleForm}/>

<main>
	<!-- <h1>Hello {name}</h1> -->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#if showForm}
	<Search SearchEntry={SearchEntry}/>
	<div class="list-entry">
		{#if resultlength == 'not found'}
		<div class="item">
            <span id="fact-id" class="creator"></span>
            <div class="content">
                <div id="descrip" class="description-data">
                   Not Found
                </div>
            </div>
            
        </div>
		{:else}
		{#each resultlength as resultnya}
		<div class="item">
            <span id="fact-id" class="creator">{resultnya.fact_id}</span>
            <div class="content">
                <div id="descrip" class="description-data">
                   {resultnya.fact}
                </div>
            </div>
            
        </div>
		{/each}
		{/if}
	</div>
	<!-- <SearchResult /> -->
	{:else}
	<List />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.list-entry{
            display: block;
        }
    
        .item{
            display: flex;
            border-bottom: 1px solid #cacaca;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }
    
        .creator{
            padding-right: 1rem;
            flex: 1;
            align-self: center;
            text-align: center;
        }
    
        .content{
            flex: 10;
            padding-left: 1rem;
            border-left: 1px solid #cacaca;
        }
    
        .content{
            display: flex;
            margin-top: 0.25rem;
        }
    
        .description-data{
            margin-left: 1px;
            align-self: center;
        }


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>