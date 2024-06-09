// Function to highlight selected text
function highlightText(color) {
  let selection = window.getSelection();
  if (!selection.rangeCount) return;
  let range = selection.getRangeAt(0);
  let span = document.createElement('span');
  span.style.backgroundColor = color;
  span.className = 'highlighted-text';
  range.surroundContents(span);
  saveAnnotations();
}

// Function to add a note to the selected text
function addNote() {
  let selection = window.getSelection();
  if (!selection.rangeCount) return;
  let range = selection.getRangeAt(0);
  let span = document.createElement('span');
  span.className = 'highlighted-text note';
  range.surroundContents(span);
  let note = prompt('Enter your note:');
  if (note) {
    span.setAttribute('data-note', note);
  }
  saveAnnotations();
}

// Function to save annotations to local storage
function saveAnnotations() {
  let annotations = [];
  document.querySelectorAll('.highlighted-text').forEach((element) => {
    annotations.push({
      text: element.innerText,
      color: element.style.backgroundColor,
      note: element.getAttribute('data-note') || ''
    });
  });
  chrome.storage.local.set({ annotations: annotations });
}

// Function to restore annotations from local storage
function restoreAnnotations() {
  chrome.storage.local.get('annotations', (result) => {
    if (result.annotations) {
      result.annotations.forEach((annotation) => {
        let span = document.createElement('span');
        span.className = 'highlighted-text';
        span.style.backgroundColor = annotation.color;
        span.innerText = annotation.text;
        if (annotation.note) {
          span.setAttribute('data-note', annotation.note);
        }
        document.body.innerHTML = document.body.innerHTML.replace(annotation.text, span.outerHTML);
      });
    }
  });
}

// Function to search annotations
function searchAnnotations(searchText) {
  document.querySelectorAll('.highlighted-text').forEach((element) => {
    if (element.innerText.toLowerCase().includes(searchText)) {
      element.style.border = '2px solid red';
    } else {
      element.style.border = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({ message: 'Content script loaded' }, function(response) {
    console.log('Received response from background script:', response);
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'highlight') {
      highlightText(request.color);
    } else if (request.command === 'add_note') {
      addNote();
    } else if (request.command === 'search_annotations') {
      searchAnnotations(request.searchText);
    }
    sendResponse({ status: 'done' });
  });

  restoreAnnotations();
});
