const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let scale = 18;
let speed = 0.2;
let i = 0;

function heart1(M) {
    return 15 * Math.pow(Math.sin(M), 3);
}

function heart2(M) {
    return 12 * Math.cos(M) - 5 * Math.cos(2 * M) - 2 * Math.cos(3 * M) - Math.cos(4 * M);
}

function drawHeart() {
    if (i < 300) {
        let x = heart1(i) * scale + 300;
        let y = -heart2(i) * scale + 300;

        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 3, 3);

        let x0 = 300;
        let y0 = 300;
        ctx.strokeStyle = "rgba(255,0,0,0.4)";
        ctx.lineWidth = 2;  
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x, y);
        ctx.stroke();

        i++;
        setTimeout(drawHeart, speed * 100);
    }
}

drawHeart();
