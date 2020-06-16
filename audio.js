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
    {title:"Needles In the Camel's Eye", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/01.mp3"},
    {title:"The Paw Paw Negro Blowtorch", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/02.mp3"},
    {title:"Baby's On Fire", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/03.mp3"},
    {title:"Cindy Tells Me", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/04.mp3"},
    {title:"Driving Me Backwards", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/05.mp3"}
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
    audio.src = playlist[i].source;
    title.textContent = playlist[i].title + " — " + playlist[i].artist;
    audio.play();
    audioX.pause();
}

function pauseSong() {
    audio.src = playlist[i].source;
    title.textContent = playlist[i].title + " — " + playlist[i].artist;
    audio.pause();
    audioX.pause();
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
    audio.src = playlist[i].source;
    title.textContent = playlist[i].title + " — " + playlist[i].artist;
    audio.play();
}

function previous() {
    i = i - 1
    if (i < 0) {
        i = playlist.length-1
    }
    audio.src = playlist[i].source;
    title.textContent = playlist[i].title + " — " + playlist[i].artist;
    audio.play();
}


//random & shuffle
let random = playlist[Math.floor(Math.random() * playlist.length)].source;

let audioX = new Audio(random);

let shuffle = document.getElementById('shuffle')
shuffle.addEventListener("click", playX)

function playX() {
    title.textContent = playlist[i].album;
    audioX.play();
    audio.pause();
}


//add songs
function add() {
    playlist.push(
    {title:"On Some Faraway Beach", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/06.mp3"},
    {title:"Blank Frank", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/07.mp3"},
    {title:"Dead Finks Don't Talk", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/08.mp3"},
    {title:"Some Of Them Are Old", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/09.mp3"},
    {title:"Here Come the Warm Jets", artist:"Brian Eno", album: "Here Come the Warm Jets", source:"audio/10.mp3"})
    audio.play()
}

window.onload(title.textContent = playlist[i].album);