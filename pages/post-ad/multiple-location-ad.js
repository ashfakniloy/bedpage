import Layout from "../../components/Layout";
import { servicesData } from "../../components/data/servicesData";
import MultiLocationAd from "../../components/Dashboard/MultiLocationAd";

function MultipleLocationAdPage() {
  const formTitle = "Post Ad in Multiple Cities";

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
      <MultiLocationAd formTitle={formTitle} services={services} />
    </Layout>
  );
}

export default MultipleLocationAdPage;
