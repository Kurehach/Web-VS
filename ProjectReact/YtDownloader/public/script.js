function downloadVideo() {
    const url = document.getElementById("url").value;

    console.log("Tombol diklik");
    console.log(url);

    window.location.href =
        `/download?url=${encodeURIComponent(url)}`;
}