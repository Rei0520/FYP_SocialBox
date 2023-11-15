import { img } from "@/app/assets";
import "./landingPage.css";
import Image from "next/image";

export const LandingPage = () => {
  return (
    <div className="flex_center full_height">
      <div className="flex">
        <Image src={img.WebLogo} alt="web logo" className="webLogo" />
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
