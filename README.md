# springboot-mysql-react-demo
## Zagon React aplikacije
- `npm install` (da namestimo vse odvisnosti projekta)
- `npm start`

# Vzpostavitev React projekta
 1. `npx create-react-app <ime aplikacije>`
 2. V mapi src dodamo mape
    - `components` - sem sodijo react komponente, ki jih bomo ustvarili
    - `services` - sem sodijo storitve, ki nam bodo omogočile pridobivanje podatkov iz zaledja
    - `assets` - sem sodijo slike, dodatne css, javascript datoteke ipd.
 3. Dodajanje knjižnic/odvisnosti
    Odvisnosti so zunanje knjižnice, ki jih vključimo v projekt. Pri SpringBoot je za to skrbel **Maven**, pri Reactu pa bomo za to uporabljali **npm**. Za ta demo moramo    dodati sledeče knjižnice:
     - `npm install react-router-dom` (skrbi za navigacijo po straneh in spreminjanje url naslova)
     - `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material` (nudijo že oblikovanje komponente, ki jih lahko na preprost način vključimo v projekt)
     - `npm install axios` - knjižnica za proženje REST zahtev, ki nam bo pomagala pridobiti podatke iz zaledja.
 4. Vzpostavitev "routinga"
     - V mapi `src/components` ustvarimo novo mapo z imenom `routing`, v njej pa datoteko `Routing.js`. V tej datoteki bomo definirali katere komponente naj se prikažejo ob obisku določenega url (glej vsebino datoteke v repozitoriju).
     - V datoteki `App.js` odstranimo vsebino značke `<div className="App">` in dodamo:
```
<BrowserRouter>
    <Routing />
</BrowserRouter>
```
Če želimo v spletni strani imeti naslovno vrstico, ki bo enaka na vseh straneh, jo dodamo nad komponento `<Routing />`.
 # Vzpostavitev komunikacije z zaledjem
 1. V korenski imenik React projekta dodamo .env datoteke, v katero zapišemo spremenljivko, ki bo hranila url na katerem lahko dostopamo do podatkov iz zalednega sistema. Vse spremenljivke v .env datoteki se morajo začeti z REACT_APP... 
 2. Dodamo spremenljivko, ki vsebuje osnovi url vašega zaledja `REACT_APP_BASE_URL=http://127.0.0.1:8180/api/v1`
 3. V mapi `services` ustvarimo datoteko `api.js` in vanjo zapišemo:
 ```
import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
export default api;
 ```
 # Pomembni koncepti/elementi React aplikacije
 ## State
 State je v React-u objekt, ki hrani stanje. Njegovo vrednost lahko po želji spremenimo, vse komponente, ki prikazujejo/uporabljajo to stanje pa se bodo samodejno osvežile, saj so zaznale spremembo vrednosti stanja. Na stanje lahko gledamo kot spremenljivke, ki React komponentam hranijo vredosti. Napiše se tako:
 
  `const [<ime stanja>, <ime metode, ki spremeni vrednost stanja>] = useState(<začetna vrednost>);`
  
 Praktičen primer stanja, ki hrani id hiše: `const [idHise, setIdHise] = useState("");`
 
 POZOR: metodo useState() je potrebno na vrhu datoteke uvoziti, drugače stvar ne bo delovala.
 
 ## useEffect() metoda
 To je metoda, ki se proži vsakič ko se stran osveži. Osveži se lahko ročno ali pa zaradi posodobitve podatkov, ki se na strani prikazujejo (State). Definiramo lahko več useEffect() metod in definiramo kdaj naj se vsaka proži. Napišemo jo tako:
 
 ```
 useEffect(() => {
    //vsebina metode, ki naj se izvede
  }, [<stanje ob spremembi katerega želimo, da se metoda izvede (lahko je prazno)>]);
 ```
 
 Primer metode, ki se izvede ko se stran prvič naloži in opb vsaki posodobitvi stanja idHise:
 
  ```
 useEffect(() => {
    //vsebina metode, ki naj se izvede. Po navadi so tu klici zaledja, da se pridobijo podatki
  }, [idHise]);
 ```
 
 POZOR: metodo useEffect() je potrebno na vrhu datoteke uvoziti, drugače stvar ne bo delovala.
     `import { useEffect } from "react";`
 
 ## Props
 Props so vrednosti, ki jih React komponentam podamo kot parametre. Podamo lahko tako vrednosti kot tudi metode. Primer react komponente, ki prejme prop (v tem primeru seznam hiš):
 
 `<HiseTable hise={hise} />`
 
 Uporaba prejete vrednosti v komponenti:
 ```
 export default function HiseTable({hise}) {
  return (
      {hise.map((hisa) => (
      <p>{hisa.naslov} {hisa.hisna_stevilka}</p>
      ))}
   )
  }
 ```
 
 ## Navigacija po strani
 V React projekt za navigacijo med stranmi ne uporabljamo klasičnih <a> značk, ampak uporabljamo pristope, značilne za React. V sklopu tega projekta bomo pokazali dva:
   - **useNavigate()**
 
      Metoda s pomočjo katere lahko navigiramo do želenega url naslova (znotraj naše spletne strani). Ker lahko metodo pokličemo le znotraj react komponente jo po navadi shranimo v spremenljivko `navigate`, ki jo nato uporabljamo v komponenti. Primer:
 ```
 import { useNavigate } from "react-router-dom";
 
 component Komponenta = () => {
   let navigate = usenavigate();
   return(
      <button onClick={() => navigate("/")}>Domov</button>
   );
 }
 ```
   - **<Link>** 
 
     Komponenta s pomočjo katere lahko ustvarimo klasičen <a> link. Primer:
 
     `<Link to="/"><p>Domov</p></Link>`
 
 # Pogoste napake
 - ***module not found*** ob izvedbi ukaza `npm start`
   - Izbrišite datoteko `package-lock.json` ter mapo `node_modules` in ponovno izvedite ukaz `npm install`. Ko se ta izvede, ponovno poskusite pognati projekt.
- ***V datoteki manjka uvoz React*** - vsaka React komponenta se mora začeti z uvozom React-a: `import React from "react";`
- Prazna stran
  - Preverite, če imate knjižnico `react-router-dom` dodano med odvisnosti v `package.json`
- Vrednost iz .env datoteke se ne posodobi
   - Preverite če se ime spremenljivke začne z REACT_APP
   - Ustavite in zaženite strežnik. Vrednosti spremenljivk v .env se ponovno preberejo šele ob ponovnem zagonu strežnika.
- CORS error
   - V zalednji sistem je potrebno vsem controllerjem dodati anotacijo `@CrossOrigin`
# Uporabne povezave
- [MUI - React components](https://mui.com/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
 
