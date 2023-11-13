// Music play section
const music = new Audio('/Html Tutorial/mymusic/Falak Tak .mp3');
music.play();

// create a Music Array

const songs = [
    {
        id:'1',
        songName: `
                    Falak Tak <br>
                    <div class="subtitle">Udit Narayan</div>
                `,
        poster:"https://i.pinimg.com/564x/00/89/fa/0089faaaca8be8bbc4c7039bc40f3c41.jpg"
    },
    {
        id:'2',
        songName: `
        First Kiss <br>
        <div class="subtitle">Honey singh</div>
   `,
        poster:"https://i.pinimg.com/564x/9b/6b/b4/9b6bb423ab0b59b3aa134941cfeb2d31.jpg"
    },
    {
        id:'3',
        songName: `
        Excuses <br>
        <div class="subtitle">Ap Dillon</div>
   `,
        poster:"https://i.pinimg.com/564x/3d/6b/f6/3d6bf6c5a31d1c26ddac3298586dda9d.jpg"
    },
    {
        id:'4',
        songName: `
        Fashoin <br>
        <div class="subtitle">Guru Randhawa </div>
    `,
        poster:"https://i.pinimg.com/564x/d0/09/8d/d0098d48b06c1a757e83100023f3dd30.jpg"
    },
    {
        id:'5',
        songName: `
        Gaddaar <br>
        <div class="subtitle">Akhil</div>
    `,
        poster:"https://i.pinimg.com/236x/22/15/b5/2215b5dd593080de2e46f95cac4e9144.jpg"
    },
    {
        id:'6',
        songName: `
        Fitoor <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/5f/a9/89/5fa9890d28231e4fef9241bf91f94dcc.jpg"
    },
    {
        id:'7',
        songName: `
        Falak Tak  <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/00/89/fa/0089faaaca8be8bbc4c7039bc40f3c41.jpg"
    }
    ,
    {
        id:'8',
        songName: `
        First Kiss <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/9b/6b/b4/9b6bb423ab0b59b3aa134941cfeb2d31.jpg"
    }
    ,
    {
        id:'9',
        songName: `
        Excuses <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/3d/6b/f6/3d6bf6c5a31d1c26ddac3298586dda9d.jpg"
    }
    ,
    {
        id:'10',
        songName: `
        On My Way <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/ed/c5/7b/edc57bae370688b91f5c3ee259053409.jpg"
    }
    ,
    {
        id:'11',
        songName: `
        Fitoor <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/5f/a9/89/5fa9890d28231e4fef9241bf91f94dcc.jpg"
    }
    ,
    {
        id:'12',
        songName: `
        Gani <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/30/50/5e/30505e4bd3f26deb03a439d4e0b318bf.jpg"
    },
    {
        id:'13',
        songName: `
        Gela Gela Gela <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/0d/fc/8a/0dfc8afc0a870c4b08050b3bd1e7de0d.jpg"
    },
    {
        id:'14',
        songName: `
        Friends <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/6a/3a/b5/6a3ab5e05f10aef84db2f7c92058f964.jpg"
    },
    {
        id:'15',
        songName: `
        Gale Lag Ja <br>
        <div class="subtitle">Arijit Singh</div>
    `,
        poster:"https://i.pinimg.com/564x/32/ae/2c/32ae2c2dec30dea9fec0874ea8899476.jpg"
    },
    {
        id:'16',
        songName: `
        Ghalat Fehmi <br>
        <div class="subtitle">Galat Fehmi</div>       
    `,
        poster:"https://i.pinimg.com/736x/a0/ea/cc/a0eacca5fe78b490cdb2a80ce2d46790.jpg"
    }    

];

Array.from(document.getElementsByClassName('songItem')).forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

    
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' , () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('action');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');        
    } else{
        music.pause();
        wave.classList.remove('action');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const musicBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element) =>{
        element.style.background = 'rgb(105,105,107,0)';
    })
};
const musicPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) =>{    
        element.classList.remove('bi-play-circle-fill');
        element.classList.add('bi-pause-circle-fill');
    })
};
// Music index Array
let musicIndex = 0;
let poster_master_play = document.getElementById('master_Play_poster');
let title_play = document.getElementById('title_play');
Array.from(document.getElementsByClassName('playlistPlay')).forEach( (musicIndexElement) =>{
    musicIndexElement.addEventListener('click' ,(musicIndexEl) =>{
        musicIndex = musicIndexEl.target.id;
        console.log(musicIndex);
        music.src =`/Html Tutorial/mymusic/${musicIndex}.mp3`;
        // poster_master_play.src ='' You should go and douwnload Image and create a folder to apply this property
        music.play();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-circle-fill'); 

        let songTitles = songs.filter((filterElem) =>{
            return  filterElem.id = musicIndex;
        });
        songTitles.forEach( filElem => {
            let {songName} = filElem;
            title_play.innerHTML = songName;
        });
        musicBackground ();
        Array.from(document.getElementsByClassName('songItem'))[musicIndex -1].style.background ="rgb(105,105,107,0.1)"
        musicPlays();
        musicIndexEl.target.classList.remove('bi-pause-circle-fill');
        musicIndexEl.target.classList.add('bi-play-circle-fill');
        wave.classList.add('action');
    });
});


// Timer

const currentStart = document.getElementById('current-start');
const currentEnd = document.getElementById('current-end');
const seek = document.getElementById('seek');
const playBar = document.getElementsByClassName('play-bar-sub')[0];
const playDot = document.getElementsByClassName('play-dot')[0];




music.addEventListener('timeupdate' , () =>{
    let music_curr = music.currentTime;
    let music_Duration  = music.duration;
    // console.log(music_curr);
    // console.log(music_Duration);
    let minOne = Math.floor(music_Duration / 60);
    let secOne = Math.floor(music_Duration % 60);
    // console.log(secOne);  

    if(secOne < 10){
        secOne `0${secOne}`;
    }
    currentEnd.innerHTML = `${minOne} : ${secOne}`;

    let minTwo = Math.floor(music_curr / 60);
    let secTwo = Math.floor(music_curr % 60); 

    if(secTwo < 10){
        secTwo `0${secTwo}`;
    }
    currentStart.innerHTML = `${minTwo} : ${secTwo}`;


    // Progress bar
    let progressBar = parseInt((music_curr / music_Duration ) *100);
    seek.value = progressBar;
    console.log(seek.value);

    let seekBar = seek.value;
    playBar.style.width =`${seekBar}%`;
    playDot.style.left = `${seekBar}%`;
    
});

// Music Play dot

seek.addEventListener('change' ,() =>{
    music.currentTime = seek.value * music.duration / 100;
});


// Music volume

let vol_icon = document.getElementsByClassName('vol-icon');
let vol = document.getElementById('vol_icon');
let vol_bar = document.getElementsByClassName('vol-bar-sub')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change' ,() =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');   
    }if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_value = vol.value;
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left =`${vol_value}%`;
    music.volume = vol_value /100;
})

        
        console.log(musicIndex = Array.from(document.getElementsByClassName('songItem')).length;);


let backSong = document.getElementById('backSong');
let nextSong = document.getElementById('nextSong');

backSong.addEventListener('click' , () =>{
    musicIndex -= 1;
    if(musicIndex < 1){
        musicIndex = Array.from(document.getElementsByClassName('songItem')).length;
      
    }
    music.src =`/Html Tutorial/mymusic/${musicIndex}.mp3`;
        // poster_master_play.src ='' You should go and douwnload Image and create a folder to apply this property
        music.play();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-circle-fill'); 

        let songTitles = songs.filter((filterElem) =>{
            return  filterElem.id = musicIndex;
        });
        songTitles.forEach( filElem => {
            let {songName} = filElem;
            title_play.innerHTML = songName;
        });
        musicBackground ();
        Array.from(document.getElementsByClassName('songItem'))[musicIndex -1].style.background ="rgb(105,105,107,0.1)"
        musicPlays();
        masterPlay.target.classList.remove('bi-pause-circle-fill');
        masterPlay.target.classList.add('bi-play-circle-fill');
        wave.classList.add('action');
})

nextSong.addEventListener('click' ,() =>{
    musicIndex += 1;
    if(musicIndex > Array.from(document.getElementsByClassName('songItem')).length){
    musicIndex =1;
    }
    music.src =`/Html Tutorial/mymusic/${musicIndex}.mp3`;
        // poster_master_play.src ='' You should go and douwnload Image and create a folder to apply this property
        music.play();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-circle-fill'); 

        let songTitles = songs.filter((filterElem) =>{
            return  filterElem.id = musicIndex;
        });
        songTitles.forEach( filElem => {
            let {songName} = filElem;
            title_play.innerHTML = songName;
        });
        musicBackground ();
        Array.from(document.getElementsByClassName('songItem'))[musicIndex -1].style.background ="rgb(105,105,107,0.1)"
        musicPlays();
        masterPlay.target.classList.remove('bi-pause-circle-fill');
        masterPlay.target.classList.add('bi-play-circle-fill');
        wave.classList.add('action');
})

// Scroll - Section 
// Song Scroll section
let pop_left_scroll = document.getElementById('pop_left_scroll');
let pop_right_scroll = document.getElementById('pop_right_scroll');
let pop_song = document.getElementsByClassName('pop-song-sec')[0];

pop_right_scroll.addEventListener('click' ,() =>{
    pop_song.scrollLeft += 330;
})

pop_left_scroll.addEventListener('click' , () =>{
    pop_song.scrollLeft -= 330;
})

// Artist Scroll section 
let left_scroll_art = document.getElementById('left_scroll_artist');
let right_scroll_art  = document.getElementById('right_scroll_artist');
let pop_artist = document.getElementsByClassName('artist-item-sec')[0];

left_scroll_art.addEventListener('click' ,() =>{
    pop_artist.scrollLeft -= 330;
})

right_scroll_art.addEventListener('click' , () =>{
    pop_artist.scrollLeft += 330;
});

