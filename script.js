// Main WhatsApp Contact Number
const targetWhatsApp = "923006914487";

// Function to handle PUBG UC Order
function orderPUBG() {
    const pubgID = document.getElementById('pubg-id').value.trim();
    const region = document.getElementById('pubg-region').value;
    const pack = document.getElementById('pubg-uc-pack').value;

    if (!pubgID) {
        alert("Please enter your PUBG Character ID or Name first!");
        return;
    }

    const message = `*NEW PUBG UC ORDER - SHAHEEN E-STORE*%0A%0A` +
                    `*Character ID/Name:* ${pubgID}%0A` +
                    `*Region:* ${region}%0A` +
                    `*UC Pack:* ${pack}%0A` +
                    `*Pricing:* Midasbuy Rate + RS 50%0A%0A` +
                    `Please share total bill and payment details (JazzCash/EasyPaisa).`;

    window.open(`https://wa.me/${targetWhatsApp}?text=${message}`, '_blank');
}

// Function to handle Yalla Ludo Order
function orderYalla() {
    const yallaID = document.getElementById('yalla-id').value.trim();

    if (!yallaID) {
        alert("Please enter your Yalla Ludo ID!");
        return;
    }

    const message = `*YALLA LUDO DIAMONDS ORDER - SHAHEEN E-STORE*%0A%0A` +
                    `*User ID:* ${yallaID}%0A%0A` +
                    `Please send me the price list.`;

    window.open(`https://wa.me/${targetWhatsApp}?text=${message}`, '_blank');
}

// Generic function for TikTok, YouTube, Cards & Social Media
function orderGeneric(serviceTitle, elementId) {
    const selectedOption = document.getElementById(elementId).value;

    const message = `*NEW INQUIRY - SHAHEEN E-STORE*%0A%0A` +
                    `*Service:* ${serviceTitle}%0A` +
                    `*Selected Option:* ${selectedOption}%0A%0A` +
                    `I am interested in this service. Please provide price and details.`;

    window.open(`https://wa.me/${targetWhatsApp}?text=${message}`, '_blank');
}
