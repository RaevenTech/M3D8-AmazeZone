const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
};

let firstfucntionPageinfo = async () => {
    const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        options
    );
    const parsedBody = await response.json();
    console.log(parsedBody);

    let listgroup = document.querySelector(".list-group");

    listgroup.innerHTML = "";
    parsedBody.forEach((userinput) => {
        let newProductCard = document.createElement("li");
        newProductCard.innerHTML = `
      <li class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h2 class="brand-name">${userinput.name}</h2>
                  <p>Brand: ${userinput.brand}</p>
                  <p>Description: ${userinput.description}</p>
                  <p><a href="${userinput.imageUrl}">Image</a></p>
                  <small><p class="product-id">${userinput._id}</p></small>
                  
                  
                </div>
               <div><span class="badge badge-secondary badge-pill">€${userinput.price}</span></div>
            
              </li>`;
        listgroup.appendChild(newProductCard);
    });
};

window.onload = () => {
    firstfucntionPageinfo();
};

const deleteProductById = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
};

let deleteButtonFunction = async (event) => {
    console.log(
        event.target.parentElement.parentElement.querySelector(".product-id")
            .innerText
    );
    let productId =
        event.target.parentElement.parentElement.querySelector(
            ".product-id"
        ).innerText;
    let uniqueProductName =
        event.target.parentElement.parentElement.querySelector(
            ".unique-name"
        ).innerText;

    const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/" + productId,
        deleteProductById
    );
    const parsedBody = await response.json();
    console.log(parsedBody);

    alert(
        uniqueProductName +
            " has now been deleted. " +
            "This was the productID: " +
            productId
    );
    window.location.reload();
};
