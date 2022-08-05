<script type="text/javascript">

    export let title;
    export let toggleForm;
    </script>
    <header>
        <!-- <h1>this tittle for header</h1> -->
      
        <div class="left-show">
            <div id="head">
                <h1 class="text-center">{title}</h1>
            </div>
        </div>
        <div class="right-show">
            <button on:click={toggleForm}>Appointment</button>
        </div>
    </header>
    
    <style type="text/css" media="screen">
        header{
            display: flex;
        }
    
        #head{
            text-align: center;
            align-items: center;
        }
    
        .text-center{
            color:  #ff3e00;
            font-size: 4em;
            font-weight: 100;
        }
    
        .left-show{
            flex: 11;
        }
    
        .right-show{
            flex: 1;
            align-self: center;
            padding-left: 2em;
            padding-right: 2em;
        }
    
        button{
            padding: 1rem 1rem 1rem 1rem;
            border: 0.1 solid #2d2d2d;
            border-radius: 1em;
            background: #fff;
            font-size: 1rem;
        }
    </style>