const posts = [
    {
        titulo: 'POST 1',
        conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita voluptate, aliquam, iste similique molestiae aliquid'
    },
    {
        titulo: 'POST 2',
        conteudo: 'Dicta aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint'
    },
    {
        titulo: 'POST 2',
        conteudo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    }
];

const objeto=document.getElementById('paragrafo1');

for (var loop=0;loop<posts.length;loop++)
{
    const postar = posts[loop];

    const post=document.createElement('article');
    post.classList.add('textos');

    const nome=document.createElement('h2');
    nome.classList.add('titulos')

    const tituloTxt=document.createTextNode(postar.titulo);
    nome.appendChild(tituloTxt);
    post.appendChild(nome);

    const interior=document.createElement('p');
    const texto = document.createTextNode(postar.conteudo);
    interior.appendChild(texto);
    post.appendChild(interior);

    objeto.appendChild(post);

    const linha=document.createElement('br');
    objeto.appendChild(linha);
}