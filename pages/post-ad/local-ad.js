import Layout from "../../components/Layout";
import PostAd from "../../components/Dashboard/PostAd";
import { servicesData } from "../../components/data/servicesData";
import LocalAd from "../../components/Dashboard/LocalAd";

function LocalAdPage() {
  const formTitle = "Post Local Ad";

  const selectedServices = [
    "Adult",
    "Dating",
    "Automotive",
    "Buy/Sell/Trade",
    "Community",
    "Jobs",
    "Local Places",
    "Musician",
    "Real Estate",
    "Rentals",
    "Services",
    "Massage",
  ];

  const services = selectedServices.map((service) =>
    servicesData.find((services) => services.name === service)
  );

  return (
    <Layout>
      {/* <PostAd formTitle={formTitle} services={services} /> */}
      <LocalAd formTitle={formTitle} services={services} />
    </Layout>
  );
}

export default LocalAdPage;
