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
  if(vluku % 4 == 0)
  document.write("Vuosi on karkausvuosi");
  else if(vluku % 100 == 0)
  document.write("Vuosi on karkausvuosi");
  else if(vluku % 400 == 0)
  document.write("Vuosi on karkausvuosi");
  else {
    document.write("Vuosi ei ole karkaus vuosi");
  }
}



function keskiarvo() {
  var array;
  var array2;
  array = [document.getElementById('eka').value, document.getElementById('toka').value, document.getElementById('kolmas').value, document.getElementById('neljäs').value, document.getElementById('viides').value];
  array2 = [document.getElementById('eka').value, document.getElementById('toka').value, document.getElementById('kolmas').value, document.getElementById('neljäs').value, document.getElementById('viides').value];
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  var avg = total / array.length;

  var total2;
  total2 = document.getElementById('eka').value + document.getElementById('toka').value + document.getElementById('kolmas').value + document.getElementById('neljäs').value + document.getElementById('viides').value;
  document.write("lukujen summa on " + total2 + " ja keskiarvo on " + avg);
  //alert(array.length);
  //alert(total2);
}




function laske() {
  var luku;
  luku = document.getElementById('viisi');
  var lause = 0;
  var lause2 = lause;
  var lause3 = lause2;
  var lause4 = lause3;
  var lause5 = lause4;
  var lause6 = lause5;
  var lause7 = lause6;
  var lause8 = lause7;
  var lause9 = lause8;
  var lause10 = lause9;
  lause += luku + "x1 = " + luku * 1;
  lause2 += luku + "x2 = " + luku * 2;
  lause3 += luku + "x3 = " + luku * 3;
  lause4 += luku + "x4 = " + luku * 4;
  lause5 += luku + "x5 = " + luku * 5;
  lause6 += luku + "x6 = " + luku * 6;
  lause7 += luku + "x7 = " + luku * 7;
  lause8 += luku + "x8 = " + luku * 8;
  lause9 += luku + "x9 = " + luku * 9;
  lause10 += luku + "x10 = " + luku * 10;
  document.write("Laskutoimituksen tulos on : " + lause + ' ' + lause2 + ' ' + lause3 + ' ' + lause4 + ' ' + lause5 + ' ' + lause6 + ' ' + lause7 + ' ' + lause8 + ' ' + lause9 + ' ' + lause10);
}
