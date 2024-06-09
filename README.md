# Chrome-Extention-for-Annotation-on-a-Web-Page
<pre>
This Chrome extension allows users to highlight text, add notes, search and filter annotations, and export annotations as a PDF. 

Features:

1. Highlight Text: On a webpage, users have the option to choose a color and highlight text.

2. Add Notes: Visitors have the option to annotate particular webpage sections.

3. Search and Filter: Annotation search and filtering are available to users.

Project Structure:

1. manifest.json: The configuration file for the Chrome extension.

2. popup.html: The HTML file for the extension's popup.

3. popup.js: The JavaScript file for handling interactions in the popup.

4.background.js: The background script for the extension.

5. content.js: The content script injected into web pages.

6. styles.css: The CSS file for styling the popup.

Installation:


1.Download or clone this repository to your local machine.

2.Open Chrome and navigate to chrome://extensions/.

3.Enable "Developer mode" by toggling the switch in the top right corner.

4.Click "Load unpacked" and select the directory where you downloaded/cloned this repository.

Usage:

1. Click on the extension icon in the Chrome toolbar to open the popup.

2.Use the color picker to select a highlight color.

3.Click the "Highlight" button to highlight selected text.

4.Click the "Add Note" button to add a note to the selected text.

5.Use the search bar to filter annotations.

Files and Their Roles:

manifest.json:
This file contains metadata about the extension, such as its name, version, description, and permissions. It also defines the background scripts, content scripts, and popup HTML.

popup.html:
This is the HTML file for the extension's popup. It contains the UI elements for the extension, such as buttons, input fields, and labels.

popup.js:
This script handles interactions in the popup. It sets up event listeners for the buttons and input fields and communicates with the content script to perform actions like highlighting text, adding notes, searching annotations, and exporting annotations as a PDF.

background.js:
The background script listens for commands and messages from the popup and content scripts. It forwards commands to the active tab and handles global actions that are not specific to a single webpage.

content.js:
The content script is injected into web pages. It handles the actual highlighting of text, adding of notes, searching of annotations, and exporting of annotations as a PDF. It communicates with the popup and background scripts to perform these actions.

styles.css:
This file contains styles for the popup HTML. It ensures the popup is responsive and looks good on different screen sizes.
</pre>
<hr>
