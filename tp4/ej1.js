var numeros=[100,200,300,100,300,600,900,1200,500,400];
document.write(numeros.join(" - "));
aumento=numeros.map((numeros)=>numeros+(numeros*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
