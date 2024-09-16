var precios=[345,230,300,100,230,600,230,1200,500,400];
document.write(precios.join(" - "));
document.write("<br>");
aumento=precios.map((precios)=>precios+(precios*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
var iguales = aumento.filter((aumento)=>aumento == 345);
document.write(iguales);