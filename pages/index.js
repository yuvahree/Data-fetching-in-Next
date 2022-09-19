import Head from "next/head";
import ArticleList from "../component/ArticleList";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>yuvashree next</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
      {/* <h1>welcome to next js free coure</h1> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
