import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SelectedConcert() {
  const [thisConcert, setThisConcert] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((oneConcert) => {
        setThisConcert(oneConcert);
      });
  }, [id]);

  console.log(thisConcert);

  return (
    <>
      <h1>Selected Concert</h1>
    </>
  );
}

export default SelectedConcert;
