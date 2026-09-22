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