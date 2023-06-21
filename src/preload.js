const { contextBridge, ipcRenderer } = require('electron');
const ipcEvents = [{
  name: 'handleBuildRelease',
  callback: (event, options) => {
    console.log('----release', options);
  }
}];//require('./ipcEvents.js');

const events = {};
ipcEvents.forEach(eventItem => {
  events[eventItem.name] = (options) => ipcRenderer.send(eventItem.name, options);
})

contextBridge.exposeInMainWorld('electronAPI', events)