const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const nextButton = document.querySelector('.next-button');
const imgShow = document.querySelector('.img')
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');

const audio = document.querySelector('.audio');

const progressbar = document.querySelector('.progress-bar');
const PlayImage = document.querySelector('.image-container');
const fileInput = document.getElementById('file-input');

let isPlaying = false;
PlayImage.style.display = 'none';

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        if (audio.src.includes('music/song.mp3')) {
            songTitle.textContent = "Shall We"; 
            artist.textContent = 'Percy feat 4ourYou & GENA DESOUZA';
        } else {
            audio.src = 'music/song.mp3'; 
            songTitle.textContent = "Shall We"; 
            artist.textContent = 'Percy feat 4ourYou & GENA DESOUZA';
        }
        audio.play();
        isPlaying = true;
        PlayImage.style.display = 'block';
}});

pauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
});

nextButton.addEventListener('click', () => {
    if (isPlaying) {
        if (audio.src.includes('music/song.mp3')) {
            imgShow.src = 'https://lh6.googleusercontent.com/proxy/S5IiELJ-BH5Np_Bm0u_Mnmc8TY3Vzr23xroZhe8lWgEgBu1n2WY6Q3-Id_jQAqTbuHsiki9tHtAILtnB20-kP09DyCDcbh7a9qzWubLWtBCK9od1byhaGvk9AlhTxWHu4kMG=w1200-h630-p-k-no-nu';
            audio.src = 'music/laki.mp3';
            songTitle.textContent = 'Laki';
            artist.textContent = 'Dj Jom'; 
        } else if (audio.src.includes('music/laki.mp3')) {
            imgShow.src = 'https://lh6.googleusercontent.com/proxy/S5IiELJ-BH5Np_Bm0u_Mnmc8TY3Vzr23xroZhe8lWgEgBu1n2WY6Q3-Id_jQAqTbuHsiki9tHtAILtnB20-kP09DyCDcbh7a9qzWubLWtBCK9od1byhaGvk9AlhTxWHu4kMG=w1200-h630-p-k-no-nu';
            audio.src = 'music/laki2.mp3';
            songTitle.textContent = 'Laki2';
            artist.textContent = 'Dj Jom'; 
        } else {
            imgShow.src = 'percy.jpg';
            audio.src = 'music/song.mp3'; 
            songTitle.textContent = "Shall We"; 
            artist.textContent = 'Percy feat 4ourYou & GENA DESOUZA'; 
        }
       
        audio.play();
    }
});





audio.addEventListener('timeupdate', () => {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    progressbar.style.width = `${progressPercentage}%`;
})