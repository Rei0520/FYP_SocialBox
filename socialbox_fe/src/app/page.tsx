import "./page.css";
import { LandingPage } from "./pages/landing_page";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <div className="full_height">
      <LandingPage />
    </div>
  );
}
