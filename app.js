import { buttonsData, menu} from "./db.js";
import { elements } from "./helpers.js";
//Sayfa yüklendiğinde ekrana renderMenuItems fonksiyonunu çalıştır
document.addEventListener("DOMContentLoaded",()=>{
    renderButtons();
    renderMenuItems(menu);
    
} );
elements.buttonArea.addEventListener("click", searchCategory);
//console.log(elements.mainArea);
function renderMenuItems(menuItems) {
  let menuHTML = menuItems.map((item) => {
    return `
    <a
    href="productDetail.html?id=${item.id}"
    id="card"
    class="text-decoration-none text-black d-flex flex-md-row flex-column gap-2">
    <img src="${item.img}" class="rounded shadow"/>
    <div>
      <div class="d-flex justify-content-between bg-">
        <h5>${item.title}</h5>
        <p class="text-success">${item.price}₺</p>
      </div>
      <p class="lead"
        >${item.desc}</p
      >
    </div>
  </a>
    `;
  });
  //maple döndük ve dizideki elemanları , le ayırdı join le "" boş şekilde birleştirdim
  menuHTML = menuHTML.join("");
  elements.mainArea.innerHTML =menuHTML;
};

function searchCategory(e){
   const category = e.target.dataset.category;
 //Tüm dizi elemanlarından yalnızca category değeri butonun categori değeri ile eşleşenleri getir.
  const filtredMenu = menu.filter((item) => item.category === category);
  if(category === "all") {
    renderMenuItems(menu);
  } else {
    //filtrelenmiş ekranları bas
    renderMenuItems(filtredMenu);
  }
renderButtons(category);
};
//Ekrana Buttoonları basma
function renderButtons(active){
    //eski basılan buttonları temizleme
   elements.buttonArea.innerHTML = "";
buttonsData.forEach((btn)=> {
    //HTML BUTONU OLUŞTURMA
const buttonElement = document.createElement("button");
//BUTTON ELEMENTİNE CLASSLARI EKLEME
buttonElement.className = "btn btn-outline-warning filter-btn";
//buttonların içindeki yazıyı değiştirme
buttonElement.textContent = btn.text;
//hangi kategori olduğu bilgisini button elementine ekleme
buttonElement.dataset.category = btn.value;


//eğerki active kategorisi ile eşleşirse farklı klas verme
if (btn.value === active) {
    buttonElement.classList.add("bg-warning","text-light");
}




//HTML e gönderme
elements.buttonArea.appendChild(buttonElement);
  });
   
};
