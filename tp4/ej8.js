var numeros=[460,460,460,345,230,600,130,1200,500,460];
document.write(numeros.join(" - "));
document.write("<br>");
aumento=numeros.map((numeros)=>numeros+(numeros*0.15));
document.write("<br>");
document.write(aumento.join(" - "));
var maymen = aumento.filter((aumento)=>aumento>500 || aumento<200 );
document.write(maymen);