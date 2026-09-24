document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "260409";

    const passwordScreen =
        document.getElementById("passwordScreen");

    const successScreen =
        document.getElementById("successScreen");

    const passwordInput =
        document.getElementById("passwordInput");

    const passwordButton =
        document.getElementById("passwordButton");

    const passwordError =
        document.getElementById("passwordError");


    function openSurprise() {
        const enteredPassword =
            passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            passwordError.classList.remove("show");

            passwordScreen.style.display = "none";
            successScreen.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;
        }

        passwordError.classList.remove("show");

        /*
         * Restart the error animation when the
         * wrong password is entered repeatedly.
         */
        void passwordError.offsetWidth;

        passwordError.classList.add("show");

        passwordInput.value = "";
        passwordInput.focus();
    }


    passwordButton.addEventListener(
        "click",
        openSurprise
    );


    passwordInput.addEventListener(
        "keydown",
        function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                openSurprise();
            }
        }
    );


    passwordInput.focus();
});
/* ==========================================
   OPEN THE BIRTHDAY STORYBOOK
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const openBookButton =
        document.getElementById("openBookButton");

    const introScreen =
        document.getElementById("successScreen");

    const storyScreen =
        document.getElementById("storyScreen");

    if (
        !openBookButton ||
        !introScreen ||
        !storyScreen
    ) {
        return;
    }

    openBookButton.addEventListener(
        "click",
        function () {
            introScreen.classList.remove("show");
            introScreen.style.display = "none";

            storyScreen.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
});
/* ==========================================
   OPEN CHAPTER TWO
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const chapterOneButton =
        document.getElementById(
            "continueToChapterTwo"
        );

    const chapterTwo =
        document.getElementById(
            "chapterTwo"
        );

    if (!chapterOneButton || !chapterTwo) {
        return;
    }

    chapterOneButton.addEventListener(
        "click",
        function () {
            chapterOneButton.style.display =
                "none";

            chapterTwo.classList.add("show");

            chapterTwo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );
});
/* ==========================================
   OPEN CHAPTER THREE
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const chapterTwoButton =
        document.getElementById(
            "continueToChapterThree"
        );

    const chapterThree =
        document.getElementById(
            "chapterThree"
        );

    if (!chapterTwoButton || !chapterThree) {
        return;
    }

    chapterTwoButton.addEventListener(
        "click",
        function () {
            chapterTwoButton.style.display =
                "none";

            chapterThree.classList.add("show");

            chapterThree.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );
});
/* ==========================================
   OPEN CHAPTER FOUR
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const chapterThreeButton =
        document.getElementById(
            "continueToChapterFour"
        );

    const chapterFour =
        document.getElementById(
            "chapterFour"
        );

    if (!chapterThreeButton || !chapterFour) {
        return;
    }

    chapterThreeButton.addEventListener(
        "click",
        function () {
            chapterThreeButton.style.display =
                "none";

            chapterFour.classList.add("show");

            chapterFour.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );
});
/* ==========================================
   OPEN CHAPTERS 5–10
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const chapterTransitions = [
        {
            button: "continueToChapterFive",
            chapter: "chapterFive"
        },
        {
            button: "continueToChapterSix",
            chapter: "chapterSix"
        },
        {
            button: "continueToChapterSeven",
            chapter: "chapterSeven"
        },
        {
            button: "continueToChapterEight",
            chapter: "chapterEight"
        },
        {
            button: "continueToChapterNine",
            chapter: "chapterNine"
        },
        {
            button: "continueToChapterTen",
            chapter: "chapterTen"
        }
    ];

    chapterTransitions.forEach(function (transition) {
        const button =
            document.getElementById(
                transition.button
            );

        const nextChapter =
            document.getElementById(
                transition.chapter
            );

        if (!button || !nextChapter) {
            return;
        }

        button.addEventListener(
            "click",
            function () {
                button.style.display = "none";

                nextChapter.classList.add("show");

                nextChapter.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
});
/* ==========================================
   FINAL ANIMATED GIFT REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const openGiftStoryButton =
        document.getElementById(
            "openGiftStoryButton"
        );

    const storyScreen =
        document.getElementById(
            "storyScreen"
        );

    const giftRevealScreen =
        document.getElementById(
            "giftRevealScreen"
        );

    const animatedGiftBox =
        document.getElementById(
            "animatedGiftBox"
        );

    const poppingGifts =
        document.getElementById(
            "poppingGifts"
        );

    const finalBirthdayMessage =
        document.getElementById(
            "finalBirthdayMessage"
        );

    if (
        !openGiftStoryButton ||
        !storyScreen ||
        !giftRevealScreen ||
        !animatedGiftBox ||
        !poppingGifts ||
        !finalBirthdayMessage
    ) {
        return;
    }


    openGiftStoryButton.addEventListener(
        "click",
        function () {
            storyScreen.style.display = "none";

            giftRevealScreen.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );


    animatedGiftBox.addEventListener(
        "click",
        function () {
            if (
                animatedGiftBox.classList.contains(
                    "opened"
                )
            ) {
                return;
            }

            animatedGiftBox.classList.add("opened");

            poppingGifts.setAttribute(
                "aria-hidden",
                "false"
            );

            poppingGifts.classList.add(
                "revealing"
            );

            document.querySelector(
                ".reveal-instruction"
            ).textContent =
                "Surpriseeee! 😂❤️";


            /*
             * Wait for the individual gifts
             * to finish appearing.
             */
            window.setTimeout(
                function () {
                    finalBirthdayMessage
                        .classList
                        .add("show");

                    finalBirthdayMessage
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                },
                4600
            );
        }
    );
});
/* ==========================================
   HOME PAGE TO PASSWORD SCREEN
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const homeScreen =
        document.getElementById("homeScreen");

    const enterStoryButton =
        document.getElementById(
            "enterStoryButton"
        );

    const passwordScreen =
        document.getElementById(
            "passwordScreen"
        );

    const passwordInput =
        document.getElementById(
            "passwordInput"
        );

    if (
        !homeScreen ||
        !enterStoryButton ||
        !passwordScreen
    ) {
        return;
    }

    enterStoryButton.addEventListener(
        "click",
        function () {
            homeScreen.classList.add("leaving");

            window.setTimeout(
                function () {
                    homeScreen.style.display = "none";

                    passwordScreen.classList.remove(
                        "screen-hidden"
                    );

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    if (passwordInput) {
                        passwordInput.focus();
                    }
                },
                650
            );
        }
    );
});
/* ==========================================
   BACK TO HOME
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const homeScreen =
        document.getElementById("homeScreen");

    const enterStoryButton =
        document.getElementById(
            "enterStoryButton"
        );

    const backHomeButton =
        document.getElementById(
            "backHomeButton"
        );

    if (
        !homeScreen ||
        !enterStoryButton ||
        !backHomeButton
    ) {
        return;
    }


    /*
     * Show the Home button after the visitor
     * leaves the homepage.
     */
    enterStoryButton.addEventListener(
        "click",
        function () {
            backHomeButton.classList.add("show");
        }
    );


    /*
     * Reloading resets every chapter, animation
     * and password screen to the homepage.
     */
    backHomeButton.addEventListener(
        "click",
        function () {
            window.scrollTo(0, 0);
            window.location.reload();
        }
    );
});
/* FINAL WORLD OF WISHES */

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openWishWorldButton");
    const giftScreen = document.getElementById("giftRevealScreen");
    const wishScreen = document.getElementById("wishWorldScreen");
    const globeButton = document.getElementById("wishGlobeButton");
    const wishCard = document.getElementById("wishCard");
    const wishType = document.getElementById("wishType");
    const wishText = document.getElementById("wishText");
    const wishCount = document.getElementById("wishCount");

    if (!openButton || !giftScreen || !wishScreen || !globeButton ||
        !wishCard || !wishType || !wishText || !wishCount) {
        return;
    }

    const wishes = [
        {
            type: "A little poem",
            text: "Chhoti si muskaan, dil mein noor,\nSuma, khushiyan rahein tumse kabhi na door. ✨"
        },
        {
            type: "A care note",
            text: "Busy din mein bhi paani peena, thoda aaram karna, aur apni smile ka khayal rakhna. 🌷"
        },
        {
            type: "Birthday wish",
            text: "Is naye saal mein tumhe naye sapne, pyare moments aur bahut saari khushiyan milen. 🎂"
        },
        {
            type: "Family blessings",
            text: "Mummy Papa ki duaaen aur apno ka pyaar har raaste par tumhare saath rahe. 🙏❤️"
        },
        {
            type: "A playful reminder",
            text: "Aaj calories count nahi hoti. Extra cake lena birthday girl! 😂🍰"
        },
        {
            type: "For brave days",
            text: "Jab koi din mushkil lage, yaad rakhna: tum usse zyada strong ho. Ek step at a time. 💛"
        },
        {
            type: "From this little world",
            text: "Duniya ke kisi bhi kone mein jao, tumhare liye ek pyari si dua hamesha rahegi. 🌍"
        },
        {
            type: "A quiet wish",
            text: "Tumhe woh sukoon mile jahan tum bina kisi fikr ke bas khud ho sako. 🌙"
        },
        {
            type: "Another little poem",
            text: "Har subah ek nayi kahani laaye,\nHar shaam tumhare chehre par muskaan sajaaye. 🌸"
        },
        {
            type: "Just for Suma",
            text: "Tumhari khushi dekh kar ye chhoti si birthday duniya poori lagti hai. Happy Birthday, Suma! ♡"
        }
    ];

    let unseen = [];
    let lastWish = -1;
    let shownCount = 0;

    openButton.addEventListener("click", function () {
        giftScreen.style.display = "none";
        wishScreen.classList.add("show");
        window.scrollTo(0, 0);

        window.setTimeout(function () {
            wishScreen.classList.add("ready");
            globeButton.disabled = false;
        }, 900);
    });

    globeButton.addEventListener("click", function () {
        if (unseen.length === 0) {
            unseen = wishes.map(function (_, index) {
                return index;
            });
            shownCount = 0;
        }

        let position = Math.floor(Math.random() * unseen.length);

        // Avoid repeating the previous wish at the start of a new round.
        if (unseen.length === wishes.length &&
            unseen[position] === lastWish) {
            position = (position + 1) % unseen.length;
        }

        const index = unseen.splice(position, 1)[0];
        const wish = wishes[index];
        lastWish = index;
        shownCount += 1;

        wishCard.classList.remove("show");
        void wishCard.offsetWidth;

        wishType.textContent = wish.type;
        wishText.textContent = wish.text;
        wishCount.textContent = shownCount + " of " + wishes.length + " wishes";
        wishCard.classList.add("show");
    });
});
