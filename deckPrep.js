import { Deck } from "./classes/deckClass.js";
import { Character } from "./classes/characterClass.js";

const deck = new Deck();
//loads the cards to an empty array stored in deck
const prepDeck = ()=>{
  deck.emptyDeck();
  //create and add kaylin
  const kaylin = new Character("Kaylin the Renegade", "rdi3", "hero");
  deck.addCard(kaylin);
  //create and add phrenk
  const phrenk = new Character("Brewmaster Phrenk", "rdi3", "hero");
  deck.addCard(phrenk);
  //create and add serena
  const serena = new Character("Serena the Pious", "rdi3", "hero");
  deck.addCard(serena);
  //create and add wizgille
  const wizgille = new Character("Wizgille the Tinkerer", "rdi3", "hero");
  deck.addCard(wizgille);
  //create and add joran
  const joran = new Character("Joran the Trickster", "rdi5", "hero");
  deck.addCard(joran);
  //create and add lizwick
  const lizwick = new Character("Lizwick the Collector", "rdi5", "hero");
  deck.addCard(lizwick);
  //create and add sera
  const sera = new Character("Sera the Fleetfooted", "rdi5", "hero");
  deck.addCard(sera);
  //create and add zakhan
  const zakhan = new Character("Zakhan the Drunken Master", "rdi5", "hero");
  deck.addCard(zakhan);
  //create and add amundyr
  const amundyr = new Character("Amundyr the Cursed", "rdi6", "villain", true);
  deck.addCard(amundyr);
  //create and add daareka
  const daareka = new Character("Daareka the Mindbreaker", "rdi6", "villain", true);
  deck.addCard(daareka);
  //create and add torglesnarf
  const torglesnarf = new Character("Torglesnarf Duncleton, First of His Name", "rdi6", "villain", true);
  deck.addCard(torglesnarf);
  //create and add vlaslo
  const vlaslo = new Character("Baron von Vlazlo", "rdi6", "villain", true);
  deck.addCard(vlaslo);
  //create and add jasper
  const jasper = new Character("Jasper the Bouncer", "rdi7", "hero");
  deck.addCard(jasper);
  //create and add molly
  const molly = new Character("Molly the Stablehand", "rdi7", "hero");
  deck.addCard(molly);
  //create and add warthorn
  const warthorn = new Character("Warthorn Redbeard", "rdi7", "hero");
  deck.addCard(warthorn);
  //create and add the wench
  const wench = new Character("The Wench", "rdi7", "hero");
  deck.addCard(wench);
  //create and add farai
  const farai = new Character("Father Farai", "rdi8", "hero");
  deck.addCard(farai);
  //create and add lucky
  const lucky = new Character("Lucky the Scofflaw", "rdi8", "hero");
  deck.addCard(lucky);
  //create and add nerodia
  const nerodia = new Character("Nerodia the Petrifier", "rdi8", "villian", true);
  deck.addCard(nerodia);
  //create and add phyll
  const phyll = new Character("Phyll Startusk", "rdi8", "hero");
  deck.addCard(phyll);
  //create and add samantha
  const samantha = new Character("Samantha the Bookie", "rdi8", "hero");
  deck.addCard(samantha);
  //create and add dale
  const dale = new Character("Dale the Mycologist", "rdi9", "hero");
  deck.addCard(dale);
  //create and add jett
  const jett = new Character("Jett the Courier", "rdi9", "hero");
  deck.addCard(jett);
  //create and add petra
  const petra = new Character("Petra the Devious", "rdi9", "villain", true);
  deck.addCard(petra);
  //create and add terci
  const terci = new Character("Doctor Terci", "rdi9", "hero");
  deck.addCard(terci);
  //create and add ygella
  const ygella = new Character("Beastsergeant Ygella", "rdi9", "hero");
  deck.addCard(ygella);
  //create and add evilPooky
  const evilPooky = new Character("Evil Pooky", "allies", "villain", true);
  deck.addCard(evilPooky);
  //create and add halden
  const halden = new Character("Halden the Unhinged", "allies", "hero");
  deck.addCard(halden);
  //create and add natyli
  const natyli = new Character("Witchdoctor Natyli", "allies", "hero");
  deck.addCard(natyli);
  //create and add pooky
  const pooky = new Character("Pooky the Vicious", "allies", "hero", true);
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
  const lichKing = new Character("The Lich King", "allies", "villain");
  deck.addCard(lichKing);
  //create and add ohava
  const ohava = new Character("Ohava the Grand Cleric", "allies", "hero");
  deck.addCard(ohava);
  //create and add murgath
  const murgath = new Character("Murgath the Blessed", "allies", "villain");
  deck.addCard(murgath);
  //create and add piper
  const piper = new Character("Piper, Eagle-Eyed Sniper", "allies", "hero");
  deck.addCard(piper);
  //create and add ripsnarl
  const ripsnarl = new Character("Ripsnarl, Bad Dog", "allies", "villain");
  deck.addCard(ripsnarl);
  //create and add roxana
  const roxana = new Character("Roxana, Adventurous Chef", "smorgasbox", "hero");
  deck.addCard(roxana);
  //create and add alaric
  const alaric = new Character("Trapmaster Alaric", "rdi10", "hero");
  deck.addCard(alaric);
  //create and add karl
  const karl = new Character("Karl Bookhammer", "rdi10", "hero");
  deck.addCard(karl);
  //create and add dominique
  const dominique = new Character("Dominique the Resourceful", "rdi10", "hero");
  deck.addCard(dominique);
  //create and add elsinder
  const elsinder = new Character("Eisinder, the Frozen Flame", "rdi10", "hero");
  deck.addCard(elsinder);
  //create and add oozwald
  const oozwald = new Character("Oozwald, \“Normal\” Adventurer", "rdi10", "hero");
  deck.addCard(oozwald);
  //create and add valeria
  const valeria = new Character("Dark Priestess Valeria", "rdi10", "villain");
  deck.addCard(valeria);
}


export { prepDeck, deck };