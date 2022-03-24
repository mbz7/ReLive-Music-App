import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import ConcertDetail from "./selected_concert/ConcertDetail";
import ConcertImageList from "./selected_concert/ConcertImageList";
import ConcertVideoList from "./selected_concert/ConcertVideoList";
import ConcertSummaryList from "./selected_concert/ConcertSummaryList";
import AddImage from "./selected_concert/AddImage";
import AddVideo from "./selected_concert/AddVideo";

function SelectedConcert() {
  const [concert, setConcert] = useState({
    images: [],
    videos: [],
    concert_summaries: [],
  });
  const images = concert.images;
  const videos = concert.videos;
  const text = concert.concert_summaries;
  const { id } = useParams();

  console.log(id);

  // const [newPostImage, setNewPostImage] = useState ({})

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((concert) => {
        setConcert(concert);
      });
  }, [id]);

  // useEffect(() => {
  //   fetch("/images")
  //     .then((r) => r.json())
  //     .then((data) => setNewPostImage(data));
  // }, [newPostImage]);

  const addImage = (newImage) => {
    //fetch to add image to concert
    //inside callback once you have a new image from that post fetch:
    setConcert((concert) => {
      return { ...concert, images: [...concert.images, newImage] };
    });
  };

  const addVideo = (newVideo) => {
    //fetch to add image to concert
    //inside callback once you have a new image from that post fetch:
    setConcert((concert) => {
      return { ...concert, images: [...concert.images, newVideo] };
    });
  };

  // console.log(concert);
  // console.log(images);
  // console.log(videos);
  // console.log(text);

  return (
    <>
      <Container>
        {/* Header Concert Details Section */}
        <Col className="text-center border p-4 mt-5 shadow-sm rounded">
          <h1>CONCERT DASHBOARD</h1>
          <hr />

          <Row className="mx-auto text-center">
            <ConcertDetail concert={concert} />
          </Row>
        </Col>

        {/* Images Section */}
        <Col className="border border-warning p-4 mt-5 shadow-sm rounded">
          <Col className="text-center">
            <h2>IMAGES</h2>
          </Col>
          <Row className=" d-flex justify-content-start">
            {/* Add An Image */}
            <Col className="border p-5 m-4 bg-light shadow-sm rounded">
              <AddImage onAddNewImage={addImage} />
            </Col>
          </Row>
          {/* Image List */}
          <hr />
          <Row className="mx-auto p-4">
            <ConcertImageList images={images} />
          </Row>
        </Col>

        {/* Videos Section  */}
        <Col className="border border-warning p-4 mt-5 shadow-sm rounded">
          <Col className="text-center">
            <h2>VIDEOS</h2>
          </Col>
          {/* Add A Video */}
          <Row className=" d-flex justify-content-start">
            <Col className="border p-5 m-4 bg-light shadow-sm rounded">
              <AddVideo onAddNewVideo={addVideo} />
            </Col>
          </Row>
          {/* Video List */}
          <hr />
          <Row className="mx-auto p-4">
            <ConcertVideoList videos={videos} />
          </Row>
        </Col>

        {/* Concert Journal Section */}
        <Col className="border border-warning p-4 mt-5 shadow-sm rounded">
          <Col className="text-center">
            <h2>CONCERT JOURNAL</h2>
          </Col>
          <hr />
          <Row className="mx-auto text-center">
            <ConcertSummaryList text={text} />
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default SelectedConcert;
