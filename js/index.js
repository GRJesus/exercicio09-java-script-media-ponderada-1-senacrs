//1) Faça um programa em Javascript que leia as
//3 notas de um aluno e calcule a média final
//deste aluno. Considerar que a média é
//ponderada e que o peso das notas é: 2,3 e 5,
//respectivamente

var a = parseInt(prompt("Insira a primeira nota"));
var b = parseInt(prompt("Insira a segunda nota"));
var c = parseInt(prompt("Insira a terceira nota"));
var d = 2; //nota a colocar é 8
var e = 3; //nota a colocar é 6
var f = 5; //nota a colocar é 7
var sum = (a * d) + (b * e) + (c * f);

if (sum <=0){
    document.body.append ("Nota inválida");
} else {
    var x1 = sum / (d + e + f);
    document.body.append ("Sua média final é " + x1)
}
