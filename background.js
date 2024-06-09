chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message from content script:', message);
  if (message.command === 'highlight') {
    
  } else if (message.command === 'add_note') {
    
  } 
  sendResponse({ response: 'Message received' });
});

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tab = tabs[0];
    if (command === 'highlight') {
      chrome.tabs.sendMessage(tab.id, { command: 'highlight', color: '#FFFF00' });
    } else if (command === 'add_note') {
      chrome.tabs.sendMessage(tab.id, { command: 'add_note' });
    } 
  });
});
