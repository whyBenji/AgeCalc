const birthday = new Date('2000-02-04');

setInterval(() => {
    const today = new Date();
    const diff  = ((Date.parse(today) - Date.parse(birthday)) / (60 * 60 * 1000 * 24 * 365)).toFixed(8);
    const split = diff.toString().split('.');
    document.getElementById('countdown').innerHTML = `${split[0]}.<span>${split[1]}</span>`
}, 1000);
