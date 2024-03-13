# Intro til React - Bildedelingsapplikasjon

Dette prosjektet er en modifisert/recreation versjon ut av ett projekt en ut av lærerene mine har laget det orginale projektet ligger i backend men har blitt forandret til å funke med react. dette projektet er laget med react nano og sqlite3 som database.

## hvordan starte appen

for å starte appen må du ha to terminaler oppe en for backend og en for frontend. etter dette kjører du først node app.js i backend så kjører du npm start i frontend. då vil appen være oppe på http://localhost:5173/app. logg in med brukernavn: test passord: 123.

## hvordan sette opp appen

usikker på om å kjøre det som står under er nødvendig. gjør det som står under hvis det ikke funker å starte appen.

for å sette opp appen kopier koden fra app.jsx og index.jsx. når du har kopiert koden kjør følgende i terminalen:
 npx nano-react-app frontend,
 npm install
etter dette erstatt den nye koden i app.jsx og index.jsx med den du kopierte.

hvis appen ikke funker prøv å kjør dette i terminalen:
 npm install react-router-dom

## Informasjon om det orginale prosjektet

i backend ligger det orginale projektet, dette projektet ble laget uten react og med sqlite3 som database. det orginale projektet er satt opp sån at brukeren med id 1 er administrator. Denne brukaren har brukernamn *Administrator* og passord *123*. men det orginale projektet har blitt forandret til å funke som en backend til det nye react projektet.

Følgende ruter og endepunkt er satt opp. Disse er fordelt i filene ruter.js og api.js

```javascript
app.post("/login", ruter.login);
app.get("/admin", sjekkAdmin, ruter.admin)
app.get("/login", ruter.loginaction)
app.get("/loggut", ruter.loggut)
app.get("/nyttBilde", sjekkLogin, ruter.nyttBilde)
app.get("/alleBilder", sjekkLogin, ruter.alleBilder)


app.post("/kommenter", sjekkLogin, api.kommenter)
app.post("/registrer", api.registrer);
app.post("/lastOpp", sjekkLogin, api.lastopp);
app.get("/bilder", sjekkLogin, api.bilder)
app.get("/brukere", sjekkAdmin, api.brukere);
app.post("/oppdatere", sjekkAdmin, api.oppdatere)
app.get("/slett/:id", sjekkAdmin, api.slett)
app.get("/kommentarer/:id", sjekkLogin, api.kommentarer)
app.post("/like/:id", sjekkLogin, api.like)
app.get("/likes/:id", sjekkLogin, api.likes)
app.get("/liked/:id", sjekkLogin, api.liked)
```
