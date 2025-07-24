import Privacy from "@/components/Privacy/Privacy";
import Head from "next/head";

function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />

      </Head>
      <Privacy/>
     
    </>
  )
}

export default PrivacyPage;
