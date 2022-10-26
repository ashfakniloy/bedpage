import FreeAd from "../../components/Dashboard/FreeAd";
import FreeAd2 from "../../components/Dashboard/FreeAd2";
import { servicesData } from "../../components/data/servicesData";
import Layout from "../../components/Layout";

function FreeAdPage() {
  const formTitle = "Post Free Ad";

  const selectedServices = [
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

  // console.log(services);

  return (
    <Layout>
      {/* <FreeAd formTitle={formTitle} services={services} /> */}
      <FreeAd2 formTitle={formTitle} services={services} />
    </Layout>
  );
}

export default FreeAdPage;
