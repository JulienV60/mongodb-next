import { GetServerSideProps } from "next";
import { getDatabase } from "../src/database";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const games = await mongodb.db().collection("games").find().toArray();
  const allName = games.map((element: any) => {
    return element.name;
  });
  const cover = games.map((element: any) => {
    if (element.cover == null) {
      return false;
    } else {
      return element.cover.url;
    }
  });

  return {
    props: {
      name: allName,
      cover: cover,
      game: games,
    },
  };
};

export default function NameGame({ name, cover, game }: any) {
  return (
    <Layout>
      <div className="container" key="ok">
        <div className="row" key="ok">
          <div className="col-sm-6" key="mdr" style={{ maxWidth: "18rem" }}>
            <div key="lol" className="card">
              {cover.map((element: any) => {
                return (
                  <img
                    style={{ maxHeight: "18rem;", maxWidth: "18rem" }}
                    className="card-img-top"
                    key="toto"
                    alt=""
                    src={element}
                  ></img>
                );
              })}{" "}
              <div key="ok" className="card-body">
                <h5 key="ok" className="card-title">
                  {name}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
