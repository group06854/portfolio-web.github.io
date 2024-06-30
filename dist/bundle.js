import { formatDistance } from 'date-fns';

async function findnum(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}
async function scrapeContent(url) {
    await fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((content) => {
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
    });
}
findnum("https://fwd.innopolis.university/api/hw2?email=l.permiakov@innopolis.university")
    .then((text) => { scrapeContent('https://fwd.innopolis.university/api/comic?id=' + text); });
