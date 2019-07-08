const mandalas = [
  "A Father's Virtue",
  "A Mother's Love",
  "Abiding Beauty",
  "Burstingly Interwoven",
  "Community",
  "Compassion",
  "Divine Order",
  "Electric",
  "Essence",
  "Faith",
  "Fearless",
  "Freedom",
  "Friend",
  "Fullness of Life",
  "Gratitude",
  "Grief to Gold",
  "Here Now",
  "Infinity Wellness",
  "Inner Calling",
  "Integral Purity",
  "Lavallette",
  "Love",
  "Manifestation",
  "Meditation",
  "Mind Art",
  "My Heart to Yours",
  "Servant of Love",
  "Soft and Sweet",
  "Soul Dance",
  "Space",
  "The Fire in You",
  "The Metal in You",
  "The Wood in You",
  "Together",
  "True to Us",
  "Vibrations Abound",
  "Winter Blanket",
  "Wisdom Wheel"
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
