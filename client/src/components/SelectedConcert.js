import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Stack } from "react-bootstrap";
import ConcertDetailList from "./selected_concert/ConcertDetailList";
import ConcertImageList from "./selected_concert/ConcertImageList";
// import ConcertVideoList from "./selected_concert/ConcertVideoList";
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
          <Row className="mx-auto text-center">
            {/* <Stack direction="horizontal" gap={3}> */}
            <ConcertImageList images={images} />
            {/* </Stack> */}
          </Row>
        </Col>

        {/* {concert.map((c) => {
            const allImages = c.images.map((image) => {
              return (
                <div key={image.title}>
                  <Col>{image.image_url}</Col>
                </div>
              );
            });
          })} */}
        {/* <ConcertVideoList videos={concert} />
          <ConcertSummaryList summaries={concert} /> */}
      </Container>
    </>
  );
}

export default SelectedConcert;
