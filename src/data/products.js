const mandalas = [
  "burstingly_interwoven",
  "divine_order",
  "gratitude",
  "grief_to_gold",
  "infinity_wellness",
  "inner_calling",
  "lavallette",
  "love",
  "soul_dance",
  "vibrations_abound"
];

const fourDigitId = (number) => {
  const str = String(number);
  return str.length > 4 ?
    str :
    "0".repeat(4 - str.length) + str;
}

const products = [];

// Use category for different types of items
// i.e. cards = 0001, books = 0002, etc.
const makeId = (baseId, id) => (`${fourDigitId(baseId)}${fourDigitId(id)}`)

const mandalaBaseId = 1
    , mandalaPrice = 4
    , mandalaCategory = "card"
    , mandalaDescription = "A mandala card.";

mandalas.forEach((mandala, idx) => products.push({
    id: makeId(mandalaBaseId, idx),
    name: mandala,
    price: mandalaPrice,
    category: mandalaCategory,
    description: mandalaDescription
  }
))

export default products;
