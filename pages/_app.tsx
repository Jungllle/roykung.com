import { AppProps } from "next/app";
import React from "react";
import Nav from "@components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Copyright from "@components/Copyright";
import { DefaultSeo } from "next-seo/lib";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DefaultSeo
        title={`Roy Lin 林昆彥`}
        description={`林昆彥 (Roy Lin). I'm a dreamer, singer and basketball player, loving jogging, reading and cooking, and now running a startup in Taipei, Taiwan.`}
        openGraph={{
          type: "website",
          locale: "en",
          url: "https://rokykung.com",
          site_name: "Roy Lin 林昆彥",
          images: [
            {
              url: "https://roykung.com/profile.png",
              alt: "Roy Lin 林昆彥",
            },
          ],
        }}
        twitter={{
          handle: "@roylinkung",
          site: "@roylinkung",
          cardType: "summary_large_image",
        }}
      />
      <Nav />
      <Container>
        <Component {...pageProps} />
        <Copyright />
      </Container>
    </div>
  );
}

export default App;
