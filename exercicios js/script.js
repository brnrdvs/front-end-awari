const idades=[15, 35, 33, 12, 76, 34, 28, 98, 44, 26];

console.log('EXERCICIO 1: ');
console.log(contagem(1,10));

console.log('EXERCICIO 2: ');
console.log(contagem(10,1));

console.log('EXERCICIO 3: ');
console.log(contagem(74,97));

console.log('EXERCICIO 4: ');
console.log(calcularPrimos(100));

console.log('EXERCICIO 5: ');
mostrarTabuadas(1,10,10);

console.log('EXERCICIO 6: ');
mostrarTabuadas(97,97,10);

console.log('EXERCICIO 7: ')
paresImpares(97);

console.log('EXERCICIO 8: ');
console.log(mediaIdades());

console.log('EXERCICIO 9: ');
console.log(maioresDeIdade(18));

console.log('EXERCICIO 10: ')
retangulo(8,8);

console.log('EXERCICIO 11: ');
triangulo(12);


function contagem(inicio, fim)
{
    let numeros='.';
    let razao=1;

    if (inicio>fim)
    {
        razao=-1;
    }

    while (inicio!=fim+razao) 
    {
        numeros+=inicio+', ';
        inicio+=razao;
    } 

    return numeros.substring(1,numeros.length-2);
}

function calcularPrimos(tamanho)
{
    let primos='.';

    for (let loop1=1; loop1<=tamanho; loop1++)
    {
        let divisores=0;

        for (let loop2=1; loop2<loop1; loop2++)
        {
            if (loop1%loop2==0)
            {
                divisores++;
            }
        }

        if (divisores<=1)
        {
            primos+=loop1+', ';
        }
    }

    return primos.substring(1,primos.length-2);
}

function mostrarTabuadas(inicio, fim, tamanho)
{
    for (let loop=inicio; loop<=fim; loop++)
    {
        console.log(calcularTabuada(loop,tamanho));
    }
}

function calcularTabuada(num, tamanho)
{
    let tabuada='.';

    for (let loop=1; loop<=tamanho; loop++)
    {
        let multiplicacao=num*loop;
        tabuada+=multiplicacao+', ';
    }

    return tabuada.substring(1,tabuada.length-2);
}

function paresImpares(num)
{
    let pares='.', impares='.';

    for (loop=1; loop<=num; loop++)
    {
        if (loop%2==0) 
        {
            pares+=loop+', ';
        }

        else
        {
            impares+=loop+', ';
        }
    }

    console.log('PARES: ',pares.substring(1,pares.length-2));
    console.log('IMPARES: ',impares.substring(1,impares.length-2));
}

function mediaIdades()
{
    let soma=0, tamanho=idades.length; 

    for (loop=0; loop<tamanho; loop++)
    {
        soma+=idades[loop];
    }

    return soma/tamanho;
}

function maioresDeIdade(limite)
{
    let maiores=0;

    for (loop=0; loop<idades.length; loop++)
    {
        if (idades[loop]>=limite)
        {
            maiores++;
        }
    }

    return 'A quantidade de pessoas maiores de '+limite+' anos é '+maiores+'.';
}

function retangulo(largura, altura)
{
    let aresta='';

    for (let loop=1; loop<=largura; loop++)
    {
        aresta+='*';
    }

    for (loop=1; loop<=altura; loop++)
    {
        console.log(loop+aresta);
    }
}

function triangulo(tamanho)
{
    let aresta='';

    for (let loop=1; loop<=tamanho; loop++)
    {
        aresta+='*';
        console.log(aresta);
    }
}
