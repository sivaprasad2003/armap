// script.js

AFRAME.registerComponent('tap-handler', {
    init: function () {
        const el = this.el;
        const infoPopup = document.getElementById('infoPopup');
        const templeName = document.getElementById('templeName');
        const templeDescription = document.getElementById('templeDescription');
        const closeButton = document.getElementById('closeButton');

        if (!infoPopup) {
            console.error("Popup container with ID 'infoPopup' not found!");
            return;
        }

        el.addEventListener('click', event => {
            // --- THIS IS THE CORRECTED PART ---

            // 1. Get the raw info string from the HTML attribute
            const infoString = el.getAttribute('info'); // e.g., "name: ...; desc: ..."

            // 2. Parse the string into a usable object
            const info = {};
            infoString.split(';').forEach(part => {
                const [key, ...value] = part.split(':');
                if (key && value) {
                    info[key.trim()] = value.join(':').trim();
                }
            });

            // 3. Now, correctly set the text from the parsed object
            templeName.textContent = info.name;
            templeDescription.textContent = info.desc;
            
            infoPopup.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            infoPopup.style.display = 'none';
        });
    }
});