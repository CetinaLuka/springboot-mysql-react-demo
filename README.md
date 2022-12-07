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
     - `npm install @mui/material @emotion/react @emotion/styled` (nudijo že oblikovanje komponente, ki jih lahko na preprost način vključimo v projekt)
 4. Vzpostavitev "routinga"
     - V mapi `src/components` ustvarimo novo mapo z imenom `routing`, v njej pa datoteko `Routing.js`. V tej datoteki bomo definirali katere komponente naj se prikažejo ob obisku določenega url (glej vsebino datoteke v repozitoriju).
     - V datoteki `index.js` moramo komponento `<App>` oviti s komponento `<BrowserRouter>`. To nam bo omogočilo pomiklanje po straneh kot če bi bila naša aplikacija klasična html stran.
     - V datoteki `App.js` odstranimo vsebino značke `<div className="App">` in dodamo komponento `<Routing />`. Če želimo v spletni strani imeti naslovno vrstico, ki bo enaka na vseh straneh, jo dodamo nad komponento `<Routing />`.
 
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
 
 # Pogoste napake
 - ***module not found*** ob izvedbi ukaza `npm start`
   - Izbrišite datoteko `package-lock.json` ter mapo `node_modules` in ponovno izvedite ukaz `npm install`. Ko se ta izvede, ponovno poskusite pognati projekt.
- ***V datoteki manjka uvoz React*** - vsaka React komponenta se mora začeti z uvozom React-a: `import React from "react";`
 
