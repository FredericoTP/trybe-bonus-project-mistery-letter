# :construction: README em construção ! :construction:

# :computer: Trybe-03-Project-Pixels-Art :computer:

Nesse projeto foi desenvolvido uma aplicação que gera cartas misteriosas. A pessoa usuária digita em um campo de texto e as palavras são apresentadas com uma aparência de uma carta onde cada palavra possui uma estilização própria.

# Acesse o projeto clicando [aqui]()! :green_heart:

<br />

<details>
<summary>
  
## 1- Requisitos
  
</summary>
 
### 1 - Crie um `input` com o `ID` `carta-texto` onde a pessoa usuária poderá digitar o conteúdo da carta.

Sua página deve conter um input com <code>ID</code> <code>carta-texto</code> <br />

### 2 - Crie um parágrafo com a `tag` `p` e `ID` `carta-gerada` onde a pessoa usuária verá o resultado de sua carta misteriosa.

Sua página deve conter um parágrafo <code>p</code> com <code>ID</code> <code>carta-gerada</code><br />

### 3 - Crie um botão com `ID` `criar-carta` que deve gerar a carta misteriosa ao ser clicado.

<details>
  <summary>Sua página deve conter um botão que, ao ser clicado, gera a carta misteriosa dentro do parágrafo criado no requisito 2</summary><br />

- Crie um botão com `ID` `criar-carta`;

- Crie a carta misteriosa colocando a `tag` `span` em cada palavra.

</details>

### 4 - Faça com que o input com `ID` `carta-texto` permaneça com o texto digitado após clicar no botão de `ID` `criar-carta`.

O input com o <code>ID</code> <code>carta-texto</code> deve permanecer com o texto digitado<br />

### 5 - Crie a mensagem 'Por favor, digite o conteúdo da carta.' para caso a pessoa usuária não preencha o campo ou preencha apenas com espaços em branco.

Deve aparecer a mensagem "Por favor, digite o conteúdo da carta" no parágrafo criado no requisito 2 quando não houver texto digitado pela pessoa usuária<br />

### 6 - Crie a classe `newspaper`.

<details>
  <summary>A classe <code>newspaper</code> deve possuir cor de fundo, fonte Times New Roman e peso de fonte com o valor 700</summary><br />

- Cria a classe `newspaper` com `background-color` igual a `rgb(250, 235, 215)`;
- A classe `newspaper` deve possuir `font-family` igual a `Times New Roman`;
- A classe `newspaper` deve possuir `font-weight` igual a `700`.

</details>

### 7 - Crie a classe `magazine1`.

<details>
  <summary>A classe <code>magazine1</code> deve possuir cor de fundo, cor de fonte diferente, fonte do tipo Verdana, peso de fonte com o valor 900 e todas as letras maiúsculas</summary><br />

- Crie a classe `magazine1` com `background-color` igual a ` rgb(0, 128, 128)`;
- A classe `magazine1` deve possuir `color` igual a `rgb(255, 255, 255)`;
- A classe `magazine1` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine1` deve possuir `font-weight` igual a `900`;
- A classe `magazine1` deve possuir `text-transform` igual a `uppercase`.

</details>

### 8 - Crie a classe `magazine2`.

<details>
  <summary>A classe <code>magazine2</code> deve possuir uma imagem de fundo, cor de fonte diferente, fonte do tipo Verdana e peso de fonte com o valor 900</summary><br />

- Crie a classe `magazine2` com `background-image` igual a `images/pink-pattern.png`;
- A classe `magazine2` deve possuir `color` igual a `rgb(255, 0, 255)`;
- A classe `magazine2` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine2` deve possuir `font-weight` igual a `900`.

</details>

### 9 - Crie a classe `medium`.

A classe <code>medium</code> deve possuir <code>font-size</code> com o valor <code>20px</code> e <code>padding</code> com o valor <code>8px</code><br />

### 10 - Crie a classe `big`.

A classe <code>big</code> deve possuir <code>font-size</code> com o valor <code>30px</code> e <code>padding</code> com o valor <code>10px</code>.<br />

### 11 - Crie a classe `reallybig`.

A classe <code>reallybig</code> deve possuir <code>font-size</code> com o valor <code>40px</code> e <code>padding</code> com o valor <code>15px</code>.<br />

### 12 - Crie a classe `rotateleft`.

A classe <code>rotateleft</code> deve possuir a propriedade <code>transform</code> com o valor <code>matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)</code><br />

### 13 - Crie a classe `rotateright`.

A classe <code>rotateright</code> deve possuir a propriedade <code>transform</code> com o valor <code>matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)</code><br />

### 14 - Crie a classe `skewleft`.

A classe <code>skewleft</code> deve possuir a propriedade <code>transform</code> com o valor <code>matrix(1, 0, 0.176327, 1, 0, 0)</code><br />

### 15 - Crie a classe `skewright`.

A classe <code>skewright</code> deve possuir a propriedade <code>transform</code> com o valor <code>matrix(1, 0, -0.176327, 1, 0, 0)</code><br />

### 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

<details>
  <summary>Separe as classes, criadas nos requisitos anteriores, em grupos e utilize o <code>Javascript</code> para atribuir essas classes de forma aleatória para as palavras com a tag <code>span</code> </summary><br />

- Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

- As classes devem ser adicionadas às tags `span` de forma **aleatória**.

- Sempre adicione mais de uma classe em uma palavra.

</details>

## Requisitos Bônus:

### 17 - Adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.

Adicione a função para atribuir novamente as classes nas palavras quando clicadas <br />

### 18 - Crie um parágrafo com o `ID` `carta-contador` que deve contar o número de palavras geradas naquela carta.
  
Sua página deve conter um parágrafo <code>p</code> com <code>ID</code> <code>carta-contador</code> que conte quantas palavras foram geradas na carta<br />

</details>
<br />

## 2- Nota do Projeto

## 100% :heavy_check_mark:

<br />

## 3- Preview
