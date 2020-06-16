// Homework:
// Create a music box. The design is completely up to you;
// The app should be able to:
//  - play audio files;
//  - pause audio files;
//  - has next/previous buttons;
//  - has randomization (when selected it randomizes the song order);
//  - able to load audio files;
// Please make sure that the app looks as good as possible in 
// terms of design. This is your portfolio and all aspects of the app
// (not only the js logic) is very important; Start the project gradually
//  - first figure out how to work with audio in javascript. 
//  Once you get the play and pause buttons proceed with the rest;
//  Leave the design and css until the end.


let playlist = [
    "audio/01.mp3",
    "audio/02.mp3",
    "audio/03.mp3",
    "audio/04.mp3",
    "audio/05.mp3"
]

let tracklist = [
    "Brian Eno - Needles In the Camel's Eye",
    "Brian Eno - The Paw Paw Negro Blowtorch",
    "Brian Eno - Baby's On Fire",
    "Brian Eno - Cindy Tells Me",
    "Brian Eno - Driving Me Backwards",
]

let audio = new Audio;
let i = 0;

//play & pause
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let title = document.getElementById('title')

play.addEventListener("click", playSong)
pause.addEventListener("click", pauseSong)

function playSong() {
    audio.src = playlist[i];
    title.textContent = tracklist[i];
    audio.play();
}

function pauseSong() {
    audio.src = playlist[i];
    title.textContent = tracklist[i];
    audio.pause();
}


//next & previous
let forward = document.getElementById('forward')
let backward = document.getElementById('backward')

forward.addEventListener("click", next)
backward.addEventListener("click", previous)
audio.addEventListener("ended", next)

function next() {
    i = i + 1
    if (i > playlist.length - 1) {
        i = 0
    }
    audio.src = playlist[i];
    title.textContent = tracklist[i];
    audio.play();
}

function previous() {
    i = i - 1
    if (i < 0) {
        i = playlist.length-1
    }
    audio.src = playlist[i];
    title.textContent = tracklist[i];
    audio.play();
}


//random & shuffle
let random = playlist[Math.floor(Math.random() * playlist.length)];

let audioX = new Audio(random);

let shuffle = document.getElementById('shuffle')
shuffle.addEventListener("click", playX)

function playX() {
    audioX.play();
    if (audioX.play) {
        audio.pause();
    }
}