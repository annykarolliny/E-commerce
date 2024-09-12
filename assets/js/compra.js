function getIdCard() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  async function provideCardData() {
    const idCardGame = getIdCard();
    const res = await fetch(`http://localhost:3000/games/${idCardGame}`);
    const cardGame = await res.json();
    const containerMain = document.querySelector("main");
  
    containerMain.innerHTML = `
        <div class="inicio">
            <form action="#">
                <img src="assets/imagens/logo_lupa.png" alt="Logo pesquisar">
                <input type="text" placeholder="Pesquisar na loja">
            </form>
            <a href="#">Suporte</a>
        </div>

        <div class="sobre">
            <h1>${cardGame.title}</h1>
            <div>
                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                <p>5.0</p>
            </div>
        </div>

        <section class="principal">
            <section class="descricao">
                <img src="${cardGame.srcSecondaryImage}" alt="${cardGame.title}">
                <p>${cardGame.description}</p>

                <div style="margin-top: 10px;">
                    <h2>Gêneros</h2>
                    <hr style="margin: 0; background-color: #ffffff2c; border: 1px solid; height: 1px; border-radius: 5px;">
                    <p><u>Ação</u>, <u>Mundo Aberto</u>, <u>Narração</u></p>
                </div>

                <article class="message" style="margin-top: 20px;">
                    <div class="message-body" style="background-color: #242424; color: #ada9a9;">
                        Não haverá mais suporte para este jogo nos sistemas operacionais Windows 7 e 8 a partir de 30 de janeiro de 2024.
                    </div>
                </article>

                <h2 id="notas">Notas e avaliações: ${cardGame.title}</h2>

                <div class="avaliacoes">
                    <div class="box" style="background-color: #4643437a; width: 500px;">
                        <article class="media">
                          <div class="media-left">
                          </div>
                          <div class="media-content">
                            <div class="content">
                              <p style="color: #ffff;">
                                <strong style="color: #ffff;">Matt Bertz</strong> <small>@maat_bertz</small> <small>3d</small>
                                <br>
                                Ótimo jogo. Recomendo baixar!
                              </p>
                            <div class="classificacao">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <p>10/10</p>
                            </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div class="box" style="background-color: #4643437a; width: 500px;">
                        <article class="media">
                          <div class="media-left">
                          </div>
                          <div class="media-content">
                            <div class="content">
                              <p style="color: #ffff;">
                                <strong style="color: #ffff;">Lucas Emanuel</strong> <small>@lucasolv</small> <small>6d</small>
                                <br>
                                Bom jogo. O gráfico está excelente.
                              </p>
                            <div class="classificacao">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrela.png" alt="Ícone de estrela preenchida">
                                <p>9/10</p>
                            </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div class="box" style="background-color: #4643437a; width: 500px;">
                        <article class="media">
                          <div class="media-left">
                          </div>
                          <div class="media-content">
                            <div class="content">
                              <p style="color: #ffff;">
                                <strong style="color: #ffff;">Vitória Cavalcante</strong> <small>@vitcavalc</small> <small>10d</small>
                                <br>
                                Jogo bom!!! Adoraria jogar por algumas horas seguidas.
                              </p>
                            <div class="classificacao">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <img src="assets/imagens/icone_estrelap.png" alt="Ícone de estrela preenchida">
                                <p>10/10</p>
                            </div>
                            </div>
                          </div>
                        </article>
                      </div>
                </div>
            </section>

            <section class="compra" style="margin-left: 80px;">
                <div class="dados">
                    <img src="${cardGame.srcMainImage}" alt="${cardGame.title}">
                    <div class="tipo_game">
                        <p>JOGO BASE</p>
                    </div>
                    <div class="preco">
                        <span class="tag is-danger" style="background-color: rgb(201, 22, 22); font-weight: 700;">${cardGame.discount}</span>
                        <em>${cardGame.oldPrice}</em>
                        <p>${cardGame.currentPrice}</p>
                    </div>
                    <div class="botoes">
                        <a href="pagamento.html"><button class="button is-danger" style="background-color: rgb(201, 22, 22); width: 340px; font-weight: 600;">COMPRE AGORA</button></a>
                        <a href="carrinho.html"><button class="button is-outlined" id="add-to-cart" style="background-color: transparent; color: #ffff; width: 340px; font-size: 13px; margin-top: 8px;">VISUALIZAR NO CARRINHO</button></a>
                    </div>
                </div>
            </section>
        </section>
            `;
    }

  async function addToCar() {
    const idCardGame = getIdCard();
    const res = await fetch(`http://localhost:3000/games/${idCardGame}`);
    const cardGame = await res.json();
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const productAlreadyAdded = cart.find((item) => item.id === cardGame.id);
    
    if (!productAlreadyAdded) {
      cart.push(cardGame);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      return;
    }
  }
    
addToCar();
provideCardData();