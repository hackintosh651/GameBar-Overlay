import St from 'gi://St';
import GLib from 'gi://GLib';
import Clutter from 'gi://Clutter';
import { getPositionStyle } from '../utils.js';

export class Clock {
  constructor(overlay, primaryMonitor) {
    this._overlay = overlay;
    this._primaryMonitor = primaryMonitor;
    this._widthChangeId = null;
    this._heightChangeId = null;
    this._timeLabel = null;
    this._timeoutId = null;
    this._addonContainer = null;
    this._visibilityChangedId = null;
    this._createClockWidget();
  }
        this._unlockmButton = new St.Button({
            style_class: 'gamebar-close-button', // CSS class for styling
            child: new St.Icon({ icon_name: 'window-close-symbolic' }) // Icon for the close button
        });

        // Hide the overlay when the close button is clicked
        this._unlockm.connect('clicked', () => {
            this._exitPointerLock();
