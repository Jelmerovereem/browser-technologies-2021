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

### Use case
Ik heb gekozen voor de [Sportwedstrijd score website](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Usecase-score-website.md).

* Admin interface waar je een wedstrijd kunt aanmaken
* Per wedstrijd moet de admin scores of tijden kunnen invullen
* Gebruikers moeten zich kunnen aanmelden voor bepaalde wedstrijden (overzichtsscherm)
* Gebruikers die een wedstrijd volgen, krijgen een notificatie als er nieuwe informatie binnenkomt. (Hoe doe je dit als de gebruiker meerdere wedstrijden volgt?)
   * _Moet het echt een **push notificatie** zijn? Firebase?_
* Gebruikers kunnen hier een reactie op geven, die voor andere gebruikers (en de admin) te lezen is. De admin moet reacties kunnen weghalen.

**Browser technologies**  
* [Fetch browser API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) voor profile images?
* Censuur? Spam reacties onderscheppen
* Realtime reacties ontvangen
* Realtime wedstrijd data
* [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API). Service workers for [notifications](https://notifications.spec.whatwg.org/)
* [IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/) for maybe backup user data?
* Cache voor snelle website speed en niet hoeven te fectchen elke keer, of gaat dit sws via de server?
* [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) for pleasurable layer
* LocalStorage en/of sessions voor dingen zoals wishlist?