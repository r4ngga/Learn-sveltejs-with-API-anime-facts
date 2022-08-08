<script type="text/javascript">
    import {rest} from '../fetching.js';
    import Search from './Search.svelte';
    // import {restsearch} from '../fetching';
    
        function handleButton(){
            console.log("Can be click");
        }

        let searchdataresult = [];

        function searchresult(){
            // const dataresult = restsearch();
            let searchvalue;
            const restsearch = () => {
                return fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/?'+searchvalue);
            };
            console.log(restsearch.data);
            // let dataresult = restsearch.anime_name;
            // dataresult.then()
        }
        searchresult();

        
    </script>
    
    <div class="list-data">
        <!-- {#if } -->
        
        <div class="item">
            <span class="creator"></span>
            <div class="content">
                <div class="description-data">
                   
                </div>
                <div class="show-image">
                    <img class="images-display" src="" alt="">
                </div>
            </div>
            
        </div>
        
    </div>
    
    <style>
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
    
        .increment{
            size: 100%;
            flex: 1;
            padding-left: 1rem;
            align-self: center;
        }
    
        .content{
            display: flex;
            margin-top: 0.25rem;
        }
    
        .title-data{
            font-weight: 700;
            align-self: center;
        }
    
        .description-data{
            margin-left: 1px;
            align-self: center;
        }

        .show-image{
            size: 100%;
            align-self: center;
            padding: 1rem 1rem 1rem 1rem;       
            margin-left: 2px;  
        }

        .images-display{
            padding: 2rem 2rem 2rem 2rem;
            align-self: center;
            align-items: center;
            size: 100%;
            border-radius: 1em;
            max-width: 100%;
            width: 100px;
        }
    
        .score-data{
            size: 100%;
            flex: 1;
            padding-left: 2rem;
            align-self: center;
        }
    
        button{
            padding: 1rem, 1rem, 1rem, 1rem;
            border: 0.1rem solid #2d2d2d;
            background: #fff;
            font-size: 0.75rem;
            border-radius: 1em;
        }
    </style>