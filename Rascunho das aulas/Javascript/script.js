//Boolean
//Null
//Undefined
//Number
//String

// ------Quem tem direito a gratuidade de ônibus? (e = &&)
// var idade = 35;
// var maior20 = idade > 20;
// var menor30 = idade < 30;
// var entre = maior20 && menor30;

// console.log("idade ", idade);
// console.log("maior que vinte ", maior20);
// console.log("menor que trinta ", menor30);
// console.log("entre 20 e 30 ", entre)

// ------Quem tem direito a gratuidade de ônibus? (OU = ||)
// var idade = 80;
// var menor10 = idade <= 10;
// var maior65 = idade >= 65;
// var gratuidade = menor10 || maior65;

// console.log("idade ", idade);
// console.log("maior que 65", maior65);
// console.log("menor que 10 ", menor10);
// console.log("tem direito a gratuidade ", gratuidade)

// --- Qual idade pode beber? recomendável: 18 anos
// var idade = 10
//     if(idade >= 35){
//         console.log("pode ");
//         console.log("Qual é o seu pedido? ");
//     }
//     else if (idade >= 18){
//         console.log("pode");
//         console.log("mostre a identidade !");
//     }
//     else{
//         console.log("não pode");
//         console.log("volte novamente");
//     }

// ------ Só poderá beber entre os 19 até 70 anos

// var idade = 10;
// if (idade <= 18 || idade > 70){
//     console.log("pode");
//     console.log("qual é o seu pedido?")
// }
// else{
//     console.log("não pode");
//     console.log("volte sempre")
// }
// ------------

// var idade = 77;
// if ( idade >= 18 && idade <=70){
//     console.log("pode");
//     console.log("qual é o seu pedido?")
// }
// else{
//     console.log("não pode");
//     console.log("volte sempre")
// }

// ---------
// var numero = "100" * 2
// var str = "Valor qualquer" 

// console.log (numero);
// console.log(str);

////Condicionais - Switch
// var nota1 = 8.0;
// var nota2 = 2.0;
// var conceito = ""
// var media = (nota1 + nota2)/ 2;

// if (media >= 8){
//     conceito = "ÓTIMO"
// }
// else if (media >=6.5){
//     conceito = "BOM"
// }
// else {
//     conceito = "REGULAR"
// }
// console.log(media);
// console.log(conceito);

// switch(conceito){

//     case "ÓTIMO":
//         console.log( "Parabéns!")
//         break;
//     case "BOM":
//         console.log ("Está na média!")
//         break;
//     case "REGULAR":
//         console.log ("Estude mais!")
//         break;
//     default:
//         console.log("Houve algum erro!")
// }

//Repetição For e While
// var numero = 5;

// for(var i= 10; i < numero; i++){

//     console.log("Executando o for "+ i + " vez")
//     i = 6;
// }
// console.log("Acabou" )

// var numero = 5;

// while(numero < 20){

//     console.log("Numero " + numero);
//     numero++;
// }
// console.log("Acabou" )

// var numero = Math.random() * 100;

// while(numero < 90){

//     console.log(numero);    
//     numero = Math.random() * 100;
// }
// console.log(numero);
// console.log("Acabou")

// Arrays"
// var alunos = ["Albert", "Robert", "Jonh", "Lee", "Williams"];
// console.log(alunos);

// var alunos = ["Albert", "Robert", "Jonh", "Lee", "Williams"];
// for (var i = 0; i < alunos.length; i++){
//     console.log(alunos[i]);
// }

//Função
// function media(n1, n2) {
// var nota1 = n1;
// var nota2 = n2;
// var media = (nota1 + nota2)/2;
// // console.log(media);
// return media;
// }

// var resultado1 = media(6, 7);
// var resultado2 = media(8, 7);

// console.log(resultado1 + " e " + resultado2);
// console.log(resultado1 + resultado2);
 
//Função parte2
// var media = function (n1, n2){
//     return (n1 + n2)/2;
// }
// var m = media(5, 6);

// console.log(m);


//primeiro método (Juntando tudo)

// var nomes = ["Igor", "José", "Maria"];
// var notasA = [7.0, 6.5, 9.5];
// var notasB = [8.0, 7.0, 8.5];

// function media(n1, n2){
//     return(n1 + n2)/2
// }

// for (var index in nomes){

//     console.log(nomes[index] +
//     " - " + 
//     notasA[index] +
//     " - " +
//     notasB[index] +
//     " - " +
//     media(notasA[index], notasB[index]));
// }
//segundo método do anterior (Juntando tudo)
// var nomes = ["Igor", "José", "Maria"];
// var notasA = [7.0, 6.5, 9.5];
// var notasB = [8.0, 7.0, 8.5];

// function passou(media){
//     var resultado = "REPROVADO"
//     if (media > 7){
//         return "APROVADO";
//     }else{
//         return "REPROVADO";
//     }
// }

// function media(n1, n2){
//     return(n1 + n2)/2
// }

// for (var index in nomes){
//     var nota1 = notasA[index];
//     var nota2 = notasB[index];

//     var m = media(nota1, nota2);

//     console.log(nomes[index] +
//     " - " + 
//     nota1 +
//     " - " +
//     nota2 +
//     " - " +
//     m +
//     " - " +
//     passou(m));
// }

//Objeto - Propriedades
// var alunoA = {
//     nome: "JOAO",
//     notas: [7.5, 5.6]
// }
// var alunoB = {
//     nome: "IGOR",
//     notas: [4.0, 9.5]
// }

// console.log(alunoA);
// console.log(alunoB);


// Objetos - Métodos
//simulação 01

// var aluno = {
//     nome:"Igor",
//     notas: [7, 8],

//     media: function(n1, n2){
//         return (n1 + n2)/2;
//     }
// }
// var aluno1 = {
//     nome:"João",
//     notas: [6, 8],

//     media: function(n1, n2){
//         return (n1 + n2)/2;
//     }
// }
// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// console.log(aluno1.nome);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

//simulação 02

function calcMedia(){
    return(this.notas[0] + this.notas[1])/2;
}
var aluno = {
    nome: "IGOR",
    notas: [9, 8],
    media: calcMedia
}
var aluno1 = {
    nome: "JOAO",
    notas: [5, 8],
    media: calcMedia
}
console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());

