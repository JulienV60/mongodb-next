import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { getServerSideProps } from "./games";
const Home: NextPage = () => {
  return <Layout></Layout>;
};

export default Home;
