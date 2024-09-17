import Banner1 from "./Assets/Banner/Banner 1.jpg";
import Banner2 from "./Assets/Banner/Banner 2.jpg";
import Banner3 from "./Assets/Banner/Banner 3.jpg";
import Banner4 from "./Assets/Banner/Banner 4.jpg";
import Book1 from "./Assets/Category/Book 1.jpg";
import Book2 from "./Assets/Category/Book 2.jpg";
import Book3 from "./Assets/Category/Book 3.jpg";
import Book4 from "./Assets/Category/Book 4.jpg";
import Book5 from "./Assets/Category/Book 5.jpg";
import Book6 from "./Assets/Category/Book 6.jpg";
import Book7 from "./Assets/Category/Book 7.jpg";
import Book8 from "./Assets/Category/Book 8.jpg";

import Gift1 from "./Assets/Gifts/Book 1.jpg";
import Gift2 from "./Assets/Gifts/Book 2.jpg";
import Gift3 from "./Assets/Gifts/Book 3.jpg";
import Gift4 from "./Assets/Gifts/Book 4.jpg";
import Gift5 from "./Assets/Gifts/Book 5.jpg";
import Gift6 from "./Assets/Gifts/Book 6.jpg";
import Gift7 from "./Assets/Gifts/Book 7.jpg";

import Essential1 from "./Assets/Essentials/Book 1.jpg";
import Essential2 from "./Assets/Essentials/Book 2.jpg";
import Essential3 from "./Assets/Essentials/Book 3.jpg";
import Essential4 from "./Assets/Essentials/Book 4.jpg";
import Essential5 from "./Assets/Essentials/Book 5.jpg";
import Essential6 from "./Assets/Essentials/Book 6.jpg";
import Essential7 from "./Assets/Essentials/Book 7.jpg";

import BeautyBook1 from "./Assets/Beauty/Book 1.jpg";
import BeautyBook2 from "./Assets/Beauty/Book 2.jpg";
import BeautyBook3 from "./Assets/Beauty/Book 3.jpg";
import BeautyBook4 from "./Assets/Beauty/Book 4.jpg";
import BeautyBook5 from "./Assets/Beauty/Book 5.jpg";
import BeautyBook6 from "./Assets/Beauty/Book 6.jpg";
import BeautyBook7 from "./Assets/Beauty/Book 7.jpg";

export const CategoryBarData = [
    {
      imageSrc: Book1,
      category: "Romance",
    },
    {
      imageSrc: Book2,
      category: "Mystery",
    },
    {
      imageSrc: Book3,
      category: "Science Fiction",
    },
    {
      imageSrc: Book4,
      category: "Fantasy",
    },
    {
      imageSrc: Book5,
      category: "Horror",
    },
    {
      imageSrc: Book6,
      category: "Historical Fiction",
    },
    {
      imageSrc: Book7,
      category: "Non-Fiction",
    },
    {
      imageSrc: Book8,
      category: "Self-Help",
    },
  ];
  
  export const CarouselData = [
    {
      id: 1,
      Imgsrc: Banner1,
    },
    {
      id: 2,
      Imgsrc: Banner2,
    },
    {
      id: 3,
      Imgsrc: Banner3,
    },
    {
      id: 4,
      Imgsrc: Banner4,
    },
  ];
  
  export const BestOf = {
    TrendingBooks: [
      {
        ImgSrc: require("./Assets/Best/Book 1.jpeg"),
        CategoryName: "Dowry of Blood",
        Brand: "By S.T. Gibson",
      },
      {
        ImgSrc: require("./Assets/Best/Book 2.jpg"),
        CategoryName: "The Silent Patient",
        Brand: "By Alex Michaelides",
      },
      {
        ImgSrc: require("./Assets/Best/Book 3.jpg"),
        CategoryName: "The Three-Body Problem",
        Brand: "By Liu Cixin",
      },
      {
        ImgSrc: require("./Assets/Best/Book 4.jpg"),
        CategoryName: "The Heaven & Earth Grocery Store",
        Brand: "By James McBride",
      },
      {
        ImgSrc: require("./Assets/Best/Book 5.jpg"),
        CategoryName: "The Fisherman",
        Brand: "By John Langan",
      },
      {
        ImgSrc: require("./Assets/Best/Book 6.jpg"),
        CategoryName: "The Nightingale",
        Brand: "By Kristin Hannah",
      },
      {
        ImgSrc: require("./Assets/Best/Book 7.jpg"),
        CategoryName: "Sapiens: A Brief History of Humankind",
        Brand: "By Yuval Noah Harari",
      },
    ],

    Beauty: [
      {
        ImgSrc: BeautyBook1,
        CategoryName: "Don't Go to the Cosmetics Counter Without Me",
        Brand: "By Paula Begoun",
      },
      {
        ImgSrc: BeautyBook2,
        CategoryName: "Black Skin: The Definitive Skincare Guide",
        Brand: "By Dija Ayodele",
      },
      {
        ImgSrc: BeautyBook3,
        CategoryName: "Aesthetics Exposed: Mastering Skin Care in a Medical Setting and Beyond",
        Brand: "By Terri A. Wojak LE",
      },
      {
        ImgSrc: BeautyBook4,
        CategoryName: "Pretty Honest: The Straight-Talking Beauty Companion",
        Brand: "By Sali Hughes",
      },
      {
        ImgSrc: BeautyBook5,
        CategoryName: "Bobbi Brown Beauty Rules: Fabulous Looks, Beauty Essentials, and Life Lessons",
        Brand: "By Bobbi Brown",
      },
      {
        ImgSrc: BeautyBook6,
        CategoryName: "Skincare for Your Soul: Achieving Outer Beauty and Inner Peace with Korean Skincare",
        Brand: "By Jude Chao",
      },
      {
        ImgSrc: BeautyBook7,
        CategoryName: "Let's Face It: Secrets of a Skincare Obsessive",
        Brand: "By Rio Viera-Newton",
      },
    ],

    Essentials: [
      {
        ImgSrc: Essential1,
        CategoryName: "To Kill a Mockingbird",
        Brand: "By Harper Lee",
      },
      {
        ImgSrc: Essential2,
        CategoryName: "The Alchemist",
        Brand: "By Paulo Coelho",
      },
      {
        ImgSrc: Essential3,
        CategoryName: "1984",
        Brand: "By George Orwell",
      },
      {
        ImgSrc: Essential4,
        CategoryName: "The Little Prince",
        Brand: "By Antoine de Saint-Exupéry",
      },
      {
        ImgSrc: Essential5,
        CategoryName: "Pride and Prejudice",
        Brand: "By Jane Austen",
      },
      {
        ImgSrc: Essential6,
        CategoryName: "The Catcher in the Rye",
        Brand: "By J.D. Salinger",
      },
      {
        ImgSrc: Essential7,
        CategoryName: "The Picture of Dorian Gray",
        Brand: "By Oscar Wilde",
      },
    ],

    Gifts: [
      {
        ImgSrc: Gift1,
        CategoryName: "The Happiness Project",
        Brand: "By Gretchen Rubin",
      },
      {
        ImgSrc: Gift2,
        CategoryName: "The 7 Habits of Highly Effective People",
        Brand: "By Stephen Covey",
      },
      {
        ImgSrc: Gift3,
        CategoryName: "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead",
        Brand: "By Brené Brown",
      },
      {
        ImgSrc: Gift4,
        CategoryName: "The Power of Now",
        Brand: "By Eckhart Tolle",
      },
      {
        ImgSrc: Gift5,
        CategoryName: "Big Magic: Creative Living Beyond Fear",
        Brand: "By Elizabeth Gilbert",
      },
      {
        ImgSrc: Gift6,
        CategoryName: "The Miracle Morning",
        Brand: "By Hal Elrod",
      },
      {
        ImgSrc: Gift7,
        CategoryName: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        Brand: "By Jen Sincero",
      },
    ],
  };
  
  export const Products = [{ ImgSrc: "", ProductName: "", OriginalPrice: "" }];