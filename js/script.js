
const jsonShoe = "https://thaliarebecca.com/ting/shoes.json";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + jsonShoe;
const shoeContainer = document.querySelector(".shoe-box");


async function getShoes() {

  try {
    const response = await fetch(jsonShoe);
    const results = await response.json();
    console.log(results);
    shoeContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].name);

      shoeContainer.innerHTML += `<div class="shoe"> 
                                      <div class="look-box1"> 
                                      <a href="details.html?i=${results[i].id}">  
                                            <img src="${results[i].image}" alt="Image of shoe">
                                          </a>
                                        <p>${results[i].name}</p>
                                         <p>${results[i].price} NOK <b></p>  
                                      </div>
                                      </div>`;
    }
  } catch (error) {
    shoeContainer.innerHTML = "Something went wrong!";
  }
}



getShoes();

