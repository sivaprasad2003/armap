// script.js

// Ensure the A-Frame component is registered correctly.
// The name 'tap-handler' here MUST match the attribute on your <a-gltf-model> in HTML.
AFRAME.registerComponent('tap-handler', {
    init: function () {
        // 'el' refers to the <a-gltf-model> this component is attached to.
        const el = this.el;

        // Get the popup elements from the HTML.
        // These IDs MUST match the IDs in your HTML file exactly.
        const infoPopup = document.getElementById('infoPopup');
        const templeName = document.getElementById('templeName');
        const templeDescription = document.getElementById('templeDescription');
        const closeButton = document.getElementById('closeButton');

        // Check if the popup elements were found. If not, you'll see an error in the console.
        if (!infoPopup || !templeName || !templeDescription || !closeButton) {
            console.error("Error: One or more popup UI elements were not found. Check the IDs in your HTML.");
            return;
        }

        // Get the description text from the 'info' attribute on the model.
        const info = el.getAttribute('info');

        // Listen for a 'click' event (which works for taps on mobile).
        el.addEventListener('click', event => {
            // This message should appear in the console when you tap the model.
            console.log("Model tapped! Showing info.");

            // Populate the popup with the text from the 'info' attribute.
            templeName.textContent = info.name;
            templeDescription.textContent = info.desc;
            
            // Make the popup visible.
            infoPopup.style.display = 'block';
        });

        // Listen for clicks on the close button to hide the popup.
        closeButton.addEventListener('click', () => {
            console.log("Close button clicked.");
            infoPopup.style.display = 'none';
        });
    }
});