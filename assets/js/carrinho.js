function showAtCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const containerGames = document.querySelector(".principal div");
    containerGames.innerHTML = "";
  
    cart.forEach((game) => {
      containerGames.innerHTML += `
        <section class="card-compra" id=${game.id}>
            <div class="conjunto">
                <img src="${game.srcMainImage}" alt="${game.title}">
                <div class="dados">
                    <p>JOGO BASE</p>
                    <h2>${game.title}</h2>
                    <hr style="background-color: #ffffff42; height: 1px; margin: 0; margin-top: 10px;">
                    </div>
                <div class="descontos">
                    <em>${game.oldPrice}</em>
                    <span class="tag is-info">${game.discount}</span>
                    <p class="preco">${game.currentPrice}</p>
                    <input type="number" class="quantidade" name="quantidade" value="1" min="1" max="10" />
                </div>
            </div>
            <a href="#">Remover</a>
        </section>
          `;
    });
  
    const deleteBtn = document.querySelectorAll(".card-compra a");
  
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", (e) => {
        e.preventDefault();
  
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const idGame = e.target.getAttribute("id");
  
        cart.splice(idGame, 1);
  
        localStorage.setItem("cart", JSON.stringify(cart));
  
        window.location.reload();
        showAtCart();
      });
    }
  }

  function convertValue(valor) {
    return parseFloat(
      valor.textContent
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()
    );
  }

  function formatCurrency(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function calculateValues() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    if (cart.length === 0) return;
  
    cart.forEach((produto) => {
      total += produto.currentPrice
        ? convertValue({ textContent: produto.currentPrice })
        : 0;
    });
  
    const cardsContainer = document.querySelector(".valores");
    cardsContainer.innerHTML = `
        <h1>Resumo de jogos e aplicativos</h1>

        <div class="preco">
            <p class="titulo">Preço</p>
            <p class="valor" style="margin-left: 168px;">${formatCurrency(total)}</p>
        </div>
        <div class="preco">
            <p class="titulo">Desconto</p>
            <p class="valor" style="margin-left: 127px;">-R$ 0,00</p>
        </div>
        <div class="preco">
            <p class="titulo">Desconto de cupom</p>
            <p class="valor" style="margin-left: 40px;">-R$ 0,00</p>
        </div>
        <div class="preco">
            <p class="titulo">Impostos</p>
            <p class="valor" style="margin-left: 130px; font-size: 14px; color: #ffffff6e;">Calculado ao finalizar</p>
        </div>

        <hr style="height: 1px; background-color: #ffffff4d;">

        <div class="preco">
            <p class="titulo"><strong style="color: #ffff;">Subtotal</strong></p>
            <p class="valor-total" style="margin-left: 140px;"><strong style="color: #ffff;">${formatCurrency(total)}</strong></p>
        </div>

        <a href="pagamento.html"><button class="button is-info" style="font-weight: 500; background-color: rgb(6, 103, 167); width: 100%; margin-top: 10px; font-family: 'Poppins', sans-serif; font-size: 14px;">Finalizar compra</button></a>
    `;
  }


  calculateValues();
  showAtCart();