/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert(`Velkominn í leikinn tilbúinn að byrja?`);
  play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let Right=0;
  let time=0;
  for(let i=0; i<GAMES_TO_PLAY;i++){
  var t1= performance.now();
  let Quest=ask();
  var t2= performance.now();
  time += t2-t1;
  if(Quest==null){
    Right=null;
    break;
  }
  if (Quest==true){
  Right++;}
  }
  if(Right!=null){
  alert('Að meðaltali það tók þig '+((time/1000)/GAMES_TO_PLAY)+' Sekúndur til að klára hverju spurningu og þú hafðir '+Right+" Spurningar rétt")
  }
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  let theQuestion="";
  let awnser=false;
  let questionArry=question();
  if(questionArry[0]==1){
   theQuestion= "Hvað er" +questionArry[1]+"+"+
 questionArry[2]+"?";
  }
  if(questionArry[0]==2){
    theQuestion= "Hvað er" +questionArry[1]+"-"+
 questionArry[2]+"?";
  }
  if(questionArry[0]==3){
    theQuestion= "Hvað er" +questionArry[1]+"*"+
 questionArry[2]+"?";
  }
  if(questionArry[0]==4){
    theQuestion= "Hvað er" +questionArry[1]+"/"+
 questionArry[2]+"?";
  }
  
  let input= prompt(theQuestion);
  if(input==null){
    alert('Leikur endaður af þér why!!!!!')
    awnser=null;
    return awnser;
  }
  if(input==questionArry[3]){
    awnser=true;
    alert('Rétt!');
  }
  if(input!=questionArry[3])
  {
    alert('Rangt');
  }



  return awnser;
    
  
  
}


function question(){
  let questType= randomNumber(1,4);
  let Rightawnser=0;
  let number1=0;
  let number2=0;
  if(questType==1){
    number1=randomNumber(1,100);
    number2=randomNumber(1,100);
    Rightawnser=number1+number2;
    


  }
  if(questType==2){
    number1=randomNumber(1,100);
    number2=randomNumber(1,100);
    Rightawnser=number1-number2;
  }
  if(questType==3){
    number1=randomNumber(1,10);
    number2=randomNumber(1,10);
    Rightawnser=number1*number2;


  }
  if(questType==4){
    number1=randomNumber(2,10);
    number2=randomNumber(2,10);
    Rightawnser=number1-number2;
  }
  return [questType,number1,number2,Rightawnser];
}






/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
let newGame=false;
do{
start();
newGame=confirm('Viltu taka annan leik?')
}
while(newGame==true);
