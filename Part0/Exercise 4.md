### Mermaid Diagram - Creating a new note on https://studies.cs.helsinki.fi/exampleapp/notes

```
sequenceDiagram
  participant browser
  participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
server->>browser: 302 Found redirect
server->>data.json: Creates note object and appends it to notes ({content: 'hello', date: '2024-03-11T09:30:22.369Z'})
deactivate server:

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.css
activate server
server->>browser: CSS File
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.js
activate server
server->>browser: JavaScript File
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/data.json
activate server
server->>browser: JSON File of the data 
deactivate server









```
