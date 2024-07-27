import { calculatePrice, elements } from "./helpers.js";
import { menu } from "./db.js";

console.log(window.location);

/* URL deki parametreleri yönetebilmek icin URLSearch class ndan örnek olusturduk
Örnegi olustururken kendi URL mizdeki parametreleri gönderdik. */

const searchParams = new URLSearchParams(window.location.search);

//*get metodu ile URL deki parametresine eristik.
const paramId = searchParams.get("id");
console.log(paramId);
//*Menu icerisinden id sini bildigimiz elemana ulasma
const product = menu.find((item) => item.id === Number(paramId));
console.log(product);

elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="/"><i class="bi bi-house fs-1"></i> </a>
        <div>anasayfa / ${
          product.category
        } / ${product.title.toLowerCase()}</div>
    </div>
      <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex align-items-center justify-content-center">
        <img
          src="${product.img}"
          style="max-width: 500px"
          class="img-fluid shadow rounded"
        />
    </div>
    <div>
        <h3 class="my-5">
          Ürünün Kategorisi: <span class="text-success">${
            product.category
          }</span>
        </h3>
    </div>
    <div>
        <h3 class="my-5">
          Ürünün Fiyati: <span class="text-success">${calculatePrice(
            product.price
          )}$</span>
        </h3>
    </div>
      <p class="lead fs-3">
      ${product.desc}
      </p>
`;
