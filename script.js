// Hämta element från HTML
let fraga = document.getElementById("fraga")
let alternativ = document.getElementById("alternativ")

// Fråga 1
function fraga1(){
    fraga,innerText = "1. Vad står HTML för?";
    alternativ.innerHTML = `
    <button onclick="fraga2()">Hyper Text Markup Language</button>
    <button onclick="fel()">High Tech Modern Language</button>
    `;
}
// Fråga 2 
function fraga2(){
    fraga.innerText = "2. Din fråga här?"
    alternativ.innerHTML = `
    <button onclick="fraga3()">Rätt svar</button>
    <button onclick="fel()">Fel svar </button>
`;
}
// Fråga 3
function fraga3(){
    fraga.innerText = "3. Vad är internet";
    alternativ.innerHTML = `
    <button onclick="fraga4()">Ett globalt nätverk av datorer</button>
    <button onclick="fel()">Ett dataspel</button>
    `;
}

function fraga4(){
    fraga.innerText = "4. Vad gör JavaScript på en webbsida?";
    alternativ.innerHTML = `
    <button onclick="fraga5()">Gör sidan interaktiv</button>
    <button onclick="fel()">Kokar kaffe</button>
    `;
}

function fraga5(){
    fraga.innerText = "5. Vilket tecken används ofta för att stänga en tagg i HTML?";
    alternativ.innerHTML = `
    <button onclick="fraga6()">Ett snedstreck ( / )</button>
    <button onclick="fel()">Ett utropstecken ( ! )</button>
    `;
}

function fraga6(){
    fraga.innerText = "6. Vilket språk används för struktur på webben?";
    alternativ.innerHTML = `
    <button onclick="fraga7()">HTML</button>
    <button onclick="fel()">Python</button>
    `;
}

function fraga7(){
    fraga.innerText = "7. Vilket språk stilar webbsidor?";
    alternativ.innerHTML = `
    <button onclick="fraga8()">CSS</button>
    <button onclick="fel()">C++</button>
    `;
}

function fraga8(){
    fraga.innerText = "8. Vilket språk ger webbsidor logik?";
    alternativ.innerHTML = `
    <button onclick="fraga9()">JavaScript</button>
    <button onclick="fel()">SQL</button>
    `;
}

function fraga9(){
    fraga.innerText = "9. Vad betyder bokstaven 'S' i CSS?";
    alternativ.innerHTML = `
    <button onclick="fraga10()">Sheets</button>
    <button onclick="fel()">System</button>
    `;
}

function fraga10(){
    fraga.innerText = "10. Vad betyder bokstaven 'L' i HTML?";
    alternativ.innerHTML = `
    <button onclick="fraga11()">Language</button>
    <button onclick="fel()">Link</button>
    `;
}
function fraga11(){
    fraga.innerText = "11. Vad används en webbläsare till?";
    alternativ.innerHTML = `
    <button onclick="fraga12()">Visa webbsidor</button>
    <button onclick="fel()">Redigera videor</button>
    `;
}

function fraga12(){
    fraga.innerText = "12. Vad är en variabel i programmering?";
    alternativ.innerHTML = `
    <button onclick="fraga13()">En behållare för data</button>
    <button onclick="fel()">En felkod</button>
    `;
}

function fraga13(){
    fraga.innerText = "13. Vilket nyckelord används för att skapa en variabel i JS?";
    alternativ.innerHTML = `
    <button onclick="fraga14()">let</button>
    <button onclick="fel()">make</button>
    `;
}

function fraga14(){
    fraga.innerText = "14. Vad är en funktion?";
    alternativ.innerHTML = `
    <button onclick="fraga15()">Ett återanvändbart kodblock</button>
    <button onclick="fel()">En bildfil</button>
    `;
}

function fraga15(){
    fraga.innerText = "15. Hur startar man en funktion i JS?";
    alternativ.innerHTML = `
    <button onclick="fraga16()">function mittNamn()</button>
    <button onclick="fel()">start mittNamn()</button>
    `;
}

function fraga16(){
    fraga.innerText = "16. Vad gör alert() i JavaScript?";
    alternativ.innerHTML = `
    <button onclick="fraga17()">Visar en popupruta</button>
    <button onclick="fel()">Stänger webbläsaren</button>
    `;
}

function fraga17(){
    fraga.innerText = "17. Vad betyder DOM?";
    alternativ.innerHTML = `
    <button onclick="fraga18()">Document Object Model</button>
    <button onclick="fel()">Data Online Method</button>
    `;
}

function fraga18(){
    fraga.innerText = "18. Vad används document.getElementById till?";
    alternativ.innerHTML = `
    <button onclick="fraga19()">Hämta ett element från HTML</button>
    <button onclick="fel()">Radera hela sidan</button>
    `;
}

function fraga19(){
    fraga.innerText = "19. Vad gör .innerText?";
    alternativ.innerHTML = `
    <button onclick="fraga20()">Ändrar texten i ett element</button>
    <button onclick="fel()">Ändrar bakgrundsfärgen</button>
    `;
}

function fraga20(){
    fraga.innerText = "20. Vad gör .innerHTML?";
    alternativ.innerHTML = `
    <button onclick="fraga21()">Ändrar HTML-innehåll</button>
    <button onclick="fel()">Sparar till en databas</button>
    `;
}

function fraga21(){
    fraga.innerText = "21. Vad är en knapp i HTML?";
    alternativ.innerHTML = `
    <button onclick="fraga22()">Ett klickbart element</button>
    <button onclick="fel()">En textruta</button>
    `;
}

function fraga22(){
    fraga.innerText = "22. Vad betyder attributet onclick?";
    alternativ.innerHTML = `
    <button onclick="fraga23()">Händer när man klickar</button>
    <button onclick="fel()">Händer när man laddar om</button>
    `;
}

function fraga23(){
    fraga.innerText = "23. Vilket tecken används för backticks?";
    alternativ.innerHTML = `
    <button onclick="fraga24()">`` (sned nutt)</button>
    <button onclick="fel()">'' (vanlig apostrof)</button>
    `;
}

function fraga24(){
    fraga.innerText = "24. Varför sparar man filer i .js-format?";
    alternativ.innerHTML = `
    <button onclick="fraga25()">För att det är JavaScript-kod</button>
    <button onclick="fel()">För att det är en bild</button>
    `;
}

function fraga25(){
    fraga.innerText = "25. Vad är en webbserver?";
    alternativ.innerHTML = `
    <button onclick="fraga26()">En dator som lagrar webbsidor</button>
    <button onclick="fel()">En bildskärm</button>
    `;
}

function fraga26(){
    fraga.innerText = "26. Vad är URL?";
    alternativ.innerHTML = `
    <button onclick="fraga27()">En webbadress</button>
    <button onclick="fel()">Ett programmeringsspråk</button>
    `;
}

function fraga27(){
    fraga.innerText = "27. Vad betyder HTTP?";
    alternativ.innerHTML = `
    <button onclick="fraga28()">HyperText Transfer Protocol</button>
    <button onclick="fel()">High Tech Text Program</button>
    `;
}

function fraga28(){
    fraga.innerText = "28. Vad betyder S i HTTPS?";
    alternativ.innerHTML = `
    <button onclick="fraga29()">Secure (Säker)</button>
    <button onclick="fel()">Simple (Enkel)</button>
    `;
}

function fraga29(){
    fraga.innerText = "29. Vad är källkod?";
    alternativ.innerHTML = `
    <button onclick="fraga30()">Koden som programmet är skrivet i</button>
    <button onclick="fel()">Ett batteri</button>
    `;
}

function fraga30(){
    fraga.innerText = "30. Vad händer när man klarar sista frågan?";
    alternativ.innerHTML = `
    <button onclick="slut()">Quizet är klart!</button>
    <button onclick="fel()">Inget alls</button>
    `;
}

function fel() {
    alert("Fel svar!");
}

function slut() {
    fraga.innerText = "Klart!";
    alternativ.innerHTML = "<p>Du har svarat på alla frågor.</p>";
}

fraga1();