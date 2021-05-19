import { AppProps } from "next/app";
import React from "react";
import Nav from "@components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Copyright from "@components/Copyright";
import { DefaultSeo } from "next-seo";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <DefaultSeo
      title={`Roy Lin 林昆彥`}
      description={`林昆彥 (Roy Lin). I'm a dreamer, singer and basketball player, loving jogging, reading and cooking, and now running a startup in Taipei, Taiwan.`}
      openGraph={{
        title: "Roy Lin 林昆彥",
        description:
          "林昆彥 (Roy Lin). I'm a dreamer, singer and basketball player, loving jogging, reading and cooking, and now running a startup in Taipei, Taiwan.",
        type: "website",
        locale: "en",
        url: "https://roykung.com",
        site_name: "Roy Lin 林昆彥",
        images: [
          {
            url: "https://roykung.com/profile.jpeg",
            width: 592,
            height: 569,
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
    <Nav/>
    <Container>
      <Component {...pageProps} />
      <Copyright/>
    </Container>
  </div>
);

export default App;
