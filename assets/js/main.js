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

            <a href="compra.html"><img src='${this.getAttribute('src')}' alt=${this.getAttribute('title')}></a>
            <div class="descricao">
                <p>JOGO BASE</p>
                <h2>${this.getAttribute('titulo-jogo')}</h2>
                <div>
                    <span class="tag is-info">${this.getAttribute('desconto')}</span>
                    <div class="valores">
                        <em>${this.getAttribute('preco-antigo')}</em>
                        <h2>${this.getAttribute('preco-atual')}</h2>
                    </div>
                </div>
            </div>
        `;

        this.appendChild(divCard);
    }
}

customElements.define('card-game', Card);