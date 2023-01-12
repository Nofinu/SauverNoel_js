//######### fonction generale #########
function geneListeRennes(nbr){
    let tab=[];
    for(let i=0; i<nbr ; i++){
        tab[i]=i+1;
    }
    return tab;
}
function trouverBaies (){
    let baies=rndm(0,7),message="";
    nbrBaies += baies;
    minsRestante -= 20;
    return message = `Vous trouver ${baies} baies dans les buissons!\nVous avez maintenant ${nbrBaies} dans votre sac.`;
}

//######### fonction Rennes #########
function chercherRennes(nombreRennes,listedesrennes){
    let renneNumero=rndm(0,nombreRennes);
    switch(true){
        case listedesrennes[renneNumero]==1:
            renneAffame();
            break;
        case listedesrennes[renneNumero]==2:
            renneAffame();
            break;
        case listedesrennes[renneNumero]==3:
            renneAppeurer();
            break;
        case listedesrennes[renneNumero]==4:
            renneAppeurer();
            break;
        case listedesrennes[renneNumero]==5:
            renneEnerver();
            break;
        case listedesrennes[renneNumero]==6:
            renneEnerver();
            break;
        case listedesrennes[renneNumero]==7:
            rodolph();
            break;
    }
    listedesrennes.splice(renneNumero-1, 1);
    nbrRennes--;
    minsRestante -=40;
    return listedesrennes;
}
function renneAffame(){
    let reussite = true,lanceDe=0,choix=0,message="";
    alert("Vous trouver un rennes affamé !");
    while(reussite){
        choix=menuRennes();
        switch(choix){
            //choix de lui donner des baies
            case 1 :
                reussite = actionRenne(1,3,1,5);
                nbrBaies--;
                break;
            //choix de l'amadouer
            case 2 : 
            reussite = actionRenne(4,4,1,5);
                break;
            //choix de le taper
            case 3 :
                reussite = actionRenne(4,4,1,5);
                break;
        }
    }
}

function renneAppeurer(){
    let reussite = true,lanceDe=0,choix=0,message="";
    alert("Vous trouver un rennes appeuré !");
    while(reussite){
        choix=menuRennes();
        switch(choix){
            //choix de lui donner des baies
            case 1 :
                reussite = actionRenne(4,4,1,5);
                nbrBaies--;
                break;
            //choix de l'amadouer
            case 2 : 
            reussite = actionRenne(1,3,1,5);
                break;
            //choix de le taper
            case 3 :
                reussite = actionRenne(5,5,1,5);
                break;
        }
    }
}

function renneEnerver(){
    let reussite = true,lanceDe=0,choix=0,message="";
    alert("Vous trouver un rennes enervé !");
    while(reussite){
        choix=menuRennes();
        switch(choix){
            //choix de lui donner des baies
            case 1 :
                reussite = actionRenne(4,4,1,5);
                nbrBaies--;
                break;
            //choix de l'amadouer
            case 2 : 
            reussite = actionRenne(5,5,1,5);
                break;
            //choix de le taper
            case 3 :
                reussite = actionRenne(1,3,1,5);
                break;
        }
    }
}

function rodolph(){
    let reussite = true,lanceDe=0,choix=0,message="";
    alert("Vous trouver un rennes enervé !");
    while(reussite){
        choix=menuRennes();
        switch(choix){
            //choix de lui donner des baies
            case 1 :
                reussite = actionRenne(1,1,1,3);
                nbrBaies--;
                break;
            //choix de l'amadouer
            case 2 : 
            reussite = actionRenne(2,2,1,3);
                break;
            //choix de le taper
            case 3 :
                reussite = actionRenne(3,3,1,3);
                break;
        }
    }
}

function actionRenne (min,max,rdnmin,rdnmax){
    lanceDe = rndm(rdnmin,rdnmax);
    minsRestante -= 5;
    if(lanceDe<=max && lanceDe>=min){
        message=`Bravo vous avez attraper un renne !! \n${tempsRestant(minsRestante)}`;
        alert(message);
        reussite=false;
        return false;
    }
    else{
        message = `Vous avez échoué ... tenté peu etre autre chose.\n${tempsRestant(minsRestante)}`;
        alert(message);
        return true
    }   
}

//######### fonction random #########
function rndm(valeurMin,valeurMax){
    return Math.floor(Math.random() * (valeurMax+1 - valeurMin) + valeurMin);
}

//######### fonction d'affichage/menu #########
function creatRenneRestant (nbr){
    let message="";
    return message=`Il vous reste ${nbr} rennes a attraper`;
}
function creatMenuPerenoel (){
    let message="";
    return message ="====Que dois faire Père Noël====\n1 - Aller chercher des baies\n2 - Aller chercher un Renne\n3 - S'enfuir"
}
function tempsRestant (tpsrestant){
    let message="",heure=0,mins=0;
    heure =Math.floor( tpsrestant/60);
    mins = tpsrestant%60;
    return message = `il vous reste ${heure}:${mins}`;
}
function menuRennes (){
    let choix=0,message="";
    if(nbrBaies != 0){
        message="\n==Que dois faire Père Noël==\n1 - Lancer des baies au renne\n2 - Amadouer le renne\n3 - Menacer le renne avec un baton";
        while(choix<1 || choix>3){
            choix = Number(prompt(message));
        }
    }
    else{
        message="\n==Que dois faire Père Noël==\n2 - Amadouer le renne\n3 - Menacer le renne avec un baton";
        while(choix<2 || choix>3){
            choix = Number(prompt(message));
        }
    }
    return choix;
}

//######### initialisation #########
let minsRestante = 1440,nbrRennes = 7,nbrBaies=0,listeRennes=[],affichagePereNoel="",affichage="",test=0;
let entry =0;

//execution du programme

listeRennes = geneListeRennes(nbrRennes);

alert("Nous somme la veille de Noël.\n les rennes du Père Noël se sont enfuit! \n Aider le a les retrouver\n\n cordialement les lutins ");

while (nbrRennes>0 && minsRestante>0){
    while(entry<1 || entry>3){
        affichagePereNoel = ` ${creatRenneRestant(nbrRennes)}\n\n${creatMenuPerenoel()} `;
        entry = Number(prompt(affichagePereNoel));
        }
    switch(entry){
        case 1:
            affichage = `${trouverBaies()}\n${tempsRestant(minsRestante)}`;
            alert(affichage);
            break;
        case 2:
            listeRennes = chercherRennes(nbrRennes,listeRennes);
            break;
        case 3:
            minsRestante =0;
            break;
        }
        entry = 0;
}

if (nbrRennes == 0 && minsRestante>0){
    alert(`Bravo vous avez sauver noël !!\n ${tempsRestant(minsRestante)} pour vous preparer`);
}
else{
    alert(`Malheureusement vous n'avez pas reussis a sauver noël,\n ${creatRenneRestant(nbrRennes)}... `)
}
