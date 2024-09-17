const bookImages = require.context('./Assets/Books', false, /\.(jpeg|jpg|png|gif)$/);
const books = bookImages.keys().reduce((acc, path) => {
  const key = path.replace('./', '').split('.')[0];
  acc[key] = bookImages(path);
  return acc;
}, {});

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRating() {
  return (Math.random() * 4 + 1).toFixed(1);
}

function getRandomReviews() {
  return Math.floor(Math.random() * (1000 - 10 + 1) + 10);
}

export const ProductsData = [
  {
    "id": 1,
    "Product": "My Life in France",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A memoir by Julia Child and Alex Prud'homme",
    "url": books['Book 1'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 2,
    "Product": "A Field Guide to Getting Lost",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A collection of essays by Rebecca Solnit",
    "url": books['Book 2'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 3,
    "Product": "The Signature of All Things",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Elizabeth Gilbert",
    "url": books['Book 3'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 4,
    "Product": "The Flamethrowers",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Rachel Kushner",
    "url": books['Book 4'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 5,
    "Product": "The Luminaries",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Eleanor Catton",
    "url": books['Book 5'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 6,
    "Product": "The Brief Wondrous Life of Oscar Wao",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Junot Díaz",
    "url": books['Book 6'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 7,
    "Product": "The Immortal Life of Henrietta Lacks",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A non-fiction book by Rebecca Skloot",
    "url": books['Book 7'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 8,
    "Product": "The Song of Achilles",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Madeline Miller",
    "url": books['Book 8'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 9,
    "Product": "The Night Circus",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Erin Morgenstern",
    "url": books['Book 9'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  },
  {
    "id": 10,
    "Product": "The Particular Sadness of Lemon Cake",
    "Sellingprice": getRandomPrice(500, 1000).toString(),
    "Orginalprice": getRandomPrice(1000, 5000).toString(),
    "Descripition": "A novel by Aimee Bender",
    "url": books['Book 10'],
    "rating": getRandomRating(),
    "reviews": getRandomReviews()
  }
];