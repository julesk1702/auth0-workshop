# React + Auth0 Workshop

Welkom bij de **Auth0 Workshop**!  
In deze workshop voeg je stap voor stap Auth0-authenticatie toe aan een React-applicatie. Je werkt in een project met stukken code die je zelf moet aanvullen.

---

## Installatie & Voorbereiding

1. Clone of download de startercode.
2. Installeer de benodigde packages:

   ```bash
   npm install
   ```
---

## Stap 1: Auth0Provider instellen (`index.js`)

- Importeer `Auth0Provider` uit `@auth0/auth0-react`
- Wikkel `<App />` in een `<Auth0Provider>`
- Gebruik de `.env` variabelen voor `domain` en `clientId`
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
