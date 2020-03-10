var IamA;
class Mario {
    constructor() {
        IamA = "Developer";
        setInterval( this.ahh , 100);
    }

    ahh() {
        IamA = IamA.slice(0, -1); 
    }

    drawTitleAnimation() {
        push();
        fill(0);
        console.log(IamA);
        translate(windowWidth / 2, windowHeight / 2);
        textSize(windowHeight/8);
        text("Hi i'm Steve", 0, -windowHeight/10);
        text("I am a " + IamA, 0, windowHeight/10);
        fill(0,0,255);
        pop();
    }

    draw() {
        this.drawTitleAnimation();
    }
 }