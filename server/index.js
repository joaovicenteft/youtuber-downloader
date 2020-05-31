const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server is working at 4000 port');
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);

});

app.get('/downloadSound', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="sound.mp3"');

    ytdl(URL, {
        format: 'mp3'
    }).pipe(res);

})


















