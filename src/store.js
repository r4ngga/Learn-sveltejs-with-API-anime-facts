import { writable} from 'svelte/store';

export const store = writable([]);

async function loadData(){
    const rest = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`);
    // .then(response => response.json())
    // .then(quote => console.log(quote))
    const data = await rest.json();
    // store.set(data.nodes);
    // return data;
    // console.log(data);
}

// function loadData(){
//     const entries = JSON.parse(localStorage.getItem("dataEntries") || []);
//     store.set(entries);
//     return entries;
// }

loadData();