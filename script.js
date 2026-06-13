/* =========================================================
   SORRY SWEETHEART ❤️
   script.js PART 1
   Core Logic + Loader + Typing + Modal +
   Buttons + Character Reactions + Toasts
========================================================= */

"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const loader = document.getElementById("loader");

const typingText = document.getElementById("typingText");

const mainHeart = document.getElementById("mainHeart");

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const hugBtn = document.getElementById("hugBtn");
const letterBtn = document.getElementById("letterBtn");

const responseBox = document.getElementById("responseBox");

const character = document.getElementById("character");

const modal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");

const replayBtn = document.getElementById("replayBtn");
const shareBtn = document.getElementById("shareBtn");

const toastContainer =
    document.getElementById("toastContainer");

const backToTop =
    document.getElementById("backToTop");

/* =========================================================
   STATE
========================================================= */

let soundEnabled = true;

let typingFinished = false;

/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        startTyping();

        revealOnLoad();

    }, 3000);

});

/* =========================================================
   TYPING EFFECT
========================================================= */

const apologyMessage = `Sorry Sweetheart ❤️

I know I made mistakes.
I know I hurt your feelings.

But every heartbeat reminds me
how important you are to me.

You mean the world to me and
I never want to lose your smile. 🥺💖

💞💌🌸✨🌷🎀🐻🤗`;

function startTyping(){

    typingText.innerHTML = "";

    let i = 0;

    typingFinished = false;

    const speed = 40;

    function type(){

        if(i < apologyMessage.length){

            const char = apologyMessage.charAt(i);

            if(char === "\n"){

                typingText.innerHTML += "<br>";

            }else{

                typingText.innerHTML += char;
            }

            i++;

            setTimeout(type, speed);

        }else{

            typingFinished = true;
        }
    }

    type();
}

/* =========================================================
   TOAST SYSTEM
========================================================= */

function showToast(message){

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform =
            "translateY(-15px)";

    }, 2500);

    setTimeout(() => {

        toast.remove();

    }, 3000);
}

/* =========================================================
   CHARACTER HELPERS
========================================================= */

function clearCharacterStates(){

    character.classList.remove(
        "happy",
        "blushing",
        "excited",
        "puppy",
        "hugging"
    );
}

function happyCharacter(){

    clearCharacterStates();

    character.classList.add("happy");

    setTimeout(() => {

        character.classList.remove("happy");

    }, 700);
}

function blushCharacter(){

    clearCharacterStates();

    character.classList.add(
        "blushing",
        "puppy"
    );

    setTimeout(() => {

        character.classList.remove(
            "puppy"
        );

    }, 3500);
}

function excitedCharacter(){

    clearCharacterStates();

    character.classList.add("excited");

    setTimeout(() => {

        character.classList.remove(
            "excited"
        );

    }, 3000);
}

function hugCharacter(){

    clearCharacterStates();

    character.classList.add(
        "hugging"
    );

    setTimeout(() => {

        character.classList.remove(
            "hugging"
        );

    }, 3000);
}

/* =========================================================
   RESPONSE MESSAGE
========================================================= */

function updateResponse(message){

    responseBox.innerHTML = message;

    responseBox.classList.remove(
        "glowPulse"
    );

    void responseBox.offsetWidth;

    responseBox.classList.add(
        "glowPulse"
    );
}

/* =========================================================
   HEART CLICK
========================================================= */

mainHeart.addEventListener(
    "click",
    () => {

        mainHeart.classList.add(
            "active",
            "boom"
        );

        document.body.classList.add(
            "shake"
        );

        excitedCharacter();

        updateResponse(
            "💖 Every heartbeat says your name, sweetheart. 💖"
        );

        showToast(
            "❤️ Heart activated!"
        );

        setTimeout(() => {

            mainHeart.classList.remove(
                "active",
                "boom"
            );

            document.body.classList.remove(
                "shake"
            );

        }, 1200);

        /* Fireworks, confetti,
           heart rain added in Part 2 */
    }
);

/* =========================================================
   YES BUTTON
========================================================= */

yesBtn.addEventListener(
    "click",
    () => {

        happyCharacter();

        updateResponse(`
            Yay! Thank you sweetheart ❤️
            <br><br>
            You just made my heart smile.
        `);

        showToast(
            "🥺❤️ Thank you sweetheart!"
        );

        /* Fireworks Part 2 */
    }
);

/* =========================================================
   MAYBE BUTTON
========================================================= */

maybeBtn.addEventListener(
    "click",
    () => {

        blushCharacter();

        updateResponse(`
            I'll keep trying because
            you're worth every effort 🥺❤️
        `);

        showToast(
            "💞 Hope still remains."
        );

        /* Floating hearts Part 2 */
    }
);

/* =========================================================
   HUG BUTTON
========================================================= */

hugBtn.addEventListener(
    "click",
    () => {

        hugCharacter();

        updateResponse(`
            Sending the biggest
            virtual hug ever 🤗❤️
        `);

        showToast(
            "🤗 Hug delivered!"
        );

        /* Heart burst Part 2 */
    }
);

/* =========================================================
   LOVE LETTER MODAL
========================================================= */

letterBtn.addEventListener(
    "click",
    () => {

        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";
    }
);

closeModal.addEventListener(
    "click",
    closeLetterModal
);

modal.addEventListener(
    "click",
    (e) => {

        if(
            e.target.classList.contains(
                "modal-overlay"
            )
        ){

            closeLetterModal();
        }
    }
);

function closeLetterModal(){

    modal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";
}

/* =========================================================
   THEME TOGGLE
========================================================= */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const darkMode =
            document.body.classList.contains(
                "dark"
            );

        localStorage.setItem(
            "sweetheart-theme",
            darkMode ? "dark" : "light"
        );

        themeToggle.textContent =
            darkMode
                ? "☀️"
                : "🌙";

        showToast(
            darkMode
                ? "🌙 Dark mode enabled"
                : "☀️ Light mode enabled"
        );
    }
);

(function restoreTheme(){

    const saved =
        localStorage.getItem(
            "sweetheart-theme"
        );

    if(saved === "dark"){

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀️";
    }

})();

/* =========================================================
   SOUND TOGGLE
========================================================= */

soundToggle.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;

        soundToggle.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";

        showToast(
            soundEnabled
                ? "🔊 Sound enabled"
                : "🔇 Sound muted"
        );
    }
);

/* =========================================================
   SHARE BUTTON
========================================================= */

shareBtn.addEventListener(
    "click",
    async () => {

        try{

            if(
                navigator.share
            ){

                await navigator.share({

                    title:
                        "Sorry Sweetheart ❤️",

                    text:
                        "A little apology made with love ❤️",

                    url:
                        location.href
                });

            }else{

                navigator.clipboard.writeText(
                    location.href
                );

                showToast(
                    "💌 Link copied!"
                );
            }

        }catch(err){

            console.log(err);
        }
    }
);

/* =========================================================
   REPLAY BUTTON
========================================================= */

replayBtn.addEventListener(
    "click",
    () => {

        startTyping();

        revealOnLoad();

        showToast(
            "✨ Replaying animations"
        );
    }
);

/* =========================================================
   SCROLL REVEALS
========================================================= */

const reveals =
    document.querySelectorAll(
        ".reveal"
    );

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "active"
                        );
                    }
                }
            );
        },

        {
            threshold:0.15
        }
    );

reveals.forEach(
    item => revealObserver.observe(
        item
    )
);

function revealOnLoad(){

    reveals.forEach(
        item => {

            item.classList.add(
                "active"
            );
        }
    );
}

/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 500
        ){

            backToTop.classList.add(
                "show"
            );

        }else{

            backToTop.classList.remove(
                "show"
            );
        }
    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"
        });
    }
);

/* =========================================================
   OPTIONAL AUDIO
========================================================= */

const heartSound =
    document.getElementById(
        "heartSound"
    );

const bgMusic =
    document.getElementById(
        "bgMusic"
    );

function playHeartSound(){

    if(
        !soundEnabled ||
        !heartSound
    ) return;

    heartSound.currentTime = 0;

    heartSound.play()
        .catch(() => {});
}

document.addEventListener(
    "click",
    () => {

        if(
            soundEnabled &&
            bgMusic
        ){

            bgMusic.play()
                .catch(() => {});
        }

    },
    { once:true }
);

/* =========================================================
   END OF PART 1
   Fireworks + Confetti + Heart Rain +
   Cursor Trail + Emoji Bursts +
   Particles arrive in Part 2
========================================================= */
/* =========================================================
   SORRY SWEETHEART ❤️
   script.js PART 2
   Fireworks + Confetti + Heart Rain +
   Emoji Bursts + Cursor Trail +
   Sparkles + Floating Generators
========================================================= */

/* =========================================================
   FIREWORKS SYSTEM
========================================================= */

function createFireworks(x, y, count = 40){

    const colors = [
        "#ff6fa8",
        "#ff9ac6",
        "#ffd6e7",
        "#f7d8ff",
        "#fff"
    ];

    for(let i = 0; i < count; i++){

        const firework =
            document.createElement("div");

        firework.className =
            "firework";

        firework.style.left =
            x + "px";

        firework.style.top =
            y + "px";

        firework.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            80 +
            Math.random() * 140;

        firework.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        firework.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(
            firework
        );

        setTimeout(() => {

            firework.remove();

        }, 1300);
    }
}

/* =========================================================
   CONFETTI SYSTEM
========================================================= */

function createConfetti(amount = 70){

    const colors = [
        "#ff6fa8",
        "#ffd6e7",
        "#ffffff",
        "#f7d8ff",
        "#ffb3d2"
    ];

    for(let i = 0; i < amount; i++){

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        confetti.style.top =
            "-20px";

        confetti.style.width =
            6 +
            Math.random()*10 +
            "px";

        confetti.style.height =
            6 +
            Math.random()*10 +
            "px";

        confetti.style.animationDuration =
            2 +
            Math.random()*3 +
            "s";

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}

/* =========================================================
   HEART RAIN
========================================================= */

function createHeartRain(
    amount = 40
){

    for(let i = 0; i < amount; i++){

        const heart =
            document.createElement(
                "div"
            );

        heart.className =
            "floating-heart";

        heart.innerHTML =
            ["❤️","💖","💞","💕"][
                Math.floor(
                    Math.random()*4
                )
            ];

        heart.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        heart.style.top =
            window.innerHeight +
            "px";

        heart.style.fontSize =
            (
                18 +
                Math.random()*25
            ) + "px";

        heart.style.animationDuration =
            (
                4 +
                Math.random()*4
            ) + "s";

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 9000);
    }
}

/* =========================================================
   SPARKLE BURST
========================================================= */

function createSparkles(
    x,
    y,
    amount = 25
){

    for(let i = 0; i < amount; i++){

        const sparkle =
            document.createElement(
                "div"
            );

        sparkle.className =
            "sparkle";

        sparkle.innerHTML =
            ["✨","🌟","💫"][
                Math.floor(
                    Math.random()*3
                )
            ];

        sparkle.style.left =
            (
                x +
                (Math.random()-0.5)*150
            ) + "px";

        sparkle.style.top =
            (
                y +
                (Math.random()-0.5)*150
            ) + "px";

        document.body.appendChild(
            sparkle
        );

        setTimeout(() => {

            sparkle.remove();

        }, 2000);
    }
}

/* =========================================================
   EMOJI BURST
========================================================= */

function createEmojiBurst(
    x,
    y,
    amount = 20
){

    const emojis = [
        "🥺",
        "❤️",
        "💖",
        "💞",
        "🌸",
        "✨",
        "🤗"
    ];

    for(let i = 0; i < amount; i++){

        const emoji =
            document.createElement(
                "div"
            );

        emoji.className =
            "emoji-burst";

        emoji.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        emoji.style.left =
            (
                x +
                (Math.random()-0.5)*100
            ) + "px";

        emoji.style.top =
            (
                y +
                (Math.random()-0.5)*100
            ) + "px";

        emoji.style.fontSize =
            (
                18 +
                Math.random()*20
            ) + "px";

        document.body.appendChild(
            emoji
        );

        setTimeout(() => {

            emoji.remove();

        }, 2500);
    }
}

/* =========================================================
   CURSOR HEART TRAIL
========================================================= */

document.addEventListener(
    "mousemove",
    e => {

        const heart =
            document.createElement(
                "div"
            );

        heart.className =
            "cursor-heart";

        heart.innerHTML =
            "💖";

        heart.style.left =
            e.clientX + "px";

        heart.style.top =
            e.clientY + "px";

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 1000);
    }
);

/* =========================================================
   FLOATING STARS
========================================================= */

function generateStars(){

    const stars =
        document.getElementById(
            "stars"
        );

    if(!stars) return;

    for(let i = 0; i < 50; i++){

        const star =
            document.createElement(
                "span"
            );

        star.className =
            "star";

        star.style.left =
            Math.random()*100 +
            "%";

        star.style.top =
            Math.random()*100 +
            "%";

        star.style.animationDelay =
            Math.random()*3 +
            "s";

        stars.appendChild(star);
    }
}

generateStars();

/* =========================================================
   FLOATING EMOJI CLOUDS
========================================================= */

function generateEmojiClouds(){

    const container =
        document.getElementById(
            "emojiClouds"
        );

    if(!container) return;

    const emojis = [
        "❤️",
        "💖",
        "💞",
        "🌸",
        "✨",
        "🎀"
    ];

    setInterval(() => {

        const emoji =
            document.createElement(
                "div"
            );

        emoji.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        emoji.style.position =
            "absolute";

        emoji.style.left =
            Math.random()*100 +
            "%";

        emoji.style.bottom =
            "-40px";

        emoji.style.fontSize =
            (
                20 +
                Math.random()*20
            ) + "px";

        emoji.style.opacity =
            ".7";

        emoji.style.transition =
            "8s linear";

        container.appendChild(
            emoji
        );

        requestAnimationFrame(() => {

            emoji.style.transform =
                "translateY(-120vh)";

        });

        setTimeout(() => {

            emoji.remove();

        }, 8000);

    }, 1500);
}

generateEmojiClouds();

/* =========================================================
   HEART CLICK UPGRADE
========================================================= */

mainHeart.addEventListener(
    "click",
    e => {

        const x =
            e.clientX;

        const y =
            e.clientY;

        createFireworks(
            x,
            y,
            50
        );

        createConfetti(50);

        createHeartRain(30);

        createSparkles(
            x,
            y,
            30
        );

        createEmojiBurst(
            x,
            y,
            20
        );

        playHeartSound();
    }
);

/* =========================================================
   YES BUTTON UPGRADE
========================================================= */

yesBtn.addEventListener(
    "click",
    () => {

        createConfetti(120);

        createHeartRain(80);

        createEmojiBurst(
            window.innerWidth/2,
            window.innerHeight/2,
            50
        );

        createFireworks(
            window.innerWidth/2,
            window.innerHeight/2,
            90
        );

        createSparkles(
            window.innerWidth/2,
            window.innerHeight/2,
            40
        );
    }
);

/* =========================================================
   MAYBE BUTTON UPGRADE
========================================================= */

maybeBtn.addEventListener(
    "click",
    () => {

        createHeartRain(50);

        createEmojiBurst(
            window.innerWidth/2,
            window.innerHeight/2,
            25
        );
    }
);

/* =========================================================
   HUG BUTTON UPGRADE
========================================================= */

hugBtn.addEventListener(
    "click",
    () => {

        createHeartRain(100);

        createSparkles(
            window.innerWidth/2,
            window.innerHeight/2,
            60
        );

        createEmojiBurst(
            window.innerWidth/2,
            window.innerHeight/2,
            40
        );
    }
);

/* =========================================================
   REPLAY EFFECTS
========================================================= */

function replayEffects(){

    createConfetti(50);

    createHeartRain(40);

    createEmojiBurst(
        window.innerWidth/2,
        window.innerHeight/2,
        30
    );
}

replayBtn.addEventListener(
    "click",
    replayEffects
);

/* =========================================================
   END PART 2

   Remaining for Part 3:
   - Canvas fireworks engine
   - Advanced particles
   - Parallax
   - Mobile performance optimizer
   - Theme transitions
   - Floating flowers generator
   - Scroll particle effects
   - Final polish
========================================================= */