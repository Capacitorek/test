function czas() {
    const obiektCzas = new Date();
    let godzina = obiektCzas.getHours();
    let minuta = obiektCzas.getMinutes();
    let sekunda = obiektCzas.getSeconds();
    let wartosc_czasu = "" + (godzina > 12) ? godzina  : godzina;
    
    
    wartosc_czasu += (minuta < 10) ? ":0" + minuta : ":" + minuta;
    wartosc_czasu += (sekunda < 10) ? ":0" + sekunda : ":" + sekunda;
    let elementCzas = document.getElementById("zegar");
    elementCzas.value = wartosc_czasu;
    setTimeout(czas, 1);
}
function data() {
    const obiektData = new Date();
    let dzien = obiektData.getDate();
    let miesiac = obiektData.getMonth();
    let rok = obiektData.getFullYear();
    let wartosc_daty = (dzien < 10) ?  "" + dzien : "" + dzien;
    wartosc_daty += (miesiac < 10) ? ".0" + (miesiac+1) : "." + (miesiac+1);
    wartosc_daty += "." + rok ;
    let elementData = document.getElementById("kalendarz");
    elementData.value = wartosc_daty;
    setTimeout(data, 1);
} 
    

