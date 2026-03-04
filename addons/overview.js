 // Create the close button widget
        this._unlockmButton = new St.Button({
            style_class: 'gamebar-close-button', // CSS class for styling
            child: new St.Icon({ icon_name: 'window-close-symbolic' }) // Icon for the close button
        });

        // Hide the overlay when the close button is clicked
        this._unlockm.connect('clicked', () => {
            this._exitPointerLock();
