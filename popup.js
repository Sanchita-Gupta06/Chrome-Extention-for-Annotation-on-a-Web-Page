document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('highlight-btn').addEventListener('click', () => {
    let color = document.getElementById('highlight-color').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { command: 'highlight', color: color });
    });
  });

  document.getElementById('add-note-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { command: 'add_note' });
    });
  });

  document.getElementById('search-input').addEventListener('input', (event) => {
    let searchText = event.target.value.toLowerCase();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { command: 'search_annotations', searchText: searchText });
    });
  });
});
