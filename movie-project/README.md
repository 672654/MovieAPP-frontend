# Movie Project

<img width="1866" height="333" alt="image" src="https://github.com/user-attachments/assets/f4eb4ad3-0a13-44f8-b58e-6c3504e03fcf" />

<img width="1840" height="828" alt="image" src="https://github.com/user-attachments/assets/e3b3e0c1-aa63-4287-9203-77d73da905fc" />

<img width="337" height="753" alt="image" src="https://github.com/user-attachments/assets/ae7fe21b-b5bb-48bd-94ec-d5399d61a7a6" />




En React-applikasjon for å utforske, søke etter og lagre favorittfilmer. Prosjektet er bygget med Vite for rask utvikling og enkel oppsett.

Laget for å lære om komponenter og kommunikasjon mellom disse, Routing mellom sider/komponenter, Hooks(useState, useEffect, useContext) og lagring av data i nettleser.

## Hva gjør dette programmet?

Denne applikasjonen lar brukere:

- Søke etter filmer via et API
- Se detaljer om filmer
- Legge til og fjerne filmer fra en favorittliste
- Navigere mellom ulike sider (Hjem, Favoritter, Om)

## Hvordan kan andre dra nytte av det?

Dette prosjektet er et godt utgangspunkt for:

- Studenter som vil lære React og moderne frontend-utvikling
- Utviklere som ønsker et eksempel på bruk av Context API, komponentstruktur og API-integrasjon
- Alle som vil bygge videre på en filmrelatert applikasjon

## Oppsett og installasjon

1. **Klon repoet:**
   ```sh
   git clone <repo-url>
   cd movie-project
   ```
2. **Installer avhengigheter:**
   ```sh
   npm install
   ```
4. **Skaff API nøkkel:**
   ```sh
    Registrer som bruker på https://www.themoviedb.org/, og hent API nøkkel.
    Opprett .env i /movie-project/.env
    Legg API nøkkel .env fil. Referer til denne i src/services/api.js
    Sørg for at .env ligger i .gitignore
   
    - const API_KEY = import.meta.env.VITE_API_KEY;
   ```
3. **Start utviklingsserver:**
   ```sh
   npm run dev
   ```

## Prosjektstruktur

- `src/components/` – Gjenbrukbare React-komponenter (f.eks. MovieCard, NavBar)
- `src/pages/` – Sider for Hjem, Favoritter og Om
- `src/contexts/` – Context API for deling av tilstand
- `src/services/` – API-kall og eksterne tjenester
- `src/css/` – Egendefinerte stilark

## Videre arbeid

Du kan enkelt utvide prosjektet med flere funksjoner, som brukerautentisering, flere API-kilder, eller avansert filtrering og sortering.

---
