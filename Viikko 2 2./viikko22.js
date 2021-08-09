function parillinen()
{
var luku1;
luku1 = document.getElementById('yksi').value;
if(luku1 >=0)
document.write("luku on positiivinen");
else{
document.write("luku on negatiivinen");
}
}

function vkpv()
{
  var vkpv;
  vkpv = document.getElementById('kaksi').value;
  if(vkpv == 1)
  document.write("Maanantai");
  else if(vkpv == 2)
  document.write("Tiistai");
  else if(vkpv == 3)
  document.write("Keskiviikko");
  else if(vkpv == 4)
  document.write("Torstai");
  else if(vkpv == 5)
  document.write("Perjantai");
  else if(vkpv == 6)
  document.write("Lauantai");
  else if(vkpv == 7)
  document.write("Sunnuntai")
  else {
  alert("Anna luku 1-7!");
  }
}


function vuosiluku() {
  var vluku;
  vluku = document.getElementById('kolme').value;
  if(vluku % 400 == 0)
  document.write("Vuosi on karkausvuosi");
  else if(vluku % 100 == 0)
  document.write("Vuosi ei ole karkaus vuosi");
  else if(vluku % 4 == 0)
  document.write("Vuosi on karkausvuosi");
  else {
    document.write("Vuosi ei ole karkaus vuosi");
  }
}



function keskiarvo() {
  var luku1 = parseInt(document.getElementById('eka').value);
  var luku2 = parseInt(document.getElementById('toka').value);
  var luku3 = parseInt(document.getElementById('kolmas').value);
  var luku4 = parseInt(document.getElementById('neljäs').value);
  var luku5 = parseInt(document.getElementById('viides').value);
  var summa;
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var karvo;
  karvo = summa / 5;
  document.write("Lukujen summa on " + summa + " ja niiden keskiarvo on " + karvo);
  //alert(summa);
}




function laske() {
  var luku;
  luku = document.getElementById('viisi').value;
  var lause;
  lause = luku + "x1 = " + luku * 1 + ", ";
  lause += luku + "x2 = " + luku * 2 + ", ";
  lause += luku + "x3 = " + luku * 3 + ", ";
  lause += luku + "x4 = " + luku * 4 + ", ";
  lause += luku + "x5 = " + luku * 5 + ", ";
  lause += luku + "x6 = " + luku * 6 + ", ";
  lause += luku + "x7 = " + luku * 7 + ", ";
  lause += luku + "x8 = " + luku * 8 + ", ";
  lause += luku + "x9 = " + luku * 9 + ", ";
  lause += luku + "x10 = " + luku * 10 + ", ";
  document.write("Laskutoimituksen tulos on : " + lause);
}
