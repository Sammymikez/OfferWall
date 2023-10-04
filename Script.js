// Sample data for offers (replace with your actual data)
const initialOffers = [
    { id: 1, title: "Offer 1", description: "Description for Offer 1" },
    { id: 2, title: "Offer 2", description: "Description for Offer 2" },
    { id: 3, title: "Offer 3", description: "Description for Offer 3" },
];

// Function to render the offer wall
function renderOfferWall(offers) {
    const offerList = document.getElementById("offerList");
    offerList.innerHTML = ""; // Clear existing offers

    offers.forEach((offer) => {
        const offerItem = document.createElement("div");
        offerItem.classList.add("offer");
        offerItem.innerHTML = `
            <h2>${offer.title}</h2>
            <p>${offer.description}</p>
        `;
        offerList.appendChild(offerItem);
    });
}

// Initial rendering of offers
renderOfferWall(initialOffers);

// Function to toggle the edit mode
function toggleEditMode() {
    const editButton = document.getElementById("editButton");
    const offerList = document.getElementById("offerList");
    
    if (editButton.textContent === "Edit Offers") {
        editButton.textContent = "Done Editing";
        offerList.contentEditable = "true";
        offerList.classList.add("editable");
    } else {
        editButton.textContent = "Edit Offers";
        offerList.contentEditable = "false";
        offerList.classList.remove("editable");
        // Save the updated offers (you'd need a backend for this)
        const updatedOffers = Array.from(offerList.children).map((offerItem, index) => ({
            id: index + 1,
            title: offerItem.querySelector("h2").textContent,
            description: offerItem.querySelector("p").textContent,
        }));
        console.log("Updated Offers:", updatedOffers);
    }
}

// Event listener for the edit button
document.getElementById("editButton").addEventListener("click", toggleEditMode);
