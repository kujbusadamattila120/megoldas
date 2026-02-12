function letrehoz() {
    //Lépések, amit követhet:
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát
    //Az <ol> elem (node) létrehozása
    //Behelyezés a DIV-be

    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!

    //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel

    let ures_lista=document.getElementById("DIV_generalt_lista");
    ures_lista.innerHTML="";
    let ol=document.createElement("ol")  ;
    let darabszam=document.getElementById("elemek_szam").value;
    for (let index = 0; index < darabszam; index++) {
        let li=document.createElement("li");
        
        ol.appendChild(li);
        
    }
    ures_lista.appendChild(ol);
}

function szinez() {
    //nth-child() - hoz szükséges értékek beszerzése
    let n_ertek=parseInt(document.getElementById("nth_n").value);
    let elso_sor=parseInt(document.getElementById("nth_first").value);
    let valasztott_szin=document.getElementById("szinek_listaja").value;
    
    
    
    
    
    //Lekérjük azokn az <li> elemeknek a kollekcióját, amelyekre igaz a szelektor
    let lista_elemek=document.getElementsByTagName("li");
  
  
    //Végigmegyünk minden elemen és a listában megadott színűre állítjuk a backgroundColor-t


    for (let index = 0; index < lista_elemek.length; index++) {
        let sorszam=index+1;
        if (sorszam >= elso_sor && (sorszam - elso_sor) % n_ertek === 0) 
        {

            lista_elemek[index].style.background=valasztott_szin
        }


        
    
        
    }
   
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
