### Mermaid Diagram - User Goes to https://studies.cs.helsinki.fi/exampleapp/spa

```
sequenceDiagram
  participant browser
  participant server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server->>browser: 200 OK. HTML Document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server->>browser: 200 OK. Main CSS File
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
server->>browser: 200 OK. JavaScript File
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server->>browser: 200 OK. JSON File
deactivate server

```
