// A-Frame component to handle tap events on the 3D model
AFRAME.registerComponent('tap-handler', {
    init: function () {
        const el = this.el; // The <a-gltf-model> element

        // Get the popup UI elements from the HTML
        // CORRECTED: Ensured all IDs match the HTML file
        const infoPopup = document.getElementById('infoPopup');
        const templeName = document.getElementById('templeName');
        const templeDescription = document.getElementById('templeDescription');
        const closeButton = document.getElementById('closeButton');

        // Check if elements were found (for debugging)
        if (!infoPopup) {
            console.error("Popup container with ID 'infoPopup' not found!");
            return;
        }

        // Get the info attribute string from the model
        const info = el.getAttribute('info');

        // Add event listener for 'click' (which works for taps on mobile)
        el.addEventListener('click', event => {
            console.log("Model tapped!"); // For debugging

            // Populate the popup with the model's info
            templeName.textContent = info.name;
            templeDescription.textContent = info.desc;
            
            // Show the popup
            infoPopup.style.display = 'block';
        });

        // Add event listener for the close button
        closeButton.addEventListener('click', () => {
            infoPopup.style.display = 'none';
        });
    }
});