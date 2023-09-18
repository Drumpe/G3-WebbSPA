

# Dokumentation WebbG3


# Sammanfattning

Vi fick som uppgift att göra en fungerande hemsida där det skulle visas nyhetsartiklar. Vi fick fria händer hur hemsidan skulle se ut och ser till att de flesta funktioner fungerade.

Gruppen diskuterade mål, hur hemsidan skulle se ut och vilka verktyg som skulle användas. Vissa hade mer erfarenhet/kunskap om hur saker och ting skulle göras. Vi hjälptes åt med allt och utvecklades som en grupp.

Vi har lärt oss mycket om Github, hantera databaser, API, React, AWS, Javascript, Bootstrap och mycket mer.

I början av kursen gjorde vi en hemsida med html och css-funktioner lokalt. I slutet av kursen hade vi lärt oss att få en nästan fungerande webbplats med API, React och AWS databas.

Vi ville få upp vårt projekt till en server men vi hade inte tillräckligt med tid att gå igenom det.

På Jira delade vi upp uppgifter, vilket kan ses i länken nedan.

  
[https://olapersson.atlassian.net/jira/software/projects/SRG3/boards/1](https://www.google.com/url?q=https://olapersson.atlassian.net/jira/software/projects/SRG3/boards/1&sa=D&source=editors&ust=1695044240330507&usg=AOvVaw2vDUcBM5yfbhw8Pz7RVfJu)

# Installation

### Npm-paket:

*npm i bootstrap@5.3.1* (inte säker på att det behövs)

*npm i react-canvas-confetti* (För supportUs confetti)

### Tools:

*SQLite/SQL Server Compact toolbox* (för kontroll av sqlite databasen)

### NuGets:

>*Microsoft.AspNetCore.ApiAuthorization.IdentityServer*
>
>*Microsoft.EntityFrameworkCore.Sqlite*
>
>*Microsoft.EntityFrameworkCore.SqlServer*
>
>*Microsoft.EntityFrameworkCore.Tools*
>
>*MySqlConnector*
>
>*MySql.Data*

# Databasen

### Vilka tabeller

News innehåller alla artiklarna med fälten id, titel, summary, link, published och topic. Topic fås som en lista av topics.

I support sparas namn, mailadress och kommentarer från SupportUs-knappen.

I tabellen newsletter sparas mailadresserna från SignUp-knappen.

### Kommandon som har använts för att underhålla databaserna

Skapande av databas:

CREATE DATABASE newsextractdb;

Skapande av tables:

    CREATE TABLE `news` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255),
    `summary` TEXT,
    `link` VARCHAR(255),
    `published` DATETIME,
    `topic` TEXT
    );

    CREATE TABLE `support` (
    `support_id` int NOT NULL AUTO_INCREMENT,
    `support_name` varchar(45) NOT NULL,
    `support_email` varchar(60) NOT NULL,
    `support_comment` varchar(240) NOT NULL,
    PRIMARY KEY (`support_id`)
    );

    CREATE TABLE `newsletter` (
    `NewsLetter_id` int NOT NULL AUTO_INCREMENT,
    `NewsLetter_email` varchar(80) NOT NULL,
    PRIMARY KEY (`NewsLetter_id`)
    );

Ta bort artiklar som inte har en titel, summary eller topic:

    DELETE n1
    FROM news n1
    WHERE n1.summary = ""
    OR n1.title = ""
    OR n1.topic = "";

Tar bort duplicerade artiklar:

    DELETE n1
    FROM news n1
    JOIN news n2
    ON n1.title = n2.title AND n1.link = n2.link
    WHERE n1.id < n2.id;

# API Servern (webapi)

## HomeControllern

Controllern har 3 funktioner: returnera en lista med artiklar, spara email från SignUp och spara informationen från SupportUs.

### Index

Index som är en HttpGet-funktion som returnerar en lista med artiklar utifrån given indata. Detta API nås på /home. Parametrarna som kan anges är:

-   topic, val av ämne. Defaultvärde: tom sträng.
-   sortBy, sorterar artiklarna efter publiceringsdatum. Defaultvärde: newest.
-   limit, antal artiklar som skall returneras. Defaultvärde: 50.
-   start, från vilken artikel ska listan börja. Defaultvärde: 0.
-   searchFor, om sträng inte är tom kommer urvalet av artiklar som returneras bestå av artiklar som innehåller angiven sträng i titeln eller summary eller båda. Defaultvärde: tom sträng.

Parametrarna skickas enligt följande mönster:

`/home?topic=idrott&sortBy=oldest&searchFor=zlatan` - Detta kommer att resultera i en lista där titel eller summary innehåller strängen zlatan och topic är idrott, den äldsta artikeln kommer först.

`/home?limit=25&start=26` - Detta kommer att resultera i en lista med artiklarna 26-51 från databasen.


### SubmitEmail

Denna HTTPPost-funktion lagrar en mailadress i databastabellen newsletter. Denna funktion nås enligt följande mall: `/home/SubmitEmail?email=kalle@mail.se`, glöm inte att det måste vara en POST. Email får inte vara en tom sträng och måste innehålla ‘@’.

### SubmitSupport

Denna HTTPPost-funktion lagrar namn, mailadress och text i databastabellen support. Denna funktion nås enligt följande mall: `/home/SubmitSupport?name=Kalle&email=kalle@mail.se&supporttext=Lore ipsum`, glöm inte att det måste vara en POST. Ingen parameter får lämnas tom och email måste innehålla ‘@’.

## AuthenticateController

# Frontend (reactapp)

## Navbar

Fyller sina funktioner med att klicka på artiklar och filtrera dem. Drop down var svårast att få till

## Login

Loggar in med registrerade användare från databasen.

## Search

Söker efter artiklar med angiven sträng.

## Theme

Här kan man välja om man vill ha dark eller light mode.

## Väder

Vi har skapat en komponent för att visa väderinformation på vår hemsida. För att göra detta möjligt har vi använt oss av OpenWeatherMap api där vi hämtar väder genom geolocation eller en användares inmatning av en stad eller plats.  
För att göra detta möjligt använder vi oss av state som gör det möjligt att uppdatera och hantera sin egen data och värden.

-   Vi använder oss av en “UseEffect” som kallar på getLocation-funktionen som hämtar in vädret baserat på geolocation.
-   GetLocation-funktionen hämtar användarens koordinater och skickar sedan vidare dem till fetchWeatherData.
-   fetchWeatherData läser av om den får in koordinater eller om den får in ett input av användaren och sedan gör den ett anrop till api:et som sedan skickar tillbaka all nödvändig väderinformation.  
    Beroende på vilken information som kommer tillbaka så uppdateras våra states som sedan visar den nya väderinformationen.

-   Väljer användaren att skriva in en stad i sökrutan så hanterar vi användarens input i handleSearchInput och skickar sedan vidare det till föregående funktion som istället för att göra ett anrop på koordinater till api:et så gör den ett anrop på vad användaren har matat in i sökfältet.

## Artiklar

Visar efterfrågade artiklar i kort. I korten finns titel, summary, publiceringsdatum och vilka topic artikeln är försedd med. Vid klick på korten öppnas en ny flik och artikeln visas på den ursprungliga sajten. Summary är rensad från img-taggar, `<p>` och `</p>`.

## Nya äldre

En select där artiklarna sorteras efter publiceringsdatum.

## Höger kolumnen

Vi har delat upp mainPage i tre olika kolumner som ni ser nedan. Vänster är för väder, mitten är artiklarna och höger är RightColumn. Vi gör en import från nedanstående importer.  
Det är en placeholder som gör att vi kan sätta in reklam osv.

  
    import Weather from './Weather/Weather';
    import Articles from './Articles/Articles';
    import RightColumn from './RightColumn';

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 mt-5">
          <Weather />
        </div>
        <div className="col-sm-6 mt-5">
          <Articles />
        </div>
        <div className="col-sm-3 mt-5">
          <RightColumn />
        </div>
      </div>
    </div>

## Footer

## Sign up

## Support Us

SupportUs är en del av projektet som är en React-baserad webbapplikation som gör att användaren kan skicka sitt stöd och skriva meddelanden. SupportUs innehåller två huvudkomponenter “SupportUs” och SupportPopUp”, både komponenter har funktioner som gör att applikationen ska fungerar.

-   SupportUs är den delen som tar hand om knappen “Support Us “ och som öppnar popup-fönstret på sidan och där kan användare skriva och skicka meddelanden. Viktiga funktioner som används här:

1.  “useState” den används för att ta reda på om popup-fönstret är öppet eller inte.
2.  “openPopup” och closePopup” dessa används för att öppna och stänga popup-fönstret.
3.  “handleSupportSubmit” den används för att skicka meddelandet och stänga popup-fönstret.

-   SupportPopUp  är den delen som innehåller funktioner, knappar och fält som användare kan fylla i sina uppgifter och meddelanden och därefter skicka.

Viktiga funktioner som används här:

1.  “useState” används för att kunna hantera tillstånd som namn, e-post och meddelande.
2.  “useRef” används för att hålla en referens till animationsinstansen som kommer upp när man trycker på skicka.
3.  “useEffect” används för att hantera rensningen av intervallet när komponenten avmonteras.
4.  “startAnimation” och “stopAnimation” används för att styra och ta hand om konfetti animationer som kommer på sidan.
5.  “handleSubmit” den funktion används för att skicka de information som användare skrivet som namn, e-post och meddelande till databasen i servern.
6.  Knappar som “send” som skickar infö som användare skrivit och fyllt till databa servern och startar konfetti animation, “reset” som återställer fälten namn, e-post och textmeddelande och därefter stoppar konfetti. “BackHome” återställer de fält och stänger av popup-fönster och skicka användaren till startsidan.

SupportUs delen innehåller även en CSS-fil som styla komponenterna och popup-fönstret. CSS-filen för att hantera layout och design av komponenterna.

SupportUs delen har också en rolig konfetti-animation som aktiveras när support meddelande skickas. Detta kan öka användarupplevelse och göra det mer engagerande. Så att den delen av projektet visar hur användare kan ge sitt stöd och skicka supportmeddelanden. SupportUs delen har stor potential att förbättras och utvecklas ytterligare med nya funktioner och förbättringar.

## Scroll to top

# GitHub

Fork på ett mainprojekt

Varje person skapade en fork till huvudprojektet på sin egen github. Du skapar en fork genom att gå in på huvudprojektet (repot hos ägaren).

Sen clonar du ner från ditt eget repo. . Detta är ett sätt för att alla ska ha pågående projekt simultant. Sen kan det pushas från din fork upp till huvudprojektet genom en pl.

Vad

Vart

Hur

När

Clone

Ett sätt att göra en klon av huvudprojektet.

Kommando: git clone (LÄNK)

Vad

Vart

Hur

När

PL - Pullrequest

Vad

Vart

Hur

När

Sync

Vad

Vart

Hur

När

Push

Detta gör du när du har något att bidra med till huvudprojektet. Du gör en commit med all den uppdaterade koden till ditt lokala repository för att sedan skicka det till huvudprojektet.  
Kommando git push (bransch)

Vad

Vart

Hur

När

Merge & Merge-konflikt

Vad

Vart

Hur

När

# React

När vi först började visste vi inte hur vi skulle göra ordentlig map-hantering. Allting låg splittrat och vi hade minst fem css filer som inte hade några funktioner eller att koderna skrev över varandra.

Det blev lättare till slut när vi bara hade några css-filer. Då kunde vi undersöka felen utan att det skulle ta för mycket tid att undersöka.

Vi tror att de hade varit bättre att göra en plan om hur projektmappen skulle se ut från början och utgå från det istället för att börja koda och testa sig fram.

**Atthaphon** har arbetat med Navbar, Login, Logout, Register, RightColumn.

**Ola** har varit och petat i det mesta, men har i huvudsak fokuserat på HomeControllern, artiklarna, databaserna och Dark Theme.

**Ahmed** har arbetat det mesta med Support US knappen och deras komponenter och funktioner.

**Jimmie** har hållit sig mest till väderrutan genom projektets gång. Även fixat den ursprungliga grid layouten för bodyn till vår sida samt lite som funktioner som att kunna logga in eller genom att söka på olika orter eller städer i vädret rutan med hjälp av enter.

  

# Redux

# Aws
