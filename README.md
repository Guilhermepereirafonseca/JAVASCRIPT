# JAVASCRIPT
_**Projetos na Linguagem Javascript**_

## CURSO EM VIDEO
### Criando seu primeiro Script - AULA 4
- Aqui foi usado **Visual Code** com básico de HTML
- Usamos a tag ``<style>`` para usar **CSS** dentro da estrutura do HTML
- Usamos também a tag ``<script>`` para finalmente praticar **Javascript**
- **Não precisa colocar ponto virgula no final"**
<h3> VEJA O CÓDIGO ABAIXO: </h3>

```javascript
  // Exibe um alerta na página
  window.alert('Minha primeira mensagem!')
  // Manda o usuário confirmar para prosseguir 
  window.confirm('Está gostando de JS?')
  // Pergunta o nome do usuário, e aparece uma caixa para digitar o nome
  window.prompt('Qual seu nome?')
```

### Variáveis e Tipos Primitivos - AULA 5
- Ensinou como fazer comentarios no código
  - ``//`` - uma linha
  - ``/**/`` - varias linhas
- Aprendi sobre ``var`` para criar variáveis
- ``typeof`` para ver o tipo delas em Javascript
<h3>VEJA O CÓDIGO ABAIXO: </h3>

```javascript

// Podemos escrever strings desse três jeitos

var nome = "Guilherme"
var nome1 = 'Guilherme'
var nome2 = `Guilherme`
var n1 = 6

// var e let fazem a mesma função, com algumas diferenças

typeof nome // string
typeof function(){} // function
typeof n1 // number
typeof [] // object
```

### Tratando Dados - AULA 6
- Criando variáveis que vão receber resultados de comandos
- Convertendo para INT (INTEIRO)
- window.prompt sempre vai ser tipo **STRING**
  - ``Number.parInt()`` converte para **INTEIRO** (*jeito antigo*)
  - ``Number.parFloat()`` converte para **REAL** (*jeito antigo*)
  - ``Number`` converte para número (todos os tipos) (*jeito novo*)
- Convertendo para STRING (TEXTO)
  - ``String(n)`` converte para **STRING**
  - ``n.toString`` converte também para **STRING**
- Outro meio de concatenar e usando **TEMPLATE DE STRING**, que precisa de " ` ` " para funcionar
  - ` oi ${nome} `
  - `O aluno ${nome} com ${idade} anos tirou a nota ${nota}`
- Formatação de Strings foi relatado na aula também:
  - s.length = mostra quantos caracteres tem a string
  - s.toUpperCase() = converte para MAIÚSCULA
  - s.toLowerCase() = converte para minúscula
- Formatação de Números foi relatado na aula também:
  - toFixed(2) = deixa duas casas decimais depois do ponto
    - da pra modificar para virgula fazendo = n1.toFixed(2).replace('.', ',')

<h3>VEJA O CÓDIGO ABAIXO: </h3>

```javascript

  var n1 = Number.parseInt(window.prompt('Digite um número: '))
  var n2 = Number.parseInt(window.prompt('Digite outro número: '))
  var soma = n1 + n2
  wndow.alert('A soma dos valores é ' + soma)
  // (number + number) para adição
  // (string + string) para concatenação
```

```javascript
  var nome = window.prompt('Qual seu nome?')
  document.write(`Seu nome tem <strong>${nome.length}</strong> letras. <br>`)
  document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}.`)
  document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}.`)
```

### Operadores - AULA 7 e AULA 8
- Os operadores são os mesmo de outras linguagens
  - +, -, *, /, %, **
  - <, >, >=, <=, ==, !=
- falou da diferença de `==` e `===`
  - sendo o primeiro igual a um número
  - sendo o segundo igual a um número ou se e do mesmo tipo (int, string,..)
- !(negação), &&(E), ||(OU)
  - a ordem de execução e assim: `!, &&, ||` 
```javascript

  var x = 5
  x = x + 1 // 6
  x = x - 1 // 5
```

OPERADORES LÓGICOS:
```javascript

  idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
  estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
  salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?
```

### Introdução ao DOM - AULA 9
- DOM - Document Object Model
- Selecionando elementos
  - getElementsByTagName = selecioma varios elementos, mas precisa especificar a posição do mesmo com [] (sempre começa no 0)
  - getElementById = seleciona um id especifico 

![image](https://github.com/Guilhermepereirafonseca/JAVASCRIPT/assets/169271268/df563acf-3dc5-4ab1-b149-7cb0b99b6585)

