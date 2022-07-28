import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout({ children, pageDetails }) {
  // const { title, description, keywords } = pageDetails;

  return (
    <div>
      <Head>
        <title>
          bedpage Auburn, female escorts, body rubs, ts escort, escort ads,
          adult jobs, strip clubs, exotic dancers, craigslist personal, bed page
        </title>
        <meta
          name="description"
          content="bedpage Auburn, female escorts, body rubs, ts escort, escort ads, adult jobs, strip clubs, exotic dancers, craigslist personal, bed page"
        />
        <meta
          name="keywords"
          content="bedpage Auburn, female escorts, body rubs, ts escort, escort ads, adult jobs, strip clubs, exotic dancers, craigslist personal, adultsearch, cityxguide.com, erotic monkey, bed page"
        />
      </Head>

      <div className="font-arial">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
}

// Layout.defaultProps = {
//   pageDetails: {
//     title: "School Management system",
//     description: "School Management Website",
//     keywords: "School Management Website",
//   },
// };

export default Layout;
