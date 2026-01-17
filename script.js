(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://github.com/Zylus08/valentine/blob/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "Maan jao naa...",
    "Please say yes!",
    "Aise kon pareshan krta hai yaar...",
    "Sach mei pyaar krta hu tumse...",
    "I love you! ❤️",
    "Dekh lo itne pyaar se bol rha hu...",
    "Sohniye maan ja na....",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];

    if (messages[messageIndex] === "Sohniye maan ja na....") {
        setTimeout(() => {
            window.location.href = 'no_page.html';
        }, 1000); // 1 second delay before redirecting
        return;
    }

    messageIndex = (messageIndex + 1) % messages.length;
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    
    // Get the current dimensions of the buttons
    const currentYesWidth = parseFloat(window.getComputedStyle(yesButton).width);
    const currentYesHeight = parseFloat(window.getComputedStyle(yesButton).height);
    const currentNoWidth = parseFloat(window.getComputedStyle(noButton).width);
    const currentNoHeight = parseFloat(window.getComputedStyle(noButton).height);
    
    // Update the dimensions
    yesButton.style.width = `${currentYesWidth * 1.25}px`;
    yesButton.style.height = `${currentYesHeight * 1.25}px`;

    yesButton.style.fontSize = `${currentYesSize * 1.25}px`;

    // Center-align and wrap the text inside the buttons
    yesButton.style.display = 'flex';
    yesButton.style.justifyContent = 'center';
    yesButton.style.alignItems = 'center';
    yesButton.style.textAlign = 'center';
    yesButton.style.whiteSpace = 'normal'; // Ensure text wraps
    
    noButton.style.display = 'flex';
    noButton.style.justifyContent = 'center';
    noButton.style.alignItems = 'center';
    noButton.style.textAlign = 'center';
    noButton.style.whiteSpace = 'normal'; // Ensure text wraps
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}