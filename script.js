// Registering an A-Frame component to handle taps
AFRAME.registerComponent('tap-handler', {
    init: function () {
        const el = this.el; // The <a-gltf-model> element
        const infoPopup = document.getElementById('infoPopup');
        const templeName = document.getElementById('templeName');
        const templeDescription = document.getElementById('templeDescription');
        const closeButton = document.getElementById('closeButton');

        // Get info from the 'info' attribute on the HTML element
        const info = el.getAttribute('info');

        el.addEventListener('click', event => {
            // Populate the popup with data
            templeName.textContent = info.name;
            templeDescription.textContent = info.desc;
            
            // Show the popup
            infoPopup.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            infoPopup.style.display = 'none';
        });
    }
});