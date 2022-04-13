const getProducts = () => {
    let product = {
        name: document.getElementById("product-name").value,
        description: document.getElementById("product-description").value,
        brand: document.getElementById("product-brand").value,
        imageUrl: document.getElementById("product-image").value,
        price: document.getElementById("product-price").value,
    };
    let productsToString = JSON.stringify(product);
    return productsToString;
};
console.log(getProducts());

const insertNewProduct = async (err) => {
    try {
        err.preventDefault();
        let product = getProducts();
        let apiResponce = await fetch(
            "https://striveschool-api.herokuapp.com/api/product/",
            {
                method: "POST",
                body: product,
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NDk4NTQyMDMsImV4cCI6MTY1MTA2MzgwM30.YiCJ31GpRLOUvO5vR5gDHAq_jwBdL_IGCSUocgHn4dE",
                    "Content-Type": "application/json",
                },
            }
        );

        let apiData = await apiResponce.json();
        console.log(apiData);
        document.querySelector("form").reset();
        alert(`${apiData.name} has been added`);
    } catch (err) {
        alert(error);
    }
};
