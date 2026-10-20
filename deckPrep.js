import Deck from "./classes/deckClass.js";
import Character from "./classes/characterClass.js";

const deck = new Deck();
const prepDeck = ()=>{
        //create and add kaylin
    const kaylin = new Character("Kaylin the Renegade", "RDI3", "hero");
    deck.addCard(kaylin);
    //create and add phrenk
    const phrenk = new Character("Brewmaster Phrenk", "RDI3", "hero");
    deck.addCard(phrenk);
    //create and add serena
    const serena = new Character("Serena the Pious", "RDI3", "hero");
    deck.addCard(serena);
    //create and add wizgille
    const wizgille = new Character("Wizgille the Tinkerer", "RDI3", "hero");
    deck.addCard(wizgille);
    //create and add joran
    const joran = new Character("Joran the Trickster", "RDI5", "hero");
    deck.addCard(joran);
    //create and add lizwick
    const lizwick = new Character("Lizwick the Collector", "RDI5", "hero");
    deck.addCard(lizwick);
    //create and add sera
    const sera = new Character("Sera the Fleetfooted", "RDI5", "hero");
    deck.addCard(sera);
    //create and add zakhan
    const zakhan = new Character("Zakhan the Drunken Master", "RDI5", "hero");
    deck.addCard(zakhan);
    //create and add amundyr
    const amundyr = new Character("Amundyr the Cursed", "RDI6", "villan");
    deck.addCard(amundyr);
    //create and add daareka
    const daareka = new Character("Daareka the Mindbreaker", "RDI6", "villan");
    deck.addCard(daareka);
    //create and add torglesnarf
    const torglesnarf = new Character("Torglesnarf Duncleton, First of His Name", "RDI6", "villan");
    deck.addCard(torglesnarf);
    //create and add vlaslo
    const vlaslo = new Character("Baron von Vlazlo", "RDI6", "villan");
    deck.addCard(vlaslo);
    //create and add jasper
    const jasper = new Character("Jasper the Bouncer", "RDI7", "hero");
    deck.addCard(jasper);
    //create and add molly
    const molly = new Character("Molly the Stablehand", "RDI7", "hero");
    deck.addCard(molly);
    //create and add warthorn
    const warthorn = new Character("Warthorn Redbeard", "RDI7", "hero");
    deck.addCard(warthorn);
    //create and add the wench
    const wench = new Character("The Wench", "RDI7", "hero");
    deck.addCard(wench);
    //create and add farai
    const farai = new Character("Father Farai", "RDI8", "hero");
    deck.addCard(farai);
    //create and add lucky
    const lucky = new Character("Lucky the Scofflaw", "RDI8", "hero");
    deck.addCard(lucky);
    //create and add nerodia
    const nerodia = new Character("Nerodia the Petrifier", "RDI8", "villian");
    deck.addCard(nerodia);
    //create and add phyll
    const phyll = new Character("Phyll Startusk", "RDI8", "hero");
    deck.addCard(phyll);
    //create and add samantha
    const samantha = new Character("Samantha the Bookie", "RDI8", "hero");
    deck.addCard(samantha);
    //create and add dale
    const dale = new Character("Dale the Mycologist", "RDI9", "hero");
    deck.addCard(dale);
    //create and add jett
    const jett = new Character("Jett the Courier", "RDI9", "hero");
    deck.addCard(jett);
    //create and add petra
    const petra = new Character("Petra the Devious", "RDI9", "villan");
    deck.addCard(petra);
    //create and add terci
    const terci = new Character("Doctor Terci", "RDI9", "hero");
    deck.addCard(terci);
    //create and add ygella
    const ygella = new Character("Beastsergeant Ygella", "RDI9", "hero");
    deck.addCard(ygella);
    //create and add evilPooky
    const evilPooky = new Character("Evil Pooky", "allies", "villan");
    deck.addCard(evilPooky);
    //create and add halden
    const halden = new Character("Halden the Unhinged", "allies", "hero");
    deck.addCard(halden);
    //create and add natyli
    const natyli = new Character("Witchdoctor Natyli", "allies", "hero");
    deck.addCard(natyli);
    //create and add pooky
    const pooky = new Character("Pooky the Vicious", "allies", "hero");
    deck.addCard(pooky);
    //create and add wrench
    const wrench = new Character("Wrench", "allies", "hero");
    deck.addCard(wrench);
    //create and add keet
    const keet = new Character("Keet the Treasure Hunter", "allies", "hero");
    deck.addCard(keet);
    //create and add nitrel
    const nitrel = new Character("Nitrel the Sapper", "allies", "hero");
    deck.addCard(nitrel);
    //create and add adonis
    const adonis = new Character("The Magnificent Adonis, Bard of the Ages", "allies", "hero");
    deck.addCard(adonis);
    //create and add lichKing
    const lichKing = new Character("The Lich King", "allies", "villan");
    deck.addCard(lichKing);
    //create and add ohava
    const ohava = new Character("Ohava the Grand Cleric", "allies", "hero");
    deck.addCard(ohava);
    //create and add murgath
    const murgath = new Character("Murgath the Blessed", "allies", "villan");
    deck.addCard(murgath);
    //create and add piper
    const piper = new Character("Piper, Eagle-Eyed Sniper", "allies", "hero");
    deck.addCard(piper);
    //create and add ripsnarl
    const ripsnarl = new Character("Ripsnarl, Bad Dog", "allies", "villan");
    deck.addCard(ripsnarl);

}

prepDeck();

const currentDeck = deck.getDeck();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log("this is a card in the deck " + currentDeck[getRandomInt(currentDeck.length)].name);