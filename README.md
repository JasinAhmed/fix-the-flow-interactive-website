> Ontwerp en maak een interactieve website voor een opdrachtgever. De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Buurtcampuskrant
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Digitale versie van de Buurtcampuskrant

## User story
Als gebruiker wil ik dat het hoofdmenu overzichtelijk wordt gepresenteerd, zodat ik eenvoudig kan navigeren.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Klik [hier](https://jasinahmed.github.io/fix-the-flow-interactive-website/) om de website zelf te bekijken!

<img width="1800" height="760" alt="3-devices-black" src="https://github.com/user-attachments/assets/16e29e92-8d50-42b1-b280-8062975ce754" />

De Buurtcampuskrant is een door HvA-studenten gemaakte website wat de inhoud van de fysieke Buurtcampuskrant mooi op een website weergeeft.Deze sprint heb ik gewerkt aan de navigatie van de website door het ontwerpen en implementeren van een hamburger menu, waarmee gebruikers eenvoudig door de pagina’s kunnen navigeren.

<img width="563" height="445" alt="image" src="https://github.com/user-attachments/assets/d4467eed-ee4f-4558-b8c7-c2165b8eebfa" />


Wanneer je op het hamburger menu klikt, kom je terecht bij de menu’s van Zuidoost, Oost en Nieuw-West.


Met het hamburger menu heb ik goed rekening gehouden met feedback en feedforward. De feedback is zichtbaar wanneer je op het hamburger menu klikt en het menu opent of sluit. De feedforward is terug te zien aan het hamburger-icoon zelf, dat duidelijk maakt dat je hier kunt klikken om te navigeren.


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De voorpagina is opgebouwd uit een header, main en footer. In de header bevindt zich het hamburger menu waarmee je kunt navigeren naar Zuidoost, Oost en Nieuw-West. In de main wordt de inhoud van de pagina weergegeven en in de footer staan aanvullende onderdelen.

De interactie met het hamburger menu: in HTML staat de navigatie standaard verborgen. Met JavaScript wordt het menu zichtbaar of onzichtbaar gemaakt door het toevoegen en verwijderen van CSS-classes wanneer de gebruiker op het hamburger menu klikt:
```
// 3. ACTIE: CSS CLASSES TOGGLEN
navList.classList.toggle("open");
hamburger.classList.toggle("open");
document.body.classList.toggle("menu-open");
```

De interactie met de wolkjees in de header: in CSS heb ik twee classes aangemaakt voor de animatie per wolk:
```
.wolk {
  position: absolute;
  will-change: transform;
}

/* Bewegen bij hover */
.header-main:hover .wolk-1 {
  animation: wolkDoor 6s linear infinite;
}

.header-main:hover .wolk-2 {
  animation: wolkDoor 9s linear infinite;
}

/* Van links naar rechts door het beeld */
@keyframes wolkDoor {
  from {
    transform: translateX(-150px);
  }
  to {
    transform: translateX(110vw);
  }
}
```

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
