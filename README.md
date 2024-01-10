# Mikä?

Tämä repositorio on LAB-ammattikorkeakoulun *AL00CM25-3001 Ohjelmistokehitysprosessin automatisointi* -kurssin harjoitusprojektille. Projektissa käydään läpi CI/CD -perusteita, ja itse koodi on kirjoitettu TypeScriptillä Angular Frameworkissa.

# Kuka?

Repositoriota ja projektia ylläpitää [Joonas Nissinen](https://github.com/n3iki). Repositorio on alun perin kloonattu projektia tarkastelevalta opettajalta [Liisa Uosukaiselta](https://github.com/liisauosukainen).

# Miten?

Repositoriossa on melko vähäsisältöinen Angular websovellus, jota on tarkoitus muokata niin, että siinä on testausympäristö (Karma/Jasmine) konffattu, ja että testit menevät läpi. Tämän jälkeen repositoriossa harjoitellaan CI/CD-tekniikoita GitHubin Workflown ja Kuberneteksen avulla, julkaisten valmiit kontit johonkin pilvipalveluun.

### Testit

Sovelluksessa ei ole juurikaan toiminnallisuutta, joten testit ovat lähinnä yksinkertaisia tarkistuksia:
**HomeComponent**
- should create

**PagenotfoundComponent**
- should display a link to home page
- should create
- should display "404 - Page not found"

**AppComponent**
- should render title
- should render toolbar text "Dev-ops-kurssin harjoitusprojekti"
- should create the app
- should have as title 'angular-example-app'

**PagenotfoundComponent**
- should create the PagenotfoundComponent
- FeedbackComponent
- should create

### Workflow

Workflow on tehty kaikki yhteen Build/Test/Docker -workflowiin. Workflowissa käydään läpi seuraavat stepit, aina kun Main -haaraan tulee push:

**Set up Node.js**
- Asentaa ja määrittää Node.js-ympäristön virtuaalikoneelle.

**Install Angular CLI**
- Asentaa virtuaalikoneelle Angular CLI:n.

**Install dependencies**
- Asentaa projektin riippuvuudet.

**Build application**
- Kääntää Angular-sovelluksen.

**Run unit tests**

- Suorittaa yksikkötestit ng test --watch=false --browsers=ChromeHeadless, jotta virtuaalikone ei yritä avata selainta.

**Docker login for debugging**
- Kirjautuu sisään Docker Hubiin salatuilla tunnuksilla repositorion "secrets" -ominaisuutta käyttäen.

**Set up Docker Buildx**
- Valmistelee Docker Buildx, käytetään Docker-imagen luomiseen.

**Build and push Docker image**
- Luo Docker-imagen Dockerfilea käyttäen. Pushaa luodun imagen Docker Hubiin https://hub.docker.com/repository/docker/n3iki/my-angular-app/ tunnisteella "testi".


## Muuta
Dockerkonttia ei julkaista missään pilvipalvelussa resurssien loppumisen vuoksi.
Huomasin myös, että sovellus käännetään nyt kahdesti: kerran testejä varten ja toisen kerran docker imagen luomiseen. Tämän varmaan voisi jotenkin optimoida paremmin.
