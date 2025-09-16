# Movie Project

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
3. **Start utviklingsserver:**
   ```sh
   npm run dev
   ```
4. **Skaff API nøkkel:**

```sh
 Registrer som bruker på https://www.themoviedb.org/, og hent API nøkkel.
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
