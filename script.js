document.documentElement.classList.remove("dark");

const switchButton = document.getElementById('modo-switch');
const htmlElement = document.documentElement;

function updateSwitchState() {
    const hasDarkClass = htmlElement.classList.contains('dark');
    switchButton.setAttribute('aria-checked', hasDarkClass);
}

    updateSwitchState();

switchButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
            
    updateSwitchState();
});