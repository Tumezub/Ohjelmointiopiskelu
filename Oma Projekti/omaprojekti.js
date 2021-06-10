function pyorayta() {

  var noppa;
  var img = document.createElement("img");
  noppa = Math.floor(Math.random()*6)+1;
  if(noppa == 1)
  alert("Noppa pyöräytti luvun 1");
  else if(noppa == 2)
  alert("Noppa pyöräytti luvun 2");
  else if(noppa == 3)
  alert("Noppa pyöräytti luvun 3");
  else if(noppa == 4)
  alert("Noppa pyöräytti luvun 4");
  else if(noppa == 5)
  alert("Noppa pyöräytti luvun 5");
  else if(noppa == 6)
  alert("Noppa pyöräytti luvun 6");
  else {
    alert("Noppa pyöräytti luvun jota nopasta ei löydy");
  }
}
