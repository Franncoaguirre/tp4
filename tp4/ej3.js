var numeros=[100,230,300,100,230,600,230,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
aumento=numeros.map((numeros)=>numeros+(numeros*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
var entre = aumento.filter((aumento)=>aumento>=300 && aumento<=500);
document.write(entre);
