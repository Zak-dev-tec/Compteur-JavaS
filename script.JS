let compte = 0

let count = document.getElementById("count")

let ajouter = document.getElementById("increment")
    ajouter.addEventListener("click", ()=> {
        compte += 1;
        count.textContent = compte;
        animationShake ();
        reactionCompte ();
    })

let retirer = document.getElementById("decrement")
    retirer.addEventListener("click", ()=> {
        compte -= 1;
        count.textContent = compte;
        animationShake ();
         reactionCompte ();
    })

let réinitialiser = document.getElementById("reset")
    réinitialiser.addEventListener("click", ()=> {
        compte = 0
        count.textContent = compte;
        animationShake ();
         reactionCompte ();
    })

function animationShake () {
    count.classList.add("shake");
    setTimeout( ()=> {
        count.classList.remove("shake");
    }, 200);
}

function reactionCompte () {
    if (compte > 0) {
        count.style.color = "green" ;
    } else if (compte < 0) {
        count.style.color = "red" ;
    } else {
        count.style.color = "black" ;
    }
}