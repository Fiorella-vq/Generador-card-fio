/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let cardValues= [2,3,4,5,6,7,8,9,10,"A","J","Q","K"] ;
let cardPintas=  ["♦","♥","♠","♣"] ;

function generadorCard(arr){
Math.floor(Math.random()*cardValues.length);
return arr [Math.floor(Math.random()*arr.length)] ;
}
const cardaleatorio = generadorCard (cardValues);

document.querySelector(".value").innerHTML = cardaleatorio;

const  pintaleatorio = generadorCard (cardPintas);

document.querySelector(".pinta").innerHTML = cardaleatorio;

};
