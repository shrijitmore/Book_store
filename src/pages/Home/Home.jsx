import React from "react";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import CategoryBar from "../../Components/CategoryBar/CategoryBar";
import LoginModel from "../../Components/LoginModel/LoginModel";
import ProductCarousel from "../../Components/CategoryCarousel/CategoryCarousel";
import { CategoryBarData } from "../../Datas";
import { CarouselData } from "../../Datas";
import { BestOf } from "../../Datas";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
      <div className="Home-Container">
        <div className="Home-Carousel">
          <BannerCarousel data={CarouselData} />
        </div>

        <div className="Home-ProductCarousel">
        <ProductCarousel
  BgImg={
    "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
  }
  Title={"Best of Year"}
  Data={BestOf.TrendingBooks}
/>
<ProductCarousel
  BgImg={
    "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
  }
  Title={"Beauty"}
  Data={BestOf.Beauty} // Use different data
/>
<ProductCarousel
  BgImg={
    "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
  }
  Title={"Essentials"}
  Data={BestOf.Essentials} // Use different data
/>
<ProductCarousel
  BgImg={
    "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
  }
  Title={"Gift Specials"}
  Data={BestOf.Gifts} // Use different data
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
