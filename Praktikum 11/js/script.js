document.querySelectorAll("a").forEach((a)=>{
    //  Jika di click akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML

    // jika pilihan komputer == pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("THAARIQ MENANG");
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer WIN");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer WINN");
    }

    // jika pilihan user menang
    if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WIN");
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WINN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WINNN");
    }
}