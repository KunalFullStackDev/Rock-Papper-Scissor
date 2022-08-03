let container = document.getElementsByClassName("container");
let rock = document.getElementById("rock");
let papper = document.getElementById("papper");
let scissor = document.getElementById("scissor");
let playbutton = document.getElementById("playbtn");
let player1 = "";
let player2 = Math.floor(Math.random() * 3);
let P2rps;

const player2decide = (player2) => {
    let player2Selection = document.getElementById("btndiv4");
    if (player2 == 0) {
        P2rps = "rock";
        player2Selection.style.display = "block";
        document.getElementById("myimg4").src = "/Images/rock.png";
    } else if (player2 == 1) {
        P2rps = "papper";
        player2Selection.style.display = "block";
        document.getElementById("myimg4").src = "/Images/papper.png";
    } else {
        P2rps = "scissor";
        player2Selection.style.display = "block";
        document.getElementById("myimg4").src = "/Images/scissor.png";
    }
};

rock.addEventListener("click", () => {
    scissor.style.display = "none";
    papper.style.display = "none";
    player1 = "rock";
    rock.style.background = "cyan";
    player2decide(player2);
    const Timeout = setTimeout(player2decide, 1000);
});
papper.addEventListener("click", () => {
    rock.style.display = "none";
    scissor.style.display = "none";
    player1 = "papper";
    papper.style.background = "cyan";
    player2decide(player2);
    const Timeout = setTimeout(player2decide, 500);
});
scissor.addEventListener("click", () => {
    rock.style.display = "none";
    papper.style.display = "none";
    player1 = "scissor";
    scissor.style.background = "cyan";
    player2decide(player2);
    const Timeout = setTimeout(player2decide, 1000);
});

let Winner = document.getElementById("winner");
playbutton.addEventListener("click", () => {
    if (
        (player1 === "rock" && P2rps === "scissor") ||
        (player1 === "papper" && P2rps === "rock") ||
        (player1 === "scissor" && P2rps === "papper")
    ) {
        Winner.style.visibility = "visible";
        Winner.style.padding = "10px";
        playbutton.style.background = "cyan";
        Winner.innerHTML = `<h1 id="h" style="color: whitesmoke;"> You Win ! 😎 </h1>`;
    } else if (
        (player1 === "rock" && P2rps === "rock") ||
        (player1 === "scissor" && P2rps === "scissor") ||
        (player1 === "papper" && P2rps === "papper")
    ) {
        Winner.style.visibility = "visible";
        Winner.style.padding = "10px";
        playbutton.style.background = "cyan";
        Winner.innerHTML = `<h1 id="h" style="color: whitesmoke;"> Draw ! 😬 </h1>`;
    } else {
        Winner.style.visibility = "visible";
        Winner.style.padding = "10px";
        playbutton.style.background = "cyan";
        Winner.innerHTML = `<h1 id="h" style="color: whitesmoke;"> You Loose ! 😔 </h1>`;
    }
    const myfunction = () => {
        location.reload();
    };
    const myTimeout = setTimeout(myfunction, 2000);
});
