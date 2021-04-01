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

## Vak omschrijving
Browser technologies gaat over het maken van applicaties die toegankelijk zijn voor (zover mogelijk) iedereen op het web.

## Eindopdracht
Live versie: [https://sportscore-bt.herokuapp.com/](https://sportscore-bt.herokuapp.com/)

Admin(login met username: **admin**. Password: **admin**): [https://sportscore-bt.herokuapp.com/admin](https://sportscore-bt.herokuapp.com/admin)

### Use case
Ik heb gekozen voor de [Sportwedstrijd score website](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Usecase-score-website.md).

### Core functionaliteit  
Admins moeten wedstrijden kunnen aanmaken met scores of tijden. En gebruikers moeten deze kunnen zien en reacties op geven.

### Browsers testen
* Chrome (& op mobiel)
* Firefox (& op mobiel)
* Safara iOS op mobiel
* Microsoft Edge
* Android webview

### Features
* [x] Admin interface waar je een wedstrijd kunt aanmaken
* [x] Per wedstrijd moet de admin scores of tijden kunnen invullen
* [x] Gebruikers moeten deze wedstrijden te zien krijgen (overzichtsscherm)
* [x] Gebruikers moeten wedstrijden kunnen toevoegen aan een wishlist
* [x] Gebruikers kunnen hier een reactie op geven, die voor andere gebruikers (en de admin) te lezen is. De admin moet reacties kunnen weghalen.
* [ ] Gebruikers die een wedstrijd volgen, krijgen een notificatie als er nieuwe informatie binnenkomt. (Hoe doe je dit als de gebruiker meerdere wedstrijden volgt?)

## UX WIREFLOW
### Schetsen

### Lo-fi uitwerking
[Prototype](https://www.figma.com/proto/6ZRVGYly7jkgtJvAlye8fT/Sportwedstrijd-scores-Browser-Technologies?node-id=1%3A230&viewport=1032%2C318%2C0.7111635804176331&scaling=scale-down)  
User side wireflow  
![User side wireflow](https://user-images.githubusercontent.com/58043913/112284341-6ce09d80-8c89-11eb-9373-db10d3e14e88.png)  
Admin side wireflow  
![Admin side wireflow](https://user-images.githubusercontent.com/58043913/112284046-12dfd800-8c89-11eb-90a2-039d682df89f.png)

## Hierarchy of User Needs
Functional:
* core functie: wedstrijden toevoegen voor admin en zien als bezoekers

Reliable:
* met login systeem. Zodat alleen bevoegde mensen wedstrijden kunnen toevoegen.

Usable:
* content op logische manier neergezet. UX beter uitgewerkt.

Pleasurable:
* leuke extra'tjes zoals animaties en besturing

## Progressive enhancements
### Mobiel vriendelijk design
Ik heb de website enhanced op de usable laag door middel van het ontwerp aan te passen. Ik heb bijvoorbeeld de belangrijkste acties onderaan het scherm gezet, zo houd ik rekening met de _thumb zone_.  
<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e059ce1c-665f-4b0b-8d7e-571ffcc8d8d8/4-new-thumb-zone-mapping-bottom-navigation-pattern.jpg" alt="thumb zone" height="350">

### Opslaan/volgen wedstrijden
Als gebruiker kan je de de wedstrijden opslaan aan je "_my matches_" lijst. Deze wedstrijden worden opgeslagen in je **localStorage**, dus JavaScript & cookies moeten aanstaan.

### Converteren van tijd
Elke wedstrijd en elke reactie heeft een tijd gekoppeld. Deze tijds formats zijn niet altijd even duidelijk. Als enhancement format ik deze tijden naar leesbare tekst.

### Form validatie
#### HTML
Ik heb de standaard HTML form validatie toegepast door `required` te gebruiken.

#### CSS
Met CSS heb ik de `:valid` & `:invalid` selectoren gebruikt om zo aan te geven wanneer een field niet valide is.

#### JS
Met JavaScript check ik met de `change` event listener of een field valide is. Ook check ik dit wanneer een gebruiker op de submit-button klikt.

## Feature detection
### JS
Ik check met JavaScript of localStorage aanwezig is of niet met:
```js
if (window.localStorage) {
	console.log("Yes, exists!")
	localStorage.setItem("key" , "value")
}
```

## Testen
Aan het aanvullen...

### Chrome desktop - Windows 10
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113278335-1b1bc100-92e2-11eb-9dda-6a61f16d3dcc.png" alt="test" height="500">

### Chrome mobiel - Android
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113278586-646c1080-92e2-11eb-821e-b48c8ad97e37.jpg" alt="test" height="500">

### Firefox desktop - Windows 10
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113278706-85ccfc80-92e2-11eb-8bea-635e746648f6.png" alt="test" height="500">

### Firefox mobiel - Android
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113278868-b90f8b80-92e2-11eb-8013-4a84ba94cca2.jpg" alt="test" height="500">

### Safari mobiel - Iphone
Werkt naar toebehoren!  
Heb dit getest op de Iphone van een vriend. Helaas vergeten screenshots te maken... 

### Microsoft Edge - Windows 10
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113279085-fffd8100-92e2-11eb-8fee-ceb98177a8fe.png" alt="test" height="500">

### Android webview - Android
Werkt naar toebehoren!  
<img src="https://user-images.githubusercontent.com/58043913/113279243-2a4f3e80-92e3-11eb-8441-25681f592c1a.jpg" alt="test">

# Extra notities voor mezelf

## College Everything for the web
Je website moet altijd werken. Wat er ook fout kan gaan, het moet blijven werken.

Op het web weet je niet goed welke devices/systemen jouw website draaien, waardoor het goed is om progressive enhancement toe tevoegen en een robuuste kern hebt.

* Niet iedereen heeft een muis, smarthphones bijvoorbeeld niet. Let daar op bij css hovers `:hover` bijvoorbeeld.
* Netwerkverbindingen zijn niet altijd goed. Langzame netwerk data, of ergens waar slechter bereik is.
* Smarthphones lopen altijd wat achter dan computers qua technologische specificaties, hardware maar ook software.
* Niet alle schermen zijn gekalibreerd. Kleuren zijn bijvoorbeeld al anders.
* Schermen zijn natuurlijk niet even groot, daar moet je ook naar kijken. (Responsiveness)
* Progressive enhancement, je wilt je site optimaliseren voor zoveel mogelijk verschillende browsers/devices en rekening houden met zaken die ze niet ondersteunen. Hierbij ook nadenken over welke functies het meest belangrijk zijn, die moeten altijd te zien zijn/werken.

## Browser technologies/Enhancements
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

## License

[MIT](LICENSE)