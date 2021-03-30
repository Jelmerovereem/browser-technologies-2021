# SportScores (Browser Technologies @cmda-minor-web 20-21)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->


## College Everything for the web
Je website moet altijd werken. Wat er ook fout kan gaan, het moet blijven werken.

Op het web weet je niet goed welke devices/systemen jouw website draaien, waardoor het goed is om progressive enhancement toe tevoegen en een robuuste kern hebt.

* Niet iedereen heeft een muis, smarthphones bijvoorbeeld niet. Let daar op bij css hovers `:hover` bijvoorbeeld.
* Netwerkverbindingen zijn niet altijd goed. Langzame netwerk data, of ergens waar slechter bereik is.
* Smarthphones lopen altijd wat achter dan computers qua technologische specificaties, hardware maar ook software.
* Niet alle schermen zijn gekalibreerd. Kleuren zijn bijvoorbeeld al anders.
* Schermen zijn natuurlijk niet even groot, daar moet je ook naar kijken. (Responsiveness)
* Progressive enhancement, je wilt je site optimaliseren voor zoveel mogelijk verschillende browsers/devices en rekening houden met zaken die ze niet ondersteunen. Hierbij ook nadenken over welke functies het meest belangrijk zijn, die moeten altijd te zien zijn/werken.


## Eindopdracht
Live versie: [https://sportscore-bt.herokuapp.com/](https://sportscore-bt.herokuapp.com/)

### Use case
Ik heb gekozen voor de [Sportwedstrijd score website](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Usecase-score-website.md).

**Core functionaliteit**  
Admins moeten wedstrijden kunnen aanmaken met scores of tijden. En gebruikers moeten deze kunnen zien en reacties op geven.

* Admin interface waar je een wedstrijd kunt aanmaken
* Per wedstrijd moet de admin scores of tijden kunnen invullen
* Gebruikers moeten zich kunnen aanmelden voor bepaalde wedstrijden (overzichtsscherm)
* Gebruikers die een wedstrijd volgen, krijgen een notificatie als er nieuwe informatie binnenkomt. (Hoe doe je dit als de gebruiker meerdere wedstrijden volgt?)
   * _Moet het echt een **push notificatie** zijn? Firebase?_
* Gebruikers kunnen hier een reactie op geven, die voor andere gebruikers (en de admin) te lezen is. De admin moet reacties kunnen weghalen.

**UX WIREFLOW**  
[Prototype](https://www.figma.com/proto/6ZRVGYly7jkgtJvAlye8fT/Sportwedstrijd-scores-Browser-Technologies?node-id=1%3A230&viewport=1032%2C318%2C0.7111635804176331&scaling=scale-down)  
User side wireflow  
![User side wireflow](https://user-images.githubusercontent.com/58043913/112284341-6ce09d80-8c89-11eb-9373-db10d3e14e88.png)  
Admin side wireflow  
![Admin side wireflow](https://user-images.githubusercontent.com/58043913/112284046-12dfd800-8c89-11eb-90a2-039d682df89f.png)

**Browser technologies/Enhancements**  
* [Fetch browser API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) voor profile images?
* Censuur? Spam reacties onderscheppen
* Realtime reacties ontvangen. Websockets of [Server side events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
* Realtime wedstrijd data
* [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API). Service workers for [notifications](https://notifications.spec.whatwg.org/)
* [IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/) for maybe backup user data?
* Cache voor snelle website speed en niet hoeven te fectchen elke keer, of gaat dit sws via de server?
* [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) for pleasurable layer
* LocalStorage en/of sessions voor dingen zoals wishlist?

**Hierarchy of User Needs**  
Functional:
* core functie; wedstrijd toevoegen en zien als bezoekers

Reliable:
* met login systeempje

Usable:
* content op logische manier neergezet

Pleasurable:
* leuke extra'tjes zoals animaties en besturing

**Browsers waar ik op ga testen**  
* Chrome (& op mobiel)
* Firefox (& op mobiel)
* Microsoft Edge
* Android webview