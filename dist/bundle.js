import { formatDistance } from 'date-fns';

function changeColor(color) {
    const name = document.getElementById('Homework');
    if (name) {
        name.style.backgroundColor = color;
    }
}
async function findnum(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return text;
    }
    catch { }
}
async function scrapeContent(url) {
    const response = await fetch(url);
    const content = await response.json();
    let year = Number(content.year);
    let month = Number(content.month);
    let day = Number(content.day);
    const time = new Date(year, month, day);
    const ago = formatDistance(time, new Date());
    if (typeof document !== 'undefined') {
        const title = document.getElementById('title');
        const img = document.getElementById('image');
        const data = document.getElementById("data");
        const real_data = document.getElementById("nowdata");
        if (title) {
            title.textContent = content.safe_title;
        }
        if (img) {
            img.setAttribute('src', content.img);
            img.setAttribute('alt', content.alt);
        }
        if (data) {
            data.textContent = time.toLocaleDateString();
        }
        if (real_data) {
            real_data.textContent = ago;
        }
    }
}
findnum("https://fwd.innopolis.university/api/hw2?email=l.permiakov@innopolis.university")
    .then((text) => { scrapeContent('https://fwd.innopolis.university/api/comic?id=' + text); });
changeColor("#ff8000");
