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
    && password === "12characters"){

        alert("Anda Login Sebagai Admin!");

        document
        .getElementById("loginPopup")
        .style.display = "none";

        window.location.href = "dashboard.html";

    }if(username === "guest"
        && password === "123"){

            alert("Login Berhasil")
            
            document
            .getElementById("loginPopup")
            .style.display = "none";
    }else{

        alert("Username atau Password salah!");

    }

}

let pesanan =
JSON.parse(
localStorage.getItem("pesanan")
) || [];

tampilkanData();

function tambahPesanan(){

    let nama =
    document.getElementById("nama").value;

    let email =
    document.getElementById("email").value;

    let jenis =
    document.getElementById("jenis").value;

    pesanan.push({
        nama,
        email,
        jenis
    });

    localStorage.setItem(
        "pesanan",
        JSON.stringify(pesanan)
    );

    tampilkanData();
}

function tampilkanData(){

    let tbody =
    document.getElementById("dataPesanan");

    tbody.innerHTML="";

    pesanan.forEach((item,index)=>{

        tbody.innerHTML += `
            <tr>
            <td>${item.nama}</td>
            <td>${item.email}</td>
            <td>${item.jenis}</td>
            <td>${item.deskripsi}</td>

            <td>
                <button onclick="hapusPesanan(${index})">
                Hapus
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById(
    "totalOrder"
    ).innerText = pesanan.length;
}

function hapusPesanan(index){

    pesanan.splice(index,1);

    localStorage.setItem(
        "pesanan",
        JSON.stringify(pesanan)
    );

    tampilkanData();
}

function kirimPesanan(event){

    event.preventDefault();

    let dataPesanan =
    JSON.parse(
    localStorage.getItem("pesanan")
    ) || [];

    dataPesanan.push({

        nama:
        document.getElementById("namaPesanan").value,

        email:
        document.getElementById("emailPesanan").value,

        jenis:
        document.getElementById("jenisPesanan").value,

        deskripsi:
        document.getElementById("deskripsiPesanan").value

    });

    localStorage.setItem(
        "pesanan",
        JSON.stringify(dataPesanan)
    );

    alert("Pesanan berhasil dikirim!");

    event.target.reset();
}