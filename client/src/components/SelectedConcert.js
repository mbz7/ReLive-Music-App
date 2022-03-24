import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import ConcertDetail from "./selected_concert/ConcertDetail";
import ConcertImageList from "./selected_concert/ConcertImageList";
import ConcertVideoList from "./selected_concert/ConcertVideoList";
import ConcertSummaryList from "./selected_concert/ConcertSummaryList";
import AddImage from "./selected_concert/AddImage";
import AddVideo from "./selected_concert/AddVideo";
import AddText from "./selected_concert/AddText"

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
  const concertId = concert.id;
  // const [deleteText, setDeleteText] = useState([])


  // setDeleteText(text)
  // console.log(deleteText)

  // const [newPostImage, setNewPostImage] = useState ({})

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((concert) => {
        setConcert(concert);
      });
  }, [id]);

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
      return { ...concert, videos: [...concert.videos, newVideo] };
    });
  };

  const addText = (newText) => {
    //fetch to add image to concert
    //inside callback once you have a new image from that post fetch:
    setConcert((concert) => {
      return { ...concert, concert_summaries: [...concert.concert_summaries, newText] };
    });
  };

  // function handleDeleteText(dText) {
  //   const textList = setDeleteText(text);
  //   const updatedText = textList.filter((t) => {
  //     return t.id !== dText.id;
  //   });
  //   setDeleteText(updatedText)
  // }

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
              <AddImage onAddNewImage={addImage} concertId={concertId}/>
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
          {/* Add Text */}
          <Row className=" d-flex justify-content-start">
            <Col className="border p-5 m-4 bg-light shadow-sm rounded">
              <AddText onAddNewText={addText} />
            </Col>
          </Row>
          <hr />
          <Row className="mx-auto text-center">
            <ConcertSummaryList text={text} />
            {/* handleDeleteText={handleDeleteText} */}
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default SelectedConcert;
