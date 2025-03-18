import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HeroSection from "../components/HeroSection";
import BackgroundGraphic from "../components/BackgroundGraphic";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <Navbar />
      <SearchBar />
      <HeroSection />
      <BackgroundGraphic />
    </div>
  );
};

export default Home;
