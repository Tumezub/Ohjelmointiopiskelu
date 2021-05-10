function jarjesta()
{
var luku1, luku2, luku3;
luku1 = ("document.getElementById('eka').value");
luku2 = ("document.getElementById('toka').value");
luku3 = ("document.getElementById('kolmas').value");
document.write("Annoit luvut" + ' ' + luku1 + ' ' + luku2 + ' ' + luku3);
if (luku1 < luku2 && luku1 < luku3)
{
  if(luku2 < luku3)
  {
    document.write("Lukujen järjestys :" + ' ' + luku1 + ' ' + luku2 + ' ' + luku3);
  else
  {
    document.write("Lukujen järjestys :" + ' ' + luku1 + ' ' + luku3 + ' ' + luku3);
  }
 }
else if
