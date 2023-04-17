
export function cursorAnimation() {
    var cursor = document.querySelector(".cursor"),
    cursorScale = document.querySelectorAll(".cursorEffect"),
    mouseX = 0,
    mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,

        onRepeat: function () {
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            }) /* fim set gsap */
            
        } /* fim onRepeat */

    }); /* fim gsap */

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    cursorScale.forEach(link => {
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
        link.addEventListener('mousemove', () => {
            cursor.classList.add('grow');
        });
    })
}; /* fim cursorAnimation */