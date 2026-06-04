const express = require("express");
const { exec } = require("child_process");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/download", (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.send("URL kosong");
    }

    const filename = "video.mp4";

    exec(
    `py -m yt_dlp -f 18 "${url}" -o "${filename}"`,
    (err, stdout, stderr) => {

        if (err) {
        console.error(stderr);
        return res.send(stderr);
        }

        res.download(path.join(__dirname, filename), (err) => { if (err) {
    console.error("DOWNLOAD ERROR:", err);
    
    } else {
    console.log("DOWNLOAD SUCCESS");
    }
});
    });
});



app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});

