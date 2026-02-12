function letrehoz() {
    //Lépések, amit követhet:
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát
    //Az <ol> elem (node) létrehozása
    //Behelyezés a DIV-be

    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!

    //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel
}

function szinez() {
    //nth-child() - hoz szükséges értékek beszerzése

    //Lekérjük azokn az <li> elemeknek a kollekcióját, amelyekre igaz a szelektor
    //Végigmegyünk minden elemen és a listában megadott színűre állítjuk a backgroundColor-t
}

function szelektorParamterValtozas(kuldo, mi_valtozott) {
    document.getElementById(mi_valtozott).innerHTML = kuldo.value;
}

function szinekTorles() {
    let osszes_li_elem = document.getElementsByTagName("li");

    for (let index = 0; index < osszes_li_elem.length; index++) {
        osszes_li_elem[index].style.backgroundColor = "";
    }
}
