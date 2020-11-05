# Boas vindas ao repositório do projeto de Receitas!

Esse foi meu projeto final de Front End da Trybe, feito junto com os
- [Raphael Ribeiro](https://github.com/raphaRS)
- [André Palhares](https://github.com/potew)
- [Wener](https://github.com/lucas-werner)

Tivemos 10 dias para desenvolver esse ilustre repositório, cumprindo os 88 requisitos, que foram avaliados automaticamente pelo github.
Usando especialmente, **React**, **Hooks** e **Content API**.
Usamos duas APIs distintas, uma para comidas, o [TheMealDB](https://www.themealdb.com/), e outra para bebidas [CockTailDB](https://www.thecocktaildb.com/api.php)
O layout tinha como foco dispositivos móveis.

---

### Para rodar

1. Clone o repositório
  * `git clone git@github.com:GustafFig/App-de-Receitas.git`.

2. Instale as dependências, inicialize o projeto e rode os testes
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)
    
3. Para Dev's
  * Rode os nosso testes:
   * `npm run test`
  * Rode os testes automáticos do desafio:
    * `npm run cy`
    * `npm run cy:open`

---

### Confira as Rotas!!

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/comidas`;
* Tela principal de receitas de bebidas: `/bebidas`;
* Tela de detalhes de uma receita de comida: `/comidas/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/bebidas/{id-da-receita}`;
* Tela de receita em processo de comida: `/comidas/{id-da-receita}/in-progress`;
* Tela de receita em processo de bebida: `/bebidas/{id-da-receita}/in-progress`;
* Tela de explorar: `/explorar`;
* Tela de explorar comidas: `/explorar/comidas`;
* Tela de explorar bebidas: `/explorar/bebidas`;
* Tela de explorar comidas por ingrediente: `/explorar/comidas/ingredientes`;
* Tela de explorar bebidas por ingrediente: `/explorar/bebidas/ingredientes`;
* Tela de explorar comidas por local de origem: `/explorar/comidas/area`;
* Tela de perfil: `/perfil`;
* Tela de receitas feitas: `/receitas-feitas`;
* Tela de receitas favoritas: `/receitas-favoritas`.

## Descrição dos Requisitos
  **Não vou te fazer ler todos os 88, ao invés disso, vou dar uma descrição sucinta das funcionalidades e páginas**

### 1 - A cobertura de testes unitários deve ser de no mínimo 90%.

## Tela de login

Essa tela tem o campo para email e senha de entrada, eles não são conferidos realmente em um banco de dados, mas tem que respeitar o formato de email e senha de mais de 6 caracteres.
No

### 5 - O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos. Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`. Caso contrário, deve estar ativado, não contendo a propriedade `disabled`.

##### As seguintes verificações serão feitas:

- O botão deve estar desativado se o email for inválido;
- O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos;
- O botão deve estar ativado se o email e a senha forem válidos.

### 6 - Após a submissão, 2 tokens devem ser salvos em `localStorage` identificados pelas chaves `mealsToken` e `cocktailsToken` (o token de teste é sempre "1").

### 7 - Após a submissão, o e-mail de pessoa usuária deve ser salvo em `localStorage` na chave `user` no formato `{ email: email-da-pessoa }`.

### 8 - Após a submissão e validação com sucesso do login, o usuário deve ser redirecionado para a tela principal de receitas de comidas.

## Header

### 9 - Todos os elementos devem respeitar os atributos descritos no protótipo para o header disponível na tela principal de receitas.

### 10 - Deve apresentar um ícone para a tela de perfil, um título e um ícone para a busca (caso exista no protótipo). Todas as [rotas](#rotas) serão verificadas. Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.

##### As seguintes verificações serão feitas:

- Não tem header na tela de login;
- O header tem os ícones corretos na tela de principal de receitas de comidas;
- O header tem os ícones corretos na tela de principal de receitas de bebidas;
- Não tem header na tela de detalhes de uma receita de comida;
- Não tem header na tela de detalhes de uma receita de bebida;
- Não tem header na tela de receita em processo de comida;
- Não tem header na tela de receita em processo de bebida;
- O header tem os ícones corretos na tela de explorar;
- O header tem os ícones corretos na tela de explorar comidas;
- O header tem os ícones corretos na tela de explorar bebidas;
- O header tem os ícones corretos na tela de explorar comidas por ingrediente;
- O header tem os ícones corretos na tela de explorar bebidas por ingrediente;
- O header tem os ícones corretos na tela de explorar comidas por local de origem;
- O header tem os ícones corretos na tela de perfil;
- O header tem os ícones corretos na tela de receitas feitas;
- O header tem os ícones corretos na tela de receitas favoritas.

### 11 - Ao clicar no botão de perfil, deve-se ir para a tela de perfil.

### 12 - Ao clicar no botão de busca, a barra de busca deve aparecer. O mesmo serve para escondê-la.

##### As seguintes verificações serão feitas:

- Ao clicar no botão de busca pela primeira vez a barra de busca aparece;
- Ao clicar no botão de busca pela segunda vez a barra de busca desaparece.

## Barra de busca - Header

### 13 - Todos os elementos devem respeitar os atributos descritos no protótipo para a barra de busca.

### 14 - A barra de busca deve ficar logo abaixo do header e deve possuir 3 _radio buttons_: `Ingrediente`, `Nome` e `Primeira letra`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após clicar no botão `Buscar`.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php).

##### Exemplo: Ao selecionar `Ingrediente` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.

##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de comidas.

##### As seguintes verificações serão feitas:

- Se o radio selecionado for `Ingrediente`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`;
- Se o radio selecionado for `Nome`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`;
- Se o radio selecionado for `Primeira letra`, a busca na API é feita corretamente pelo primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`;
- Se o radio selecionado for `Primeira letra` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensgem "Sua busca deve conter somente 1 (um) caracter".

### 15 - A busca deve ocorrer na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas.

##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de bebidas, já que a de comidas já foi verificada no requisito 15.

##### As seguintes verificações serão feitas:

- Na tela de bebidas, se o radio selecionado for `Ingrediente`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`;
- Na tela de bebidas, se o radio selecionado for `Nome`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`;
- Na tela de bebidas, se o radio selecionado for Primeira letra, a busca na API é feita corretamente pelo primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`;
- Na tela de bebidas, se o radio selecionado for `Primeira letra` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensgem "Sua busca deve conter somente 1 (um) caracter".

### 16 - Caso apenas uma receita seja encontrada, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL.

##### As seguintes verificações serão feitas:

- Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/comidas/{id-da-receita}`);
- Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/bebidas/{id-da-receita}`).

### 17 - Caso mais de uma receita seja encontrada, mostrar as receitas em cards da mesma maneira que a tela principal de receitas;

##### As seguintes verificações serão feitas:

- Caso mais de uma comida seja encontrada, mostrar as 12 primeiras (ou menos, se não hoverem 12);
- Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras (ou menos, se não hoverem 12).

### 18 - Caso nenhuma receita seja encontrada, um `alert` contendo o texto "Sinto muito, não encontramos nenhuma receita para esses filtros." deve ser exibido.

##### As seguintes verificações serão feitas:

- Caso nenhuma comida seja encontrada o alert deve ser exibido;
- Caso nenhuma bebida seja encontrada o alert deve ser exibido.

## Menu inferior

### 19 - Todos os elementos devem respeitar os atributos descritos no protótipo para o menu inferior disponível na tela principal de receitas.

### 20 - Deve ser fixo e apresentar 3 ícones: um para comidas, um para bebidas e outro para exploração.

##### As seguintes verificações serão feitas:

- O menu inferior deve ficar fixado sempre ao final da página;
- Apresenta os ícones corretos (drinkIcon.svg, exploreIcon.svg e mealIcon.svg, disponíveis na pasta `src/images/`).

### 21 - O menu inferior só deve aparecer apenas nas telas indicadas pelo protótipo.

##### As seguintes verificações serão feitas:

- Não tem footer na tela de login;
- Tem footer na tela de principal de receitas de comidas;
- Tem footer na tela de principal de receitas de bebidas;
- Não tem footer na tela de detalhes de uma receita de comida;
- Não tem footer na tela de detalhes de uma receita de bebida;
- Não tem footer na tela de receita em processo de comida;
- Não tem footer na tela de receita em processo de bebida;
- Tem footer na tela de explorar;
- Tem footer na tela de explorar comidas;
- Tem footer na tela de explorar bebidas;
- Tem footer na tela de explorar comidas por ingrediente;
- Tem footer na tela de explorar bebidas por ingrediente;
- Tem footer na tela de explorar comidas por local de origem;
- Tem footer na tela de perfil;
- Não tem footer na tela de receitas feitas;
- Não tem footer na tela de receitas favoritas.

### 22 - Ao clicar no ícone de comidas, a pessoa deve ser redirecionada para uma lista de comidas;

### 23 - Ao clicar no ícone de bebidas, a pessoa deve ser redirecionada para uma lista de cocktails;

### 24 - Ao clicar no ícone de exploração, a rota deve mudar para a tela de explorar.

## Tela principal de receitas

### 25 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela principal de receitas.

##### As seguintes verificações serão feitas:

- A tela tem os data-testids de todos os 12 cards da tela de comidas;
- A tela tem os data-testids de todos os 12 cards da tela de bebidas.

### 26 - Devem ser carregadas as 12 primeiras receitas de comidas ou bebidas, uma em cada card. O Card de receita deve conter sua foto (`strMealThumb` ou `strDrinkThumb`) e seu nome (`strMeal` ou `strDrink`).

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
- Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`.

### 27 - A tela deve possuir botões de categoria para serem utilizados como filtro. Cada um com o atributo prefixado: `data-testid=${categoryName}-category-filter`. Devem ser exibidas apenas as 5 primeiras categorias retornadas da API.

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
- Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.

### 28 - Ao clicar no filtro de categoria, todas as receitas devem mudar para os dados filtrados da API. As categorias disponíveis devem ser obtidas através da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php).

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 12 primeiras receitas de "Beef";
- Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se carregar as 12 primeiras receitas de "Breakfast";
- Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 12 primeiras receitas de "Chicken";
- Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 12 primeiras receitas de "Dessert";
- Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 12 primeiras receitas de "Goat";
- Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink", deve-se carregar as 12 primeiras receitas de "Ordinary Drink";
- Caso as receitas sejam de bebida e a categoria seja "Cocktail", deve-se carregar as 12 primeiras receitas de "Cocktail";
- Caso as receitas sejam de bebida e a categoria seja "Milk / Float / Shake", deve-se carregar as 12 primeiras receitas de "Milk / Float / Shake";
- Caso as receitas sejam de bebida e a categoria seja "Other/Unknown", deve-se carregar as 12 primeiras receitas de "Other/Unknown";
- Caso as receitas sejam de bebida e a categoria seja "Cocoa", deve-se carregar as 12 primeiras receitas de "Cocoa".

### 29 - Caso o filtro selecionado no momento seja selecionado de novo, o app deve retornar as receitas sem nenhum filtro, como se fosse um toggle.

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro;
- Caso as receitas sejam de bebida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro.

### 30 - Apenas um filtro de categoria deve poder ser selecionado por vez. Ou seja, se outro filtro de categoria for selecionado, ele deve substituir o anterior.

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida apenas um filtro de categoria deve poder ser selecionado por vez;
- Caso as receitas sejam de bebida apenas um filtro de categoria deve poder ser selecionado por vez.

### 31 - No filtro de categorias deve existir a opção de filtrar por todas as categorias, retornando novamente todas as receitas. O nome do filtro deve ser "All".

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida deve existir a opção de filtrar por todas as categorias;
- Caso as receitas sejam de bebida deve existir a opção de filtrar por todas as categorias.

### 32 - Ao clicar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL, além de dizer se a pessoa veio da tela de comidas ou de bebidas. Exemplo: `/comidas/{id-da-receita}`.

##### As seguintes verificações serão feitas:

- Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da receita;
- Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da receita.

## Tela de detalhes de uma receita

### 33 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes de uma receita.

##### As seguintes verificações serão feitas:

- A tela de comida possui todos os atributos data-testid;
- A tela de bebidas possui todos os atributos data-testid.

### 34 - Uma request para a API deve ser feita passando o `id` da receita que deve estar disponível nos parâmetros da URL.

##### As seguintes verificações serão feitas:

- Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`;
- Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.

### 35 - Essa tela deve conter uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações. Obs.: O vídeo do youtube só deve estar disponível para receitas de comida, já que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).

##### As seguintes verificações serão feitas:

- Verifica se os elementos descritos no protótipo existem na tela de detalhes de comida;
- Verifica se os elementos descritos no protótipo existem na tela de detalhes de bebida.

### 36 - As recomendações para receitas de comida deverão ser bebidas e vice-versa.

##### As seguintes verificações serão feitas:

- Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
- Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.

### 37 - Deverão ser mostrados 6 cards de recomendação, onde apenas 2 são mostrados e o scroll é horizontal, similar a um `carousel`.

##### As seguintes verificações serão feitas:

- Verifica se exitem todas as recomendações na tela de detalhes de uma comida. Apenas as 6 primeiras bebidas devem ser exibidas;
- Verifica se exitem todas as recomendações na tela de detalhes de uma bebida. Apenas as 6 primeiras comidas devem ser exibidas.

### 38 - Um botão de nome "Iniciar Receita" deve ficar fixo na parte de baixo da tela o tempo todo.

##### As seguintes verificações serão feitas:

- Verifica posicionamento do botão na tela de detalhes de comida;
- Verifica posicionamento do botão na tela de detalhes de bebida.

### 39 - Caso a receita já tenha sido feita, o botão "Iniciar Receita" deve sumir.

##### As seguintes verificações serão feitas:

- Verifica se botão de iniciar receita não é visível na tela de detalhes de uma comida;
- Verifica se botão de iniciar receita não é visível na tela de detalhes de uma bebida.

### 40 - Caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar Receita".

##### As seguintes verificações serão feitas:

- Verifica botão de "Continuar Receita" na tela de detalhes de uma comida;
- Verifica botão de "Continuar Receita" na tela de detalhes de uma bebida

### 41 - Quando o botão "Iniciar Receita" for clicado, a rota deve mudar para a tela de receita em processo.

##### As seguintes verificações serão feitas:

- Redireciona para tela de receita da comida em processo;
- Redireciona para tela de receita da bebida em processo.

### 42 - Um botão de compartilhar e um de favoritar a receita devem estar disponíveis.

##### As seguintes verificações serão feitas:

- Verifica se os botões estão disponíveis na tela de detalhes de uma comida;
- Verifica se os botões estão disponíveis na tela de detalhes de uma bebida.

### 43 - Ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer. O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

##### As seguintes verificações serão feitas:

- Verifica a mensagem "Link copiado!" e se o link da receita da comida foi copiado para o clipboard;
- Verifica a mensagem "Link copiado!" e se o link da receita da bebida foi copiado para o clipboard.

### 44 - O ícone do coração (favorito) deve vir preenchido caso a receita esteja favoritada, e "despreenchido" caso contrário. Os ícones dos botões podem ser encontrados em `src/images/whiteHeartIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

##### As seguintes verificações serão feitas:

- Verifica se a comida favoritada vem com o coração preenchido;
- Verifica se a comida não favoritada vem com o coração "despreenchido";
- Verifica se a bebida favoritada vem com o coração preenchido;
- Verifica se a bebida não favoritada vem com o coração "despreenchido".

### 45 - Ao clicar no botão de favoritar, o ícone do coração deve mudar de seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa.

##### As seguintes verificações serão feitas:

- Favorita a comida;
- Desfavorita a comida;
- Favorita a bebida;
- Desfavorita a bebida.

### 46 - As receitas favoritas devem ser salvas em `localStorage` na chave `favoriteRecipes` no formato `[{ id, type, area, category, alcoholicOrNot, name, image }]`. E as receitas feitas devem ser salvas em `localStorage` na chave `doneRecipes` no formato `[{ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }]`.

##### As seguintes verificações serão feitas:

- Verifica se após favoritar receita de uma comida, ela é salva corretamente no localStorage;
- Verifica se após favoritar receita de uma bebida, ela é salva corretamente no localStorage.

---

## Requisitos - Apresentação 2

### 47 - A cobertura de testes unitários deve ser de no mínimo 90%.

## Tela de receita em processo

### 48 - Essa tela deve conter uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades, e suas instruções;

##### As seguintes verificações serão feitas:

- A tela de receita de uma comida em processo possui todos os data-testid;
- A tela de receita de uma bebida em processo possui todos os data-testid.

### 49 - A lista de ingredientes deve conter um checkbox para cada um dos items;

##### As seguintes verificações serão feitas:

- Cada ingrediente de uma receita de comida deve possuir um checkbox;
- Cada ingrediente de uma receita de bebida deve possuir um checkbox.

### 50 - Ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista;

##### As seguintes verificações serão feitas:

- Verifica se ao marcar clicar em um checkbox de um ingrediente de uma comida, o nome aparecerá riscado, mostrando que esse passo foi finalizado;
- Verifica se ao marcar clicar em um checkbox de um ingrediente de uma bebida, o nome aparecerá riscado, mostrando que esse passo foi finalizado.

### 51 - O estado do progresso deve ser mantido caso a pessoa atualize a pagina ou volte para a mesma receita. O progresso das receitas devem ser salvos em `localStorage` na chave` inProgressRecipes` no formato especificado na seção [`localStorage`](#localStorage);

##### As seguintes verificações serão feitas:

- Recarrega a página em progresso de um comida e espera que os ingredientes já marcados, continuam marcados;
- Recarrega a página em progresso de um bebida e espera que os ingredientes já marcados, continuam marcados;

### 52 - A mesma lógica de favoritar e compartilhar da tela de detalhes de uma receita se aplica aqui;

##### As seguintes verificações serão feitas:

- Verifica a mensagem "Link copiado!" e se o link da receita da comida foi copiado para o clipboard;
- Verifica a mensagem "Link copiado!" e se o link da receita da bebida foi copiado para o clipboard;
- Verifica se a comida favoritada vem com o coração preenchido;
- Verifica se a comida não favoritada vem com o coração "despreenchido";
- Verifica se a bebida favoritada vem com o coração preenchido;
- Verifica se a bebida não favoritada vem com o coração "despreenchido";
- Favorita a comida;
- Desfavorita a comida;
- Favorita a bebida;
- Desfavorita a bebida;
- Verifica se após favoritar receita de uma comida, ela é salva corretamente no localStorage;
- Verifica se após favoritar receita de uma bebida, ela é salva corretamente no localStorage.

### 53 - O botão de finalizar receita só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados);

##### As seguintes verificações serão feitas:

- Botão de finalizar receita de comida está desabilitado enquanto todos os checkboxs não estiverem marcados;
- Botão de finalizar receita de bebida está desabilitado enquanto todos os checkboxs não estiverem marcados;
- Botão de finalizar receita de comida está habilitado quando todos os checkboxs estiverem marcados;
- Botão de finalizar receita de bebida está habilitado quando todos os checkboxs estiverem marcados.

### 54 - Após clicar no botão "Finalizar receita", a rota deve mudar para a página de receitas feitas, cuja rota deve ser `/receitas-feitas`.

##### As seguintes verificações serão feitas:

- A pessoa é redirecionada para a tela de receitas feitas após finalizar uma receita de comida;
- A pessoa é redirecionada para a tela de receitas feitas após finalizar uma receita de bebida.

## Tela de receitas feitas

### 55 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de receitas feitas.

### 56 - Caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar. O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

### 57 - Caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar. O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

### 58 - O botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard.

##### As seguintes verificações serão feitas:

- Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copiado!";
- A URL da tela de detalhes da receita é copiada para o clipboard.

### 59 - Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros. Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente.

##### As seguintes verificações serão feitas:

- Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
- Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
- Ao clicar no botão "All" o filtro deve ser removido.

### 60 - Ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.

##### As seguintes verificações serão feitas:

- Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
- Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.

## Tela de receitas favoritas

### 61 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas).

### 62 - Caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, um botão de compartilhar e um de "desfavoritar". Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

### 63 - Caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar". Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

### 64 - O botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard.

##### As seguintes verificações serão feitas:

- Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copiado!";
- A URL da tela de detalhes da receita é copiada para o clipboard.

### 65 - O botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela.

##### As seguintes verificações serão feitas:

- Ao clicar no botão de "desfavoritar" a respectiva receita é removida da tela;
- Ao clicar no botão de "desfavoritar" a respectiva receita é removida do `localStorage`.

### 66 - Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros. Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente.

##### As seguintes verificações serão feitas:

- Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
- Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
- Ao clicar no botão "All" o filtro deve ser removido.

### 67 - Ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.

##### As seguintes verificações serão feitas:

- Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
- Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.

## Tela de explorar

### 68 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar.

### 69 - A tela deve ter dois botões: um para explorar comidas e o outro para explorar bebidas. O nomes dos botões devem ser "Explorar Comidas" e "Explorar Bebidas", respectivamente.

### 70 - Ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas.

##### As seguintes verificações serão feitas:

- Ao clicar no botão "Explorar Comidas" a rota muda para a página de explorar comidas;
- Ao clicar no botão "Explorar Bebidas" a rota muda para a página de explorar bebidas.

## Tela de explorar bebidas ou comidas

### 71 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar bebidas ou comidas.

##### As seguintes verificações serão feitas:

- Tem os data-testids corretos para a tela de explorar comidas;
- Tem os data-testids corretos para a tela de explorar bebidas.

### 72 - A tela deve ter três botões: um para explorar por ingrediente, um para explorar por local de origem e um para pegar uma receita aleatória. O nomes dos botões devem ser "Por Ingredientes", "Por Local de Origem" e "Me Surpreenda!", respectivamente. Obs: se a opção escolhida for explorar bebidas, o botão para explorar por local de origem não deve estar disponível.

##### As seguintes verificações serão feitas:

- Tem os botões "Por Ingredientes", "Por Local de Origem" e "Me Surpreenda!" para a tela de explorar comidas;
- Tem apenas os botões "Por Ingredientes" e "Me Surpreenda!" para a tela de explorar bebidas.

### 73 - Ao clicar em "Por Ingredientes", a rota deve mudar para tela de explorar ingredientes.

##### As seguintes verificações serão feitas:

- Ao clicar no botão "Por Ingredientes" da tela de explorar comidas a rota muda para a página de explorar comidas por ingrediente;
- Ao clicar no botão "Explorar Bebidas" da tela de explorar bebidas a rota muda para a página de explorar bebidas por ingrediente.

### 74 - Ao clicar em "Por Local de Origem", a rota deve mudar para tela de explorar por local de origem.

### 75 - Ao clicar em "Me Surpreenda!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API.

##### As seguintes verificações serão feitas:

- Ao clicar no botão "Por Ingredientes" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória obtida através do endpoint `https://www.themealdb.com/api/json/v1/1/random.php`;
- Ao clicar no botão "Explorar Bebidas" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória obtida através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/random.php`.

## Tela de explorar ingredientes

### 76 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar ingredientes.

##### As seguintes verificações serão feitas:

- Tem os data-testids corretos para a tela de explorar comidas por ingredientes;
- Tem os data-testids corretos para a tela de explorar bebidas por ingredientes.

### 77 - A tela deve ter cards para os 12 primeiros ingredientes, de forma que cada card contêm: o nome do ingrediente e uma foto.

##### As seguintes verificações serão feitas:

- Tem o nome e a foto corretos para a tela de explorar comidas por ingredientes;
- Tem o nome e a foto corretos para a tela de explorar bebidas por ingredientes.

### 78 -  Ao clicar no card do ingrediente a rota deve mudar para tela principal de receitas, mas mostrando apenas as receitas que contém o ingrediente escolhido.

##### As seguintes verificações serão feitas:

- Ao clicar no card do ingrediente da tela de explorar comidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente;
- Ao clicar no card do ingrediente da tela de explorar bebidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente.

## Tela de explorar por local de origem/area

### 79 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar por local de origem.

### 80 - A tela segue as mesmas especificações da tela de receitas principal, a única diferença é que os filtros de categoria são substituídos por um dropdown.

##### As seguintes verificações serão feitas:

- Devem ser carregadas as 12 primeiras receitas de comidas;
- Ao selecionar um filtro de local de origem, todas as receitas devem mudar para os dados filtrados da API;
- Ao clicar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL.

### 81 - No dropdown devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro.

##### As seguintes verificações serão feitas:

- No dropdown devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All";
- A opção "All" retorna as receitas sem nenhum filtro.

### 82 - A rota deve ser apenas `/explorar/comidas/area`. A rota `/explorar/bebidas/area` não deve estar disponível, retornando um erro de "Not Found".

## Tela de perfil

### 83 - Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil.

### 84 - O e-mail da pessoa usuária deve estar visível.

### 85 - Essa tela deve conter 3 botões: um de nome "Receitas Feitas", um de nome "Receitas Favoritas" e um de nome "Sair".

### 86 - Ao clicar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas.

### 87 - Ao clicar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas.

### 88 - Ao clicar no botão de "Sair", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login.

##### As seguintes verificações serão feitas:

- Limpa todas as chaves da localStorage;
- A rota muda para a tela de login.

---

***Obs: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php***

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠


* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

2. `git add` _(para adicionar arquivos ao stage do Git)_

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-03`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
