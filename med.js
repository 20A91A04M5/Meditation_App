
function showBreathingExercise() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Breathing Exercise</h2>
        <p id="p1">Inhale as the circle expands, and exhale as it contracts.</p>
        <p id="counts"></p>
        <label for="timeInput">Set Timer (minutes):- </label>
        <input type="number" id="timeInput" min="1" max="60">
        <button id="startTimer">Start Timer</button><br>
        <p id="timerDisplay"></p>
        
        <div class="circle"></div>
        <style>
            .circle {
                margin: 20px auto;
                width: 125px;
                height: 125px;
                background: lightgreen;
                border-radius: 50%;  
                animation: breathe 5s infinite;
                margin-right: 20%;
            }
            
            #p1{
                color:black;
                fontsize:"20px";
                text-align: center;
            }


            #timeInput{
                height:30px;
                width:100px;
                border-radius:10px;
                border: none;
                margin:10px;
            }
                #startTimer:hover{
                background-color:lightgreen;
                color:black;
                }
            
            #startTimer{
                color:white;
                background-color:blue;
                border-radius:5px;
                border:none;
                height:30px;
                width:100px;
            }   
            @keyframes breathe {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.5);
                    border: 2px solid #ff8a65;
                }
            }
        </style>`;


    document.getElementById("startTimer").addEventListener("click", () => {

        let timeInput = document.getElementById("timeInput").value;
        let timeInSeconds = parseInt(timeInput) * 60;

        if (isNaN(timeInSeconds) || timeInSeconds < 0) {
            document.getElementById("timerDisplay").innerText = "Please enter a valid number of minutes.";
            return;
        }
        document.getElementById("startTimer").style.display = "none"

        let timerDisplay = document.getElementById("timerDisplay");
        const timer = setInterval(() => {
            let minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            timerDisplay.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (timeInSeconds <= 0) {
                clearInterval(timer);
                timerDisplay.innerText = "Time's up!";
                Swal.fire({
                    title: "Time's up!",
                    icon: "success",
                    draggable: true
                });
                document.getElementById("startTimer").style.display = "block"
            } else {
                timeInSeconds--;
            }
        }, 1000);
        
        
    });
    


    let cir = document.getElementsByClassName("circle")[0];
    let butt = document.getElementById("cut");
    let stp = document.getElementById("st");

    if (butt && stp) {
        butt.style.color = "white";
        butt.style.backgroundColor = "blue";
        butt.style.borderRadius = "5px";
        butt.style.border = "none";
        butt.style.height = "40px";
        butt.style.width = "80px";

        stp.style.color = "white";
        stp.style.backgroundColor = "red";
        stp.style.borderRadius = "5px";
        stp.style.border = "none";
        stp.style.height = "40px";
        stp.style.width = "80px";

        let p = document.getElementById("counts");
        p.style.color = "green";
        let c = 0;

        butt.addEventListener("click", () => {
            setInterval(() => {
                p.innerText = c;
                c++;
            }, 5000);
        });

        stp.addEventListener("click", () => {
            setTimeout(() => {
                c = 0;
                p.innerText = c;
            }, 0);
        });
    }
}




function showRelaxingSounds() {
    const content = document.getElementById("content");
    content.innerHTML = `
         <h2 id="R">Relaxing Sounds</h2>
    <div class="music-container">
        <div class="track">
            <img src="relax_song_img.jpeg" alt="Relaxing Music">
            <div class="track-info">
                <h4>Relaxing Music</h4>
                <audio id="relaxingMusic" controls>
                    <source src="Relaxing_music.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <div class="track">
            <img src="quit_song_img.jpeg" alt="Quiet Music">
            <div class="track-info">
                <h4>Quiet Music</h4>
                <audio id="quietMusic" controls>
                    <source src="Quiet_music.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <div class="track">
            <img src="lake_song_img.jpeg" alt="Lake Music">
            <div class="track-info">
                <h4>Lake Music</h4>
                <audio id="lakeMusic" controls>
                    <source src="Lake_music.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>

    <style>
    body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: white;
            text-align: center;
        }
        .music-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
        }
        .track {
            display: flex;
            align-items: center;
            background-color: #181818;
            padding: 15px;
            border-radius: 10px;
            width: 80%;
            max-width: 500px;
            box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
        }
        .track img {
            width: 60px;
            height: 60px;
            border-radius: 5px;
            margin-right: 15px;
        }
        .track-info {
            flex-grow: 1;
            text-align: left;
        }
        audio {
            width: 100%;
            margin-top: 5px;
        }
        
    </style>
        
    `;
    const relaxingMusic = document.getElementById("relaxingMusic");
    const quietMusic = document.getElementById("quietMusic");
    const lakeMusic = document.getElementById("lakeMusic");

    // relaxingMusic.style.backgroundColor = "red";
    // quietMusic.style.backgroundColor = "red";
    // lakeMusic.style.backgroundColor = "red";

    relaxingMusic.addEventListener("ended", () => {
        quietMusic.play();
    });

    quietMusic.addEventListener("ended", () => {
        lakeMusic.play();
    });

    relaxingMusic.play();
}

function showBinauralSounds() {
    const content = document.getElementById("content");
    content.innerHTML = `

        <h2>Binaural Sounds</h2>
        <div class="music-container">
        <div class="track">
            <img src="B_img2.jpeg" alt="Binaural Music">
            <div class="track-info">
                <h4>Binaural Music</h4>
                <audio id="br1" controls>
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <div class="track">
            <img src="B_img1.jpeg" alt="Birds Sounds">
            <div class="track-info">
                <h4>Birds Sounds</h4>
                <audio id="br2" controls>
                    <source src="binaural-birds.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <div class="track">
            <img src="B_img3.png" alt="Beach Waves Sounds">
            <div class="track-info">
                <h4>Beach Waves Sounds</h4>
                <audio id="br3" controls>
                    <source src="beach-binaural.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>
        </div>

        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: white;
            text-align: center;
        }
        
        .music-container {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
        }
        .track {
            display: flex;
            align-items: center;
            background-color: #181818;
            padding: 15px;
            border-radius: 10px;
            width: 80%;
            max-width: 500px;
            box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
        }
        .track img {
            width: 60px;
            height: 60px;
            border-radius: 5px;
            margin-right: 15px;
        }
        .track-info {
            flex-grow: 1;
            text-align: left;
        }
        audio {
            width: 100%;
            margin-top: 5px;
        }
    </style>

    `;
    const br1 = document.getElementById("br1")
    const br2 = document.getElementById("br2")
    const br3 = document.getElementById("br3")

    // br1.style.backgroundColor = "blue";
    // br2.style.backgroundColor = "blue";
    // br3.style.backgroundColor = "blue";


    br3.addEventListener("ended", () => {
        br1.play()
    })
    br1.addEventListener("ended", () => {
        br2.play();
    })
    br3.play();
}






