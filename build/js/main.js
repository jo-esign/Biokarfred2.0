const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle ('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)



function scrollHandler(element = null) {
    return {
        height: 0,
        element: element,
        calculateHeight(position) {
            const distanceFromTop = this.element.offsetTop
            const contentHeight = this.element.clientHeight
            const visibleContent = contentHeight - window.innerHeight
            const start = Math.max(0, position - distanceFromTop)
            const percent = (start / visibleContent) * 100;
            requestAnimationFrame(() => {
                this.height = percent;
            });
        },
        init() {
            this.element = this.element || document.body;
            this.calculateHeight(window.scrollY);
        }
    };
}


const dateTimeInput = document.getElementById("dateTimeInput");
const dateTimeError = document.getElementById("dateTimeError");

dateTimeInput.addEventListener("change", function () {
    const selectedDateTime = new Date(this.value);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
        dateTimeError.textContent = "Please select a future date and time";
        dateTimeInput.value = ""; // Clear the input
    } else {
        dateTimeError.textContent = "";
    }
});




    const imageElement = document.getElementById("image-element");

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Dark mode
        imageElement.classList.remove("theme-light");
        imageElement.classList.add("theme-dark");
        imageElement.src = "footer-logo1.jpg";
    } else {
        // Light mode
        imageElement.classList.remove("theme-dark");
        imageElement.classList.add("theme-light");
        imageElement.src = "footer-logo.jpg";
    }


