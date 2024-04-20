import {menu} from "./db.js";
import { calculatePrice } from "./helpers.js";
const outlet = document.getElementById("outlet");
//console.log(outlet);
//console.log(window.location.search);


//* URL'deki parametleri yönetebilmek için URLSearchParams classından oluştur ve örneği oluştururken kendi urel'miizdeki parametleri gönderdik.
const searchParams = new URLSearchParams(window.location.search);
//get metodu ile urldeki parametresine eriştik
const paramId = searchParams.get("id");
//*Menü içerisinden idsni bildiğimiz elemana ulaşma
 const product = menu.find((item)=> item.id ===Number(paramId));
 console.log(product);

 outlet.innerHTML = `
 <div class="d-flex justify-content-between align-items-center">
 <a href="/" class="fs-1"><i class="bi bi-house"></i></a>
 <div>anasayfa/${product.category}/${product.title.toLocaleLowerCase()}</div>
</div>
<h1 class="text-center shadow p-2 my-3">${product.title}</h1>
<div class="d-flex justify-content-center align-items-center">
 <img
   src="${product.img}"
   alt=""
   style="max-width: 500px"
   class="img-fluid rounded shadow w-75" />
</div>
<div>
 <h3 class="my-5">Ürünün Kategorisi: <span class="text-success">${product.category}</span></h3>
 <h3 class="my-5">Ürünün Fiyatı: <span class="text-success">${calculatePrice(product.price)}TL</span></h3>
</div>
<p class="lead fs-3">${product.desc}</p>
 `