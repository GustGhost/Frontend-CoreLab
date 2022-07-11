# Desenvolvedor

Luis Gustavo Rodrigues de Paula

## Sobre o projeto

O projeto foi feito em duas partes, primeiro fiz o backend utilizando Typescript,NodeJS, axios, cors, express e uuid. Já no frontend utilizei React, Styled-Components, React-bootstrap e react-router.
O armazenamento do backend foi feito no MySQL e foi feito um deploy para o heroku.

link do deploy:
https://corelab-backend.herokuapp.com

usando o deploy podemos ter acesso a todas as informações, basta apenas usar o endereço certo para cada informação.

Todos os carros:
/api/cars

Um carro específico:
/api/cars/:id

onde o id deve ser igual ao id do carro buscado.

Já no frontend não consegui implementar todas as funções, porém estão funcionais o filtro, a lista de carros, a mudança de cor dependendo da cor de cada carro. As que faltam estar implementadas são adicionar um carro, retirar um carro, adicionar aos favoritos e editar um carro.

Tive um erro que não consegui resolver na função de adicionar um carro e infelizmente não consegui melhorar o projeto para que tivesse todas as funções.

Minha ideia era fazer primeiro a lista de carros e a função de adicionar funcionarem, para assim usar o react-router para editar o veículo e também retirar o veículo da lista, tanto que não fiz a função de retirar o veículo no backend pois era a última que iria fazer apenas com tudo funcionando antes, também tive um loop inesperado no backend na função de editar o carro, não consegui resolver e nem identificar o erro e isso também tomou grande parte do meu tempo. Acredito que se tivesse resolvido esses dois problemas conseguiria entregar o projeto completo sem nenhum problema.
