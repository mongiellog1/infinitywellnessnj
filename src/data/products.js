const mandalas = [
  "Burstingly Interwoven",
  "Divine Order",
  "Gratitude",
  "Grief to Gold",
  "Infinity Wellness",
  "Inner Calling",
  "Lavallette",
  "Love",
  "Soul Dance",
  "Vibrations Abound",
  "A Father's Virtue",
  "A Mother's Love",
  "Abiding Beauty",
  "Community",
  "Compassion",
  "Electric",
  "Faith",
  "Freedom",
  "Friend",
  "Manifestation",
  "Meditation",
  "Mind Art",
  "Soft and Sweet",
  "The Fire in You",
  "The Metal in You",
  "The Wood in You",
  "Winter Blanket",
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
const getName = (rawTitle) => (
  rawTitle
    .replace(
      /(?=\S*['-])([a-zA-Z'-]+)|([a-zA-Z]*)/g,
      (word) => word.toLowerCase().replace(/[-_']*/g, "")
    )
    .replace(/ /g, "_")
);
const mandalaBaseId = 1
    , mandalaPrice = 4
    , mandalaCategory = "card"
    , mandalaDescription = "A mandala card.";

mandalas.forEach((mandala, idx) => products.push({
    id: makeId(mandalaBaseId, idx),
    name: getName(mandala),
    title: mandala,
    price: mandalaPrice,
    category: mandalaCategory,
    description: mandalaDescription,
  }
));

export default products;
