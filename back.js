const formSubmit = async (event) => {
    console.log(event.target);
    event.preventDefault();

    const newFormEvent = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("image").value,
        price: document.getElementById("price").value,
    };

    const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
            method: "POST",
            body: JSON.stringify(newFormEvent),
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearerey JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NDk4NTQyMDMsImV4cCI6MTY1MTA2MzgwM30.YiCJ31GpRLOUvO5vR5gDHAq_jwBdL_IGCSUocgHn4dE",
            },
        }
    );

    if (response.ok) {
        const body = await response.json();

        alert("New item added in store - id: " + body._id);
        console.log(response);
    }
    window.location.reload();
};
