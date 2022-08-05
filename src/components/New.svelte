<script type="text/javascript">
    import {onMount, onDestroy} from 'svelte';
    
    onMount(function(){
        console.log("Form Appointment onMount");
    });
    
    onDestroy(function(){
        console.log("Form Appointment onDestroy");
    });
    export let addEntry;
    
    let url = "";
    let title = "";
    let description = "";
    let creator = "";
    
    function handleSubmit(){
        event.preventDefault();
        // reset form
    
        addEntry({url, title, description, creator});
    
        url = "";
        title = "";
        description = "";
        creator = "";
    }
    </script>
    
    <div class="new-appointment">
        <h3>New Appointment : {title}</h3>
        <form on:submit={handleSubmit}>
            <div class="input-group">
                <input type="text" name="creator" placeholder="creator" bind:value={creator}>
                <input type="text" name="url" placeholder="Url" bind:value={url}>
                <input type="text" name="title" placeholder="title" bind:value={title}>
                <input type="text" name="description" placeholder="description" bind:value={description}>
            </div>
            
            <div class="input-action">
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
    
    <style type="text/css" media="screen">
        .input-action{
            flex: 1;
        }
    
        .input-group{
            flex: 12;
        }
    
        button[type="submit"]{
            border: 0.1rem solid #cacaca;
        }
    
        input[type="text"]{
            border-radius: 1em;
            font-size: medium;
        }
    
        form{
            display: flex;
        }
    
        input{
            padding: 0.75rem;
            border: 0.1rem solid #cacaca;
            font-size: 0.75rem;
            width: 12rem;
        }
    
        button{
            padding: 1rem 1rem 1rem 1rem;
            border: 0.1rem solid #2d2d2d;
            background: #fff;
            font-size: 1rem;
            border-radius: 1em;
        }
    </style>