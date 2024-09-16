var numeros=[100,230,300,150,230,600,130,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
aumento=numeros.map((numeros)=>numeros+(numeros*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
var menores = aumento.filter((aumento)=>aumento<200);
document.write(menores);