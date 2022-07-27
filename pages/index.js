import Description from "../components/Home/Description";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Locations from "../components/Home/Locations";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Locations />
      <Description />
      <Footer />
    </div>
  );
}
