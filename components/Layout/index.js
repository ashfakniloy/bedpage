import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
// import Sidebar from "./Sidebar";

function Layout({ children, pageDetails }) {
  // const { title, description, keywords } = pageDetails;

  return (
    <div className="bg-custom-gray text-slate-100">
      <Head>
        <title>
          free classified site, bedpage , female escorts, body rubs, ts escort,
          escort ads, adult jobs, strip clubs, exotic dancers, craigslist
          personal, bed page
        </title>
        <meta name="description" content="bedpage" />
        <meta name="keywords" content="bedpage" />
      </Head>

      <>
        <div className="container">
          <Header />

          {children}
        </div>
        <Footer />
      </>
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
