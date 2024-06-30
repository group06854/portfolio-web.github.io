import { format, formatDistance, formatRelative, getDate } from 'date-fns'

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


function changeColor(color: string): void {
    const name: HTMLElement | null = document.querySelector('#name');
    if (name) {
        name.style.color = '#808080';
    }
}
async function findnum(url: string): Promise<string | null> {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}
async function scrapeContent(url: string){
    const response = await fetch(url)
    .then((response: Response) => {
            return response.json()
    })
    .then((content : comic) =>{
        let year : number = Number(content.year);
        let month : number = Number(content.month);
        let day : number = Number(content.day);
        const time : Date = new Date(year, month, day);
        const ago : string = formatDistance(time, new Date());
        if (typeof document !==  'undefined') {
        const title = document.getElementById('title') as HTMLElement;
        const img = document.getElementById('image') as HTMLElement;
        const data = document.getElementById("data") as HTMLElement;
        const real_data = document.getElementById("nowdata") as HTMLElement;
            if (title){
                title.textContent = content.safe_title;
            }
            if (img){
                img.setAttribute('src', content.img)
                img.setAttribute('alt', content.alt)
            }
            if (data){
                data.textContent = time.toLocaleDateString();
            }
            if (real_data){
                real_data.textContent = ago;
            }
        }
    })
}
findnum("https://fwd.innopolis.university/api/hw2?email=l.permiakov@innopolis.university")
.then((text) =>{scrapeContent('https://fwd.innopolis.university/api/comic?id='+text)})
