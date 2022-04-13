async function getProducts() {
    try {
        let productsJSON = await fetch(
            "https://striveschool-api.herokuapp.com/api/product/",
            {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NDk4NTQyMDMsImV4cCI6MTY1MTA2MzgwM30.YiCJ31GpRLOUvO5vR5gDHAq_jwBdL_IGCSUocgHn4dE",
                },
            }
        );
        let productsList = await productsJSON.json();
        productsList.shift();

        let brandList = getBrands(productsList);
        newSection(brandList);
        appendCards(productsList);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

window.omlaod = () => {
    getProducts();
};

const newSection = (brands) => {
    let hero = document.querySelector(".jumbotron.hero");
    brands.forEach((brand) => {
        let newSection = document.createElement("section");
        newSection.classList.add("container", "brandSection", "px-0");

        let newSectionHeading = document.createElement("h2");
        newSectionHeading.classList.add("row", "mx-0");
        newSectionHeading.innerText = brand;
        newSection.appendChild(newSectionHeading);

        let productCardsDisplay = document.createElement("div");
        productCardsDisplay.classList.add("row", "insertProduct");
        productCardsDisplay.id = brand.toLowerCase();
    });
};

function getBrands(data) {
    let brands = [];
    data.filter((product) => {
        if (brands.includes(product.brand) === false)
            brands.push(product.brand);
    });
    return brands;
}

function generateCards(product) {
    return `
        <div class="card mb-4 col-3">
            <div class="row">
                <a>
                    <img id="main-page-img-url" src="${product.imageUrl}" class="card-img-top img-fluid" alt="...">
                    <span class="badge badge-warning">£ ${product.price}</span>
                </a>
                <div class="card-body p-0 mt-3">
                        <h5 class="card-title text-truncate">Name: ${product.name}</h5>
                        <p class="card-text mb-3">Description:  ${product.description}</p>
                </div>
            </div>
        </div>
    `;
}
