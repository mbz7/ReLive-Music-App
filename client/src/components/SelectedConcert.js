import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Stack } from "react-bootstrap";
import ConcertDetailList from "./selected_concert/ConcertDetailList";
import ConcertImageList from "./selected_concert/ConcertImageList";
import ConcertVideoList from "./selected_concert/ConcertVideoList";
// import ConcertSummaryList from "./selected_concert/ConcertSummaryList";

function SelectedConcert() {
  const [concert, setConcert] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const { id } = useParams();
  // const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((oneConcert) => {
        setConcert(oneConcert);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((oneConcert) => {
        setImages(oneConcert.images);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((oneConcert) => {
        setVideos(oneConcert.videos);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((oneConcert) => {
        setSummaries(oneConcert.concert_summaries);
      });
  }, [id]);

  console.log(concert);
  console.log(images);
  console.log(videos);
  console.log(summaries);

  return (
    <>
      <Container>
        {/* <h1>Selected Concert Page</h1>
          <ConcertDetailList concert={concert} /> */}
        <Col className="border p-4 mt-5">
          <h2>IMAGES</h2>
          <hr />
          <Row className="mx-auto text-center">
            <ConcertImageList images={images} />
          </Row>
        </Col>
        <Col className="border p-4 mt-5">
          <h2>VIDEOS</h2>
          <hr />
          <Row className="mx-auto text-center">
          <ConcertVideoList videos={videos} />
          </Row>
        </Col>
        
        {/* <ConcertSummaryList summaries={concert} /> */}
      </Container>
    </>
  );
}

export default SelectedConcert;
