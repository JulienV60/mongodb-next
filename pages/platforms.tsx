import { GetServerSideProps } from "next";
import { getDatabase } from "../src/database";
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const games = await mongodb.db().collection("games").find().toArray();
  const allPlatforms = games.map((element: any) => {
    return element.platform;
  });
  const allPlatformsName = allPlatforms.map((element: any) => {
    return element.name;
  });
  const uniquePlatform = allPlatformsName.filter(
    (value, index) => allPlatformsName.indexOf(value) === index
  );
  return {
    props: {
      platform: uniquePlatform,
    },
  };
};

export default function NameGame({ platform }: any) {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm6">
            <div className="card-body">
              <h5>{platform}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
