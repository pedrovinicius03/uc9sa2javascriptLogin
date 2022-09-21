function mostrarmenu() {
    let menu = document.getElementById("menu")

    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }

    }

    function cadastrarNewsletter() {
        alert("Usuário cadastrado com sucesso")
    }