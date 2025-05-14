# React + Auth0 Workshop

Welkom bij de **Auth0 Workshop**!  
In deze workshop voeg je stap voor stap Auth0-authenticatie toe aan een React-applicatie. Je werkt in een project met stukken code die je zelf moet aanvullen.

Voor uitleg hoe je een Auth0-account aanmaakt en een applicatie configureert, zie de sectie "Opzetten Auth0 applicatie" onderaan deze pagina.

---

## Installatie & Voorbereiding

1. Clone of download de startercode.
2. Installeer de benodigde packages:

   ```bash
   npm install
   ```
---
3. Maak een auth0 applicatie aan (zie bijlage onderaan de readme)
## Stap 1: Auth0Provider instellen (`index.js`)

- Importeer `Auth0Provider` uit `@auth0/auth0-react`
- Wikkel `<App />` in een `<Auth0Provider>`
- Gebruik de variabelen voor `domain` en `clientId` van je Auth0-applicatie
- Zet `redirect_uri` op `window.location.origin`

Bestand: `index.js`


---

## Stap 2: Inloggen en Gebruikerstoestand beheren (`App.js`)

- Importeer `useAuth0` uit `@auth0/auth0-react`
- Haal `isAuthenticated` en `isLoading` op via `useAuth0()`
- Geef de gebruiker feedback dat de app aan het laden is

Bestand: `App.js`


## Stap 3: AuthButton component maken (`AuthButton.js`)

- Haal `loginWithRedirect`, `logout` en `isAuthenticated` op via `useAuth0()`
- Implementeer de `handleLogin()` functie die `loginWithRedirect()` aanroept
- Implementeer de `handleLogout()` functie die `logout()` aanroept met `returnTo: window.location.origin`
- Toon de knoppen "Log In" of "Log Out" afhankelijk van `isAuthenticated`

Bestand: `AuthButton.js`


## Stap 4: Profielcomponent maken (`Profile.js`)

- Haal `user` en `isAuthenticated` op via `useAuth0()`
- Handel null-waarden af in de `user`-gegevens (zoals naam en foto)
- Toon de gebruikersnaam, profielfoto, en andere relevante gegevens
- Gebruik het `AuthButton`-component om in- en uit te loggen

Bestand: `Profile.js`

## Extra Bronnen

- Auth0 React SDK Documentatie: [https://auth0.com/docs/quickstart/spa/react](https://auth0.com/docs/quickstart/spa/react)
- Auth0 Developer Console: [https://manage.auth0.com](https://manage.auth0.com)

---

## Opzetten Auth0 applicatie

1. **Ga naar de Auth0 Website**
   - Open je browser en ga naar [Auth0](https://auth0.com/).

2. **Maak een Account aan**
   - Klik op **Sign Up** in de rechterbovenhoek van de website.
   - Vul je gegevens in, zoals je naam, e-mail en wachtwoord, of meld je aan met een bestaande Google-, GitHub- of andere account.

3. **Bevestig je E-mail**
   - Nadat je je hebt geregistreerd, ontvang je een bevestigingsmail. Klik op de bevestigingslink om je account te activeren.

4. **Log In op de Auth0 Dashboard**
   - Nadat je je account hebt bevestigd, kun je inloggen op het [Auth0 Dashboard](https://manage.auth0.com/).

---

## Hoe voeg je een applicatie toe aan Auth0

1. **Maak een Nieuwe Applicatie**
   - Log in op het [Auth0 Dashboard](https://manage.auth0.com/).
   - Klik op **Applications** in het linkermenu en selecteer **Applications**.
   - Klik op **Create Application**.
   - Kies **Single Page Web Application**.
   - Geef je applicatie een naam (bijvoorbeeld "Auth0 Workshop") en klik op **Create**.

2. **Configureer de Applicatie**
   - Na het aanmaken van de applicatie, ga naar de instellingen van de applicatie.
   - **Client ID** en **Domain**: Kopieer de **Client ID** en **Domain**. Je hebt deze later nodig in je React-applicatie.
   - **Allowed Callback URLs**: Voeg `http://localhost:3000` toe als een toegestane callback-URL (de URL waar je app draait tijdens ontwikkeling).
   - **Allowed Logout URLs**: Voeg `http://localhost:3000` toe als een toegestane logout-URL.
   - **Allowed Web Origins**: Voeg `http://localhost:3000` toe als een toegestane web origin.
   - Klik op **Save Changes**.

---

Met deze stappen kun je een Auth0-account aanmaken, een Single Page Application (SPA) configureren, en callback-URLs instellen voor je lokale ontwikkelomgeving. Als je deze stappen volgt, kun je Auth0-authenticatie aan je React-app toevoegen en zou je straks wanneer je de workshop volgt, in staat moeten zijn om in te loggen en je gebruikersprofiel weer te geven.

---
