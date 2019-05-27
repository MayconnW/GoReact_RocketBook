# Bootcamp GoStack-6 - Desafio 04

![GitHub tag (latest by date)](https://img.shields.io/github/tag-date/MayconnW/GoReact_RocketBook.svg?style=for-the-badge)

# Sobre o Desafio

Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

Nesse projeto você desenvolverá um feed de posts estilo Facebook. Crie um layout tentando chegar o mais próximo possível da imagem abaixo:
![Feed](/public/feed.png)

## Regras

- O Header deve ser um componente separado;
- O Post deve ser um componente separado;
- O header do post aonde estão o avatar, nome e tempo do post devem estar em um componente separado chamado PostHeader;
- Os posts devem estar armazenado no estado (state) do arquivo principal App.js;
- Você deve passar a informação dos posts como uma única propriedade para o componente de Post quando realizar o map no state de posts: <Post data={post} />;

## Rodando o app

Na pasta da aplicação rode o comando "yarn" para instalar as dependecias.
Rode o comando "yarn start" para subir o serviço. Por default o serviço irá rodar na porta 3000
