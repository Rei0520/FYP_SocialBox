import { img } from "@/app/assets";
import "./landingPage.css";
import Image from "next/image";

export const LandingPage = () => {
  let temp = [
    {
      img: img.top,
      title: "The Weirdo Ghost Gang",
      creator: "Pixart Motion",
      type: "Fixed price",
      price: "0.001",
    },
    {
      img: img.mirror_glass,
      title: "Mirror Glass Efect",
      creator: "Alex Martin",
      type: "Open bidding",
      price: "0.005",
    },
    {
      img: img.neon,
      title: "Neon in Life",
      creator: "Ali Keyan",
      type: "Fixed price",
      price: "0.002",
    },
    {
      img: img.oil,
      title: "Oil Source",
      creator: "Gon Thomas",
      type: "Fixed price",
      price: "0.001",
    },
  ];

  const Card = ({ img, title, creator, type, price }: any) => {
    return (
      <div key={title} className="landing_card full_width">
        <Image
          className="landing_img"
          width={100}
          height={100}
          src={img}
          alt={title}
        />
        <div className="landing_img_title">{title}</div>
        <div className="landing_card_creator">{creator}</div>
        <hr />
        <div className="flex_center landing_card_bottom_container">
          <div className="landing_card_type">{type}</div>
          <div className="flex_grow" />
          <div className="landing_card_price">{price}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex_center full_height landing">
      <div className="flex full_width">
        <div className="landing_card_container">
          <Image src={img.WebLogo} alt="web logo" className="webLogo" />
          <div className="flex_center landing_gap">
            {temp.map(({ creator, img, price, title, type }) => (
              <Card
                img={img}
                creator={creator}
                price={price}
                title={title}
                type={type}
              />
            ))}
          </div>
        </div>
        <div className="flex_grow" />
        <div className="text_container">
          <div className="title">SocialBox</div>
          <div className="desc">
            Access the biggest scratch card battle in Web3 history with your
            Eden Pass! Earn USDC based on your Eden Battle Pass. No risk, no
            reward. So just do it! NFA!
          </div>
          <button className="mint_button">Mint Now</button>
          <div className="flex landingpage_social">
            <Image
              className="landingpage_social_icon"
              src={img.discord}
              alt="discord"
            />
            <Image
              className="landingpage_social_icon"
              src={img.twitter}
              alt="X"
            />
            <Image
              className="landingpage_social_icon"
              src={img.telegram}
              alt="telegram"
            />
            <Image
              className="landingpage_social_icon"
              src={img.openSea}
              alt="openSea"
            />
            <Image
              className="landingpage_social_icon"
              src={img.whitepaper}
              alt="whitepaper"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
