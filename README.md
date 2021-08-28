# DiscordBotUFRJ

Este projeto consiste em um bot para o servidor no Discord para o curso de Ciência da Computação de 2021.1 da UFRJ. Foi desenvolvido primariamente por [Igor Andrade](https://github.com/andradeigor), [Hugo Folloni](https://github.com/hugofolloni) e [Leonardo de Melo](https://github.com/LeoBardineo), mas contou com o apoio de todo o servidor para conselhos, testes e ideias.

- [Como usar](#como-usar)
- [Comandos](#comandos)
- [Tecnologias](#tecnologias)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

## 🤖 Como Usar:

Rodando o bot localmente

```bash
 # Clone esse repositório
 $ git clone https://github.com/andradeigor/DiscordBotUFRJ

 # Acesse a pasta do projeto
 $ cd DiscordBotUFRJ

 # Instale dependências
 $ yarn

 # Copie o .env.example e renomeie como .env
 $ cp .env.example .env

 # Substituia as variáveis de ambiente

 # Ligue o bot
 $ node index.js

```

## 📜 Comandos

- **f.capslock**: RETORNA O TWEET DA ROBERTA MIRANDA.
- **f.champ**: retorna a página do op.gg do campeão de LoL que escrever após o comando.
- **f.covid**: retorna os casos e covid desde o início até agora no Rio de Janeiro.
- **f.dontpad**: retorna o link do dontpad para Computação 1 (matéria da graduação) para o dia de hoje.
- **f.freegame**: fala os jogos gratuitos da semana (dependemos da API).
- **f.leave**: o bot da sala de audio.
- **f.pokemon**: retorna um pokemon aleatório (menos para uma usuária específica).
- **f.server**: retorna informações sobre o server (CUIDADO: depende de cache).
- **f.user**: retorna a foto do usuário mencionado (ou a sua).

### 📌 Comandos futuros:

- Conversor de bases
- Mini calendário de atividades

## 💻 Tecnologias

- NodeJS
- DiscordJS

## 👥 Contribuidores

Esses são os contribuidores do projeto (<a href="https://allcontributors.org/docs/en/emoji-key">emoji key</a>).

<table>
  <tr>
    <td align="center"><a href="https://github.com/andradeigor"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/21049910?v=4" width="100px;" alt=""/><br /><sub><b>Igor Andrade</b></sub></a><br /><a href="https://github.com/andradeigor/DiscordBotUFRJ/commits?author=andradeigor" title="Igor Andrade">🤔 💻 🚧</a></td>
    <td align="center"><a href="https://github.com/hugofolloni"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82226141?v=4" width="100px;" alt=""/><br /><sub><b>Hugo Folloni</b></sub></a><br /><a href="https://github.com/andradeigor/DiscordBotUFRJ/commits?author=hugofolloni" title="Hugo Folloni">🤔 💻 🚧</a></td>
    <td align="center"><a href="https://github.com/LeoBardineo"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/45073941?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo de Melo</b></sub></a><br /><a href="https://github.com/andradeigor/DiscordBotUFRJ/commits?author=LeoBardineo" title="Leonardo de Melo">🤔 💻 🚧</a></td>
  </tr>
</table>

## 📖 Licença

Este projeto está licenciado sob a licença <a href="https://choosealicense.com/licenses/mit/">MIT</a>.
