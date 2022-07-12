# Posicionando elementos com Flexbox em CSS

## Introdução ao curso
### Apresentação do curso
### Proposta de projeto final
### Introdução ao Flex Box
Flex Box:  
- modelo de layout unidimensional 
- método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento  

Flex Container:  
>Transforma todos os seus itens filhos em flex itens.  

Flex Item:
>São os elementos filhos diretos do Flex Container. E também podem se tornar Flex Container.

# Fundamentos da Flexbox - Parte 1

## Estrutura básica do display:flex
Display:flex:  
>torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta flag, tornam-se em flex items.
## Prática com display:flex

## Estrutura básica do flex direction
flex-direction:
>É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container. (row, row-reverse, column, column-reverse)
## Prática com flex direction

## Estrutura básica do flex wrap
Flex-wrap:  
>É a propriedade que define se os itens devem ou não quebrar a linha. Por padrão eles não quebram linhas (nowrap), isso faz com que os flex itens sejam compactados além do limite do conteúdo. (nowrap, wrap, wrap-reverse)
## Prática com flex wrap

## Estrutura básica e prática com flex flow
Flex-flow:
>É um atalho para as propriedades flex-direction e flex-wrap. Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

## Estrutura básica com justify content
Justify-Content:
>Essa propriedade vai se encarregar de alinhr os itens dentro do container de acordo com a direção pretendida e tratar a distribuição de espaçamento entre eles. OBS.: Caso o seus itens estejam ocupando 100% de todo o container, ela não se aplica.

Variações:
- flex-start: ínicio do container.
- flex-end: final do container.
- center: ao centro do container.
- space-between: cria um espaçamento igual entre os elementos.
- space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final.
## Prática com justify content

## Estrutura básica e prática com align items
Align-items:
>Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas.
>Permite o alinhamento central no eixo vertical.

Tipos de alinhamentos:
- center: alinhamento dos itens ao centro.
- stretch: padrão, e os flex itens crescem igualmente.
- flex-start: alinhamento dos itens no início.
- flex-end: alinhamento dos itens no final.
- baseline: alinhamento de acordo com a linha base da tipografia dos itens.

## Estrutura básica e prática com align content
Align-content:
>É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.

Requisitos para que o align-content funcione:
- O container utilize quebra de linhas.
- A altura do conteiner seja maior que a soma das linhas dos itens.

Tipos de alinhamentos:
- center: alinhamento dos itens ao centro.
- stretch: padrão, e os flex itens crescem igualmente.
- flex-start: alinhamento dos itens no início.
- flex-end: alinhamento dos itens no final.
- space-between: cria um espaçamento igual entre os elementos.
- space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final.

# Fundamentos da Flexbox - Parte 2
## Estrutura básica e prática com flex grow

## Estrutura básica e prática com flex basis

## Estrutura básica e prática com flex shrink

## Estrutura básica e prática com flex

## Estrutura básica e prática com order

## Estrutura básica e prática com align self

# Projeto Integrador
## Apresentação e preparação do projeto
## Organizando a interface
## Conclusão do curso