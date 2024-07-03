<script lang="ts">


/*async function scrapeContent(url: string){
    const response = await fetch(url)
    const content: comic = await response.json();
        let year : number = Number(content.year);
        let month : number = Number(content.month);
        let day : number = Number(content.day);
        const time : Date = new Date(year, month, day);
        
        if (typeof document !==  'undefined') {
        export const title : string = content.safe_title;
        export const img = document.createElement('img');
        export const imglink : string = content.img;
        export const imgalt : string = content.alt;
        export const data : string = time.toLocaleDateString();
        export const ago : string = formatDistance(time, new Date());
        }
}*/
    import {formatDistance} from 'date-fns';
    import router from "page";
interface comic{
    month: string
    num: string
    link: string
    year: string
    news: string
    safe_title: string
    transcript: string
    alt: string
    img: string
    title: string
    day: string
}
interface comica {
  title: string;
  img: string;
  alt: string;
  data: string;
  ago: string;
}


const changeColor = (event : MouseEvent) => {
    const inf = document.getElementById("Homework");
    if (inf){
    inf.style.backgroundColor = 'grey';
    }
    router('/');
}
async function findnum(url: string): Promise<string | null | undefined> {
    try{
    const response = await fetch(url);
    const text = await response.text();
    return text;
    }catch{}
}

let info: comic | null = null;
let data: Date | null = null;
let str : string | null = null;
async function scrapeContent(url: string){
    const response = await fetch(url)
    const content: comic = await response.json();
        let year : number = Number(content.year);
        let month : number = Number(content.month);
        let day : number = Number(content.day);
        const time : Date = new Date(year, month, day);
        const ago : string = formatDistance(time, new Date());
        const responses = await fetch(url);
        info = await responses.json();
data = time;
str = ago;
}


findnum("https://fwd.innopolis.university/api/hw2?email=l.permiakov@innopolis.university")
.then((text) =>{scrapeContent('https://fwd.innopolis.university/api/comic?id='+text)})

</script>

<main>
    <!-- ChildComponent.svelte -->
    {#if info}
    <h2 id="title">{info.safe_title}</h2>
    <div class="main">
        <img id="image" src={info.img} alt={info.alt}>
        <div id = "data">{data}</div>
        <div id ="nowdata">{str}</div>
        <button on:click={changeColor} id = "Homework">Homework</button>
    </div>
    {/if}
</main>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
}

.main{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 2%;
    margin-right: 2%;
    justify-content: space-between;
    align-items: center;
}
#image{
    height: 294px;
    width: 540px;
padding-right: 30px;
}
h2{
    text-align: center;
    margin-bottom: 30px;
}
#data{
    font-size: 32px;
    margin-top: 30px;
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

