

const detailsContainer = document.querySelector(".results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("i");


const jsonShoe = "https://thaliarebecca.com/ting/shoes.json";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + jsonShoe;

async function getDetails() {

    try {
        const response = await fetch(jsonShoe);

        const result = await response.json();

        const shoeDetails = result.find(shoe => shoe.id == id);

        document.title = shoeDetails.name;

        detailsContainer.innerHTML = `     <div class="details-description">
        <div class="shoe-img">
            <img src="${shoeDetails.image}" alt="Picture of leather shoes">
        </div>
        <div class="shoe-info">
            <h2>${shoeDetails.name}</h2>
            <p>${shoeDetails.price}NOK</p>
            <p>Lorem ipsum dolor sit amet, altera fastidii voluptua ad ius, eam dictas oblique eu, id vis summo everti dolores. In quodsi vocent mei, mei prima corrumpit dissentias no. </p>
            <label for="size">Choose a size:</label>
            <select id="Size">
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
            </select>
            <button class="shop-button"><i class="fa fa-shopping-cart bag"></i>ADD TO BAG</button>
            <ul>
                <p>Product details:</p>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Altera fastidii voluptua ad ius</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Sit amet</li>
                <li>Altera fastidii voluptua ad ius</li>
                <li>Sit amet</li>
              </ul>  
              
        </div>
       
    </div>`;

    }
    catch (error) {
        detailsContainer.innerHTML = "Something went wrong!";
    }
}

getDetails();

