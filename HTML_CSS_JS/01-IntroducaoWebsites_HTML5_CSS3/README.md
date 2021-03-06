# Introdução a criação de websites com HTML5 e CSS3

## Introdução ao curso de HTML5

### Estrutura Básica
Elemento HTML: TAG atributo Conteúdo FechamentoTAG  
Estrutura básica: elemento html/ elemento head (meta title)/ elemento body  

> <!DOCTYPE html>
> <html>
>   <head>
>     <meta charset="utf-8">
>     <title> Arthur Borges </title>
>   </head>
>   <body>
>     Arthur Borges
>   </body>
> </html>

## Entendendo o que é Semântica
Inicialmente no HTML existia apenas o elemento div para organização, o que gerava uma "bagunça".  
Com o HTML5 surgiram novos elementos:  
- section: representa uma seção genérica de conteúdo
- header: cabeçalho de uma página
- article: conteúdo relevante de uma página
- aside: representa um conteúdo relacionado ao conteúdo principal da página
- footer: rodapé
- h1 - h6: importância de um título dentro de uma página

## Como usar textos e links em HTML
### Tags para textos
Elemento p: Textos maiores e mais densos. Suporta textos, imagens, códigos, vídeos e outros tipos.

### Tags para links
Elemento a: âncora. Interliga vários conteúdos na web. Possui vários atributos, entre eles href e target.

## Como inserir imagens em seu site
### Tag img
Elemento img possui apenas dois atributos: src e alt.

## Como organizar listas com HTML
### Tags li, ul e ol
- li: item da lista.
- ul: lista aonde a ordem dos itens não é importante.
- ol: lista aonde a ordem dos itens é importante.

## Introdução e conceitos básicos do CSS3
### Introdução ao CSS3
- Definição: Criar regras de estilos para elementos ou grupos de elementos.
- Seletores: São elementos no html, que receberão declaraçãoes.
- Id(.) x Classe(#): diferenciam os seletores. O id pode ser utilizado uma vez na página.
### Conceitos básicos
No layout de um site, o navegador intepreta cada elemento html como uma box retangular (Box Model). Este é dividido em quatro áreas: margem, borda, padding e conteúdo.  

## Estilizando elementos, textos e listas
### Estilizando elementos
- Padding e margin
- Background
- Border
### Estilizando textos
- Font-family
- Font-size
- Font-style
- Font-weight
- Text-transform
- Text-decoration
### Estilizando listas
- List-style-type: square, upper-roman

## Dimensão e alinhamento
- Width / height
- Max-width / max-height 
- Margin
- Text-align