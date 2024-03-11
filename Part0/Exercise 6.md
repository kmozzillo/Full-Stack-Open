### Mermaid Diagram - User Adds a Note to https://studies.cs.helsinki.fi/exampleapp/spa

```
sequenceDiagram
  participant browser
  partcipant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server->>browser: 201 Created. new_note_spa (Listens for event handler(form), creates a new note, and adds it to the notes list on the page.
server->>data.json: Appends new note to JSON
deactivate server
```
