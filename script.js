console.log("welcome Spotify")



var songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById("play");
let Myprogess=document.getElementById("myProgress");
let songGif=document.getElementById('songGif');
let mastersongName=document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {
        songName:"Salame-e-Ishq",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"
    },
    {
        songName:"2",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"
    },
    {
        songName:"3q",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"
    },
    {
        songName:"4",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"
    },
    {
        songName:"5",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"
    },
    {
        songName:"S6",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"
    },
    {
        songName:"7",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"
    },
    {
        songName:"8",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"
    },
    {
        songName:"9",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"
    },
    {
        songName:"10",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"
    }
]

songItems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
// to play the audio 
// audioElement.play();

//play/pause

play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        songGif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        songGif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //udate seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    Myprogess.value=progress;
})

Myprogess.addEventListener('change',()=>{
    audioElement.currentTime=(Myprogess.value*audioElement.duration)/100;
})
const makeplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    }); 
 
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeplay();
        mastersongName.innerText=songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        songGif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
console.log(songIndex);
document.getElementsById('next').addEventListener('click',()=>
{
    console.log(songIndex);
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    songGif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(songIndex);
    
})

document.getElementsById('previous').addEventListener('click',()=>{
    if(songIndex9<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    songGif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})