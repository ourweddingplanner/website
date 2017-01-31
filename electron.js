import {BrowserWindow, app} from 'electron';

import path from 'path';
import url from 'url';

let mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/public/index.html');
});