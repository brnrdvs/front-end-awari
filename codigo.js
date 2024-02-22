const header=document.getElementById("header"), conteudo=document.getElementById("conteudo"), footer=document.getElementById("footer");
let paginaInicial;

criarConteudo();

function criarConteudo()
{
    let titulo=document.createElement("h1");
    paginaInicial=true;

    titulo.innerHTML='EXERCÍCIOS';
    header.appendChild(titulo);

    for (let loop=1; loop<=10; loop++)
    {
        let exercicios=document.createElement("a"), quebra=document.createElement('br');
        let texto='EXERCÍCIO '+loop, id='exercicio'+loop, funcao='exercicio'+loop+'()';

        exercicios.innerHTML=texto;
        exercicios.id=id;
        exercicios.href="#";
        exercicios.setAttribute('onclick',funcao);

        conteudo.appendChild(exercicios);
        conteudo.appendChild(quebra);
    }
}

function apagar()
{
    while (header.hasChildNodes())
    {
        header.removeChild(header.firstChild);
    }    

    while (conteudo.hasChildNodes())
    {
        conteudo.removeChild(conteudo.firstChild);
    }

    while (footer.hasChildNodes())
    {
        footer.removeChild(footer.firstChild);
    }
}

function botaoVoltar()
{
    let retornar=document.createElement('a');

    retornar.innerHTML='VOLTAR';
    retornar.href='#';
    retornar.setAttribute('onclick','voltar()');

    footer.appendChild(retornar);
}

function voltar()
{
    apagar();
    criarConteudo();
}

function reformular(num)
{
    apagar();

    let titulo=document.createElement('h1');

    titulo.innerHTML='EXERCICIO '+num;
    header.appendChild(titulo);

    let texto=document.createElement('p');

    conteudo.innerHTML=' ';
    conteudo.id='texto';
    conteudo.appendChild(texto);

    botaoVoltar();
    paginaInicial=false;
}

function contagem(num)
{
    if (!paginaInicial) {
    document.getElementById('texto').innerHTML+=' '+num; }
}

function exercicio1()
{
    reformular(1);

    document.getElementById('texto').innerHTML='CONTAGEM DE 1 A 10: <br>';

    let num=1;
    let intervalo=setInterval(function() { 
        contagem(num); 
        num++; 
        if (num>10) { clearInterval(intervalo); }
    }, 200);
}

function exercicio2()
{
    reformular(2);

    document.getElementById('texto').innerHTML='CONTAGEM DE 10 A 1: <br>';

    let num=10;
    let intervalo=setInterval(function() { 
        contagem(num); 
        num--; 
        if (num<1) { clearInterval(intervalo); }
    }, 200);
}

function exercicio3()
{
    reformular(3);

    let form=document.createElement('form'), label=document.createElement('label'), input=document.createElement('input');
    
    label.setAttribute('for','numero');
    label.appendChild(form);

    input.setAttribute('type','text');
    input.setAttribute('name','numero');
    input.id='numero';
    input.appendChild(form);

    conteudo.appendChild(form);
}

function exercicio4()
{
    reformular(4);
}

function exercicio5()
{
    reformular(5);
}

function exercicio6()
{
    reformular(6);
}

function exercicio7()
{
    reformular(7);
}

function exercicio8()
{
    reformular(8);
}

function exercicio9()
{
    reformular(9);
}

function exercicio10()
{
    reformular(10);
}