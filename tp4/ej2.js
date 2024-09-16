var numeros=[100,230,300,100,230,600,230,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
var iguales = numeros.filter((numeros)=>numeros == 230);
document.write(iguales);