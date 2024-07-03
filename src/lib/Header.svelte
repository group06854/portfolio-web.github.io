<script lang="ts">
    import router from "page";

const changeColor = (event : MouseEvent) => {
    const inf = document.getElementById("Homework");
    if (inf){
    inf.style.backgroundColor = 'grey';
    }
    router('/Comic');
}

</script>
<header class = "container">
    <span class = 'logo'>Lev Permiakov</span>
    <nav>
        <ul>
            <li><a id = "nav" href="#head_st">About Me</a></li>
            <li><a id = "nav" href="#head">Portfolio</a></li>
            <li><a id = "nav" href="#head_end">Contact Me</a></li>
            <li><button on:click={changeColor} id = "Homework">Homework</button></li>
        </ul>
    </nav>
</header>
<style>

a{
    text-decoration: none;
    color:aliceblue;
}
.container{
    margin-top: 1px;
    width: 98%;
    margin-left: 0.5%;
    margin-right: 0.5%;
}
header{
    padding: 10px;
    margin-bottom: 40px;
}
header .logo{
    width: 10%;
    font-weight: 800;
    text-transform: uppercase; 
    color: white;
}
header ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}

header nav{
    float: right;
    width: 50%;
}
header nav ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
header ul li{
    display: inline-block;
}
#nav{
    color: white;
}
#Homework{
    border: 2px solid transparent;
    background-color: #ff8000;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    transform:translate(0,-3px);
    
}
</style>