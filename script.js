document.addEventListener("DOMContentLoaded", () => {
  let items = [
    "https://i.postimg.cc/T2c3K2bY/Abe-Sapien-2.png",
    "https://i.postimg.cc/8PPPM8dd/Beast-2.png",
    "https://i.postimg.cc/LXpmsG61/Boba-Fett-3.png",
    "https://i.postimg.cc/TwJf5QpH/Bowser-1.png",
    "https://i.postimg.cc/FsRN1ymD/Darth-Vader-2.png",
    "https://i.postimg.cc/4NSZcYxZ/Davy-Jones-1.png",
    "https://i.postimg.cc/SxY4fmn9/Diego-1.png",
    "https://i.postimg.cc/zfmrd4hc/Dr-Manhattan-1.png",
    "https://i.postimg.cc/SKWpHV7N/Duke-Sigmund-1.png",
    "https://i.postimg.cc/J0dwjFmK/Gill-3.png",
    "https://i.postimg.cc/ZYfhkW33/Leonardo-1.png",
    "https://i.postimg.cc/fTpnL18R/Lucius-Malfoy-1.png",
    "https://i.postimg.cc/vHcwGGLK/Master-Hand-1.png",
    "https://i.postimg.cc/LXHGwS8N/Mola-Ram-2.png",
    "https://i.postimg.cc/6qqg6hRZ/Robin-Hood.png",
    "https://i.postimg.cc/JzZgh0yp/Shadow-2.png",
    "https://i.postimg.cc/KYbW3bBx/Shredder-1.png",
    "https://i.postimg.cc/9MgPsRdJ/ezgif-com-resize.png",
    "https://i.postimg.cc/Tw7NsWS3/Smaug-1.png",
    "https://i.postimg.cc/HnFZY1TG/Spirit-2.png",
    "https://i.postimg.cc/CLfrv54w/Sportacus-2.png",
    "https://i.postimg.cc/SxFTH4ZC/Ted-Rumsworth-1.png",
    "https://i.postimg.cc/g0GMkDb0/Witch-King-2.png",
    "https://i.postimg.cc/ncK0DH93/Joker-1.png",
    "https://i.postimg.cc/MTDpBfxW/Nightcrawler-2.png",
    "https://i.postimg.cc/NF4xbJN2/ezgif-7-60421470a1.png"
  ];
  let tiers = ["S", "A", "B", "C", "D", "F"];

  const tierListContainer = document.getElementById("tierlist-container");

  tiers.forEach((tier) => {
    const tierElement = document.createElement("div");
    tierElement.className = "tier";
    tierElement.innerHTML = `
      <div class="tier-inner">
        <div class="tier-header">
          <div class="title-block">${tier}</div>
        </div>
        <div class="tier-content">
        </div>
        <div class="tier-controls">
          <div class="tier-control-block"></div>
        </div>
      </div>
    `;

    tierListContainer.appendChild(tierElement);
  });

  //

  const validImageFormats = [".png", ".jpg", ".jpeg", ".gif"];
  const itemListContainer = document.getElementById("itemlist-inner");

  // Create items
  items.forEach((item) => {
    const fileExtension = item.slice(item.lastIndexOf(".")).toLowerCase();
    if (validImageFormats.includes(fileExtension)) {
      const itemElement = document.createElement("div");
      itemElement.className = "item";
      itemElement.innerHTML = `<img src="${item}" alt="Item image"/>`;

      itemListContainer.appendChild(itemElement);
    }
  });

  //
  let targetItemStorage = document.getElementById("itemlist-inner");
  let targetTiers = document.querySelectorAll(".tier-content");
  //

  const containers = [
    document.getElementById("itemlist-inner"),
    ...document.querySelectorAll(".tier-content")
  ];

  dragula(containers, {}); //
});
