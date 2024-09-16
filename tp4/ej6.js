var numeros=[100,345,300,345,230,600,130,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
aumento=numeros.map((numeros)=>numeros+(numeros*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
var distintos = aumento.filter((aumento)=>aumento!=345);
document.write(distintos);