import St from 'gi://St';
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import { getPositionStyle } from '../utils.js';

export class CloseButton {
    constructor(overlay, primaryMonitor, toggleOverlay) {
        this._overlay = overlay;
        this._primaryMonitor = primaryMonitor;
        this._toggleOverlay = toggleOverlay;
        this._closeButton = null;
        this._addonContainer = null;
        this._widthChangeId = null;
        this._heightChangeId = null;
        this._createCloseButton();
    }

    /**
     * Creates the close button widget and adds it to the overlay.
     * The close button is positioned on the right side of the overlay.
     * Clicking the button will hide the overlay.
     */
    _createCloseButton() {
        this._addonContainer = new St.Widget({
            layout_manager: new Clutter.BinLayout()
          });

        // Create the close button widget
        this._closeButton = new St.Button({
            style_class: 'gamebar-close-button', // CSS class for styling
            child: new St.Icon({ icon_name: 'window-close-symbolic' }) // Icon for the close button
        });
