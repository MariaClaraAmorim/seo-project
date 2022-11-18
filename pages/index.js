import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="title"
          content="Home | Meu portfólio"
        />
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" name="imagem" content="/bikeOGGI.png" />
        <meta
          property="og:image:secure_url"
          name="imagem"
          content="/bikeOGGI.png"
        />
        <meta name="twitter:image" content="/bikeOGGI.png" />
        <meta name="twitter:image:src" content="/bikeOGGI.png" />
        <meta name="skype:image" content="/bikeOGGI.png" />
        <meta name="skype:image:src" content="/bikeOGGI.png" />
        <meta name="whatsapp:image" content="/bikeOGGI.png" />
        <meta name="whatsapp:image:src" content="/bikeOGGI.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
