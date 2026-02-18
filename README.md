# Squad Page

## Beschrijving
Op de homepage kun je een overzicht bekijken van alle mensen uit alle squads van FDND Jaar 1. Je kunt door de kaartjes van mensen heen scrollen. Je kunt ook de volgorde van de kaartjes aanpassen door te sorteren op alfabetische volgorde of juist andersom. Ook kun je sorteren op geboortedatum en op hoeveelheid likes.
Daarnaast kun je gericht zoeken door te filteren op rol of squad. Wil je helemaal gericht zoeken, dan kun je ook de naam van de persoon die je zoekt intypen.
Als je meer informatie wilt over een persoon, kun je klikken op See More. Dit brengt je naar de detailpagina van de desbetreffende persoon. Links bovenin kun je op Terug klikken om weer terug te gaan naar de homepage.
Onderaan de homepage vind je ook een link naar het Berichtenbord. Hier kun je berichten lezen die mensen hebben achtergelaten, maar je kunt er ook zelf een bericht achterlaten.

Thomas:
Mohamed:
Roxy:

## Kenmerken
### gebruikte technieken
Node.js is een programma waarmee we javassciprt op de server kunnen draaien 
express kun je routes mee regelen zo kun je bepalen wat er gebeurd als een gebruiker een bepaalde url beozekt
liquid zet de data uit de api om naar html zodat de browser het kan lezen 

| Stap | Omschrijving | Code Link |
|------|-------------|-----------|
| **Server aanmaken** |  | [server.js L8](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L8) |
| **Data uit de API ophalen** | Data ophalen, omzetten naar JSON en opslaan | [server.js L10-L20](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L10-L20) |
| **Statische files instellen** | Alles in deze map kan de browser meteen bekijken. Hierin staat onze `style.css` en assets zoals afbeeldingen | [server.js L22](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L22) |
| **Liquid instellen** | HTML met data uit de server/API. | [server.js L24-L27](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L24-L27) |
| **Route voor de homepage** | Wanneer iemand de homepage bezoekt. Op onze homepage kun je sorteren, filteren en zoeken | [server.js L31](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L31) |
| **Personen ophalen** |  | [server.js L53-L55](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L53-L55) |
| **Renderen** | De data wordt gegeven aan de `index.liquid` | [server.js L56-L63](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L56-L63) |
| **Route voor personen detailpagina** | Haalt de juiste persoon data op, zet het om in JSON en rendert de `student.liquid` | [server.js L104-L118](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L104-L118) |
| **Route voor berichtenpagina** | Haalt berichten op en zet ze in de `message.liquid` | [server.js L104-L118](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L104-L118) |
| **Post berichten** | Stuurt berichten naar Directus | [server.js L136-L152](https://github.com/roxyfokker/team-bliss-squad-page/blob/e1b05479d0c0a24440d3f0117ce988925e47e09c/server.js#L136-L152) |

## installatie

1. Ga naar [Node.js](https://nodejs.org/) en installeer **Node.js 24.13.0 LTS (Long Term Support)**.
2. Fork de repository en open het project in **VScodium**.
3. Open de terminal in VScodium en voer het volgende commando uit: `npm install`
4. Start het project met: `npm start` hij start nu op http://localhost:8000 
5. Als je klaar bent druk je in de terminal op control + c om de controle weer terug te krijgen


## Team Bliss
team Bliss bestaat uit ⁠Thomas Seisveld, ⁠Mohamed El Ibrahymy en Roxy Fokker
