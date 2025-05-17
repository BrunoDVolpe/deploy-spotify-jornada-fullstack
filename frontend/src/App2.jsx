import React from "react";

const App2 = () => {
    return <div>App2</div>;
}

export default App2;

// rafce ou rfce
// Atalho pra criar uma estrutura básica de componente
// Precisa ter a extenção React Extensions (ou similar)

// Arrow Function
// const App2 = () => <h1>Olá, mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de variável, função...
// camelCase

// export default, posso importar com qualquer nome e sem chaves
// export "sem default, só posso importar entre chaves e com o nome exportado

// self closing tag
// <Header></Header>
// <Header />

// Reset de CSS para resetar o 'agent', que é o CSS do navegador.
// O b[asico é 
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// box-sizing: border-box;
// Essa propriedade vai definir o que queremos quanto ao tamanho do elemento. O padrão aponta o tamanho do elemento como sendo
// apenas o conteúdo, mas com o border-box o tamanho é tido como o elemento + padding + borda. ou seja um width de 500px
//  seria a largura dessas 3 propriedades juntas.

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// Exemplos
// header
// header__link
// header__link--small
// Nomes compostos são separados por hífen

// Tag vazia em React se chama Fragment ou Fragmento

// Medida pra tela: 100vh -> 100svh ocupa a tela inteira e corrige no mobile quando aparece a opção da url.

// Quando precisar iterar n vezes, podemos simular o "Range(n)" como Array(n).fill()
// o .fill() é necessário porque o Array criaria elementos vazios e dessa forma não tem como iterar,
// então o fill preenche com undefined e dá certo

