export class Product {
  constructor({ sku, name, price, category, description, quantity }) {
    this.sku = sku || -1;
    this.name = name || "N/A";
    this.price = parseFloat(price) || -1;
    this.category = category || "N/A";
    this.description = description || "N/A";
    this.quantity = parseInt(quantity) || -1;
  }
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(2));
}

export function randomProduct(full = true) {
  const categories = ["Welding", "Safety", "Gas Cylinders", "Tools", "Protective Gear", "Other"];

  const adjectives = ["Industrial", "Heavy-Duty", "Compact", "High-Pressure", "Lightweight",
    "Pink", "Green", "Turquoise", "Awesome", "Yellow", "Ugly", "Archaic", "Esoteric",
    "Spooky", "Evil", "Low-quality", "Disgusting", "Miniature", "Grimy", "Shiny", "Clean",
    "Wild", "Rusty", "Immaculate", "Whimsical", "Beautiful", "Sparkly", "Liquid"];

  const items = ["Oxygen Cylinder", "Helium Tank", "Face Shield", "Welding Torch", "Gloves",
    "Regulator", "Forklift", "Screws", "Nitrogen Cannister", "Waffle Iron", "Beanbag Chair",
    "Tree", "Crowbar", "Slime", "Baseball Bat", "Scissors", "Pliers", "Welding Torch",
    "Soldering Iron", "Saxophone", "Piano", "Xylophone", "Fax Machine", "Goldfish"];

  const name = `${randomChoice(adjectives)} ${randomChoice(items)}`;
  const description = `A ${name.toLowerCase()} designed for ${randomChoice([
    "professional use", "industrial safety", "reliable performance",
    "everyday work", "leisure", "recreation"
  ])}.`;

  const price = randomFloat(10, 500);
  const category = randomChoice(categories);
  const quantity = randomInt(0, 200);
  const sku = "AIR-" + randomInt(10000, 99999);

  let productData = {
    sku,
    name,
    price,
    category,
    description,
    quantity
  };

  if (!full) {
    const numToRemove = randomInt(1, 4);
    const keys = Object.keys(productData);

    for (let i = 0; i < numToRemove; i++) {
      const randomKey = randomChoice(keys);
      delete productData[randomKey];

      const idx = keys.indexOf(randomKey);
      if (idx !== -1)
        keys.splice(idx, 1);
    }
  }
  return new Product(productData);
}
