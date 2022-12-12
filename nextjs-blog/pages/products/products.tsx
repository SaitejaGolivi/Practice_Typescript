import React from "react";

export default function products({ data }: any) {
  return (
    <>
      <h1>products</h1>
      {data.map((e: any) => {
        <p>{e.id}</p>;
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { data } };
}
