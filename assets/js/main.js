class Card extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const divCard = document.createElement('div');
        divCard.className = 'game';
        divCard.innerHTML = `
            <style>
                .game {
                    margin-right: 20px;
                }

                .game:hover {
                    cursor: pointer;
                }

                .game > a > img {
                    width: 190px;
                    height: 260px;
                    border-radius: 10px;
                }

                .game > a > img:hover {
                    border: 1px solid #ffff;
                }

                .game > .descricao {
                    margin-top: 10px;
                }

                .game > .descricao > p {
                    font-size: 10px;
                    color: #858585;
                    font-weight: 700;
                }

                .game > .descricao > h2 {
                    color: #ffff;
                    font-size: 15px;
                    margin-top: 5px;
                }

                .game > .descricao > div {
                    display: flex;
                    margin-top: 8px
                }

                .descricao > div > span {
                    margin-top: 12px;
                    font-weight: 600;
                }

                .valores {
                    margin-left: 26%;
                }

                .valores > em {
                    color: #ffffffb6;
                    text-decoration: line-through;
                }

                .valores > h2 {
                    color: #ffff;
                }
            </style>

            <a href="compra.html?id=${this.getAttribute('id')}"><img src='${this.getAttribute('srcMainImage')}' alt=${this.getAttribute('title')}></a>
            <div class="descricao">
                <p>JOGO BASE</p>
                <h2>${this.getAttribute('title')}</h2>
                <div>
                    <span class="tag is-info">${this.getAttribute('discount')}</span>
                    <div class="valores">
                        <em>${this.getAttribute('oldPrice')}</em>
                        <h2>${this.getAttribute('currentPrice')}</h2>
                    </div>
                </div>
            </div>
        `;

        this.appendChild(divCard);
    }
}

customElements.define('card-game', Card);

fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((json) => renderizar(json));

function renderizar(games) {
  const sectionCards = document.querySelector(".cards");

  games.forEach((game) => {
    const cardGame = document.createElement("card-game");

    cardGame.setAttribute("title", game.title);
    cardGame.setAttribute("id", game.id);
    cardGame.setAttribute("srcMainImage", game.srcMainImage);
    cardGame.setAttribute("srcSecondaryImage", game.srcSecondaryImage);
    cardGame.setAttribute("description", game.description);
    cardGame.setAttribute("oldPrice", game.oldPrice);
    cardGame.setAttribute("currentPrice", game.currentPrice);
    cardGame.setAttribute("discount", game.discount)

    sectionCards.appendChild(cardGame);
  });
}