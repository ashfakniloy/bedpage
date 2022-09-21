import Banner from "../components/Home/Banner";
import Description from "../components/Home/Description";
import Locations from "../components/Home/Locations";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Locations />
      <Description />
    </Layout>
  );
}
