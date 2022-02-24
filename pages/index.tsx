import Head from "next/head";
import Navbar from "components/Navbar";
import Card from "components/Card";
import gradients from "data/gradients.json";
const HomePage = () => {
  const title =
    "NextGradiento - #1 home for your next project, website or app.";
  const description =
    "Amazing css homes that you can use in your projects, websites and apps.";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={"Hayrulla Huseynov"} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
        {gradients.map((gradient) => (
          <Card colors={gradient.colors} key={gradient.name} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
