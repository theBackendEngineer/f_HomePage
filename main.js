
const s = window.screen;
const w = (background.width = s.width);
const h = (background.height = s.height);
const ctx = background.getContext("2d");
const p = Array(Math.floor(w / 10) + 1).fill(0);
const random = (items) => items[Math.floor(Math.random() * items.length)];
// const hex = "0123456789ABCDEFG".split("");
const hex = "01".split("");


setInterval(() => {
    ctx.fillStyle = "rgba(255, 255, 255, .05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "gray";
    p.map((v, i) => {
        ctx.fillText(random(hex), i * 10, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });

}, 1000 / 30);
