function openLogin(){

    document
    .getElementById("loginPopup")
    .style.display = "flex";
}

function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "admin"
    && password === "123"){

        alert("Login berhasil!");

        document
        .getElementById("loginPopup")
        .style.display = "none";

    }else{

        alert("Username atau Password salah!");

    }

}