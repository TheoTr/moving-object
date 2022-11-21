const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;
const body = document.querySelector('body');



const img = new Image();
img.src = '/image.jpg';
img.addEventListener("load", () => {
    ctx.drawImage(img, 0, (ch-50)/2, 50, 50);
});
// event click left arrow move the img

class Img {

    constructor(w,h,source) {
    this.w = w; 
    this.h = h;
    this.x = 0; 
    this.y = (ch - h)/2;

        this.img = new Image();
        this.img.src = source;
        this.img.addEventListener("load", () => {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
            this.drawImage();
        });
    }
    drawImage() {
        ctx.clearRect(0,0,cw,ch);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}
moveRight() {
    this.x += 10;
    this.drawImage();

}
moveLeft() {
    this.x -= 10;
    this.drawImage();
} 
growUp() {
this.w += 10;
this.h += 10;
    this.drawImage();
}
growDown() {
    this.w -= 10;
    this.h -= 10;
    this.drawImage();
}
limit() {
    if (this.x<=0) {
        this.x +=10;
    }
    if (this.x >= cw - this.w) {
        this.x -= 10;
    }
}
}


const mcdo = new Img(50,50,'/image.jpg');
body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        mcdo.moveRight();


    } else if (e.key === "ArrowLeft") {
        mcdo.moveLeft();
    } else if (e.key === "ArrowUp") {
        mcdo.growUp();

    } else if (e.key === "ArrowDown") {
        mcdo.growDown();
    } else if (e.key === "l") {
        mcdo.bouncing();
    }

    mcdo.limit();
});

