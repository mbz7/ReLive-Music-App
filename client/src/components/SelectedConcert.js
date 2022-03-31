import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import ConcertDetail from "./selected_concert/ConcertDetail";
import ConcertImageList from "./selected_concert/ConcertImageList";
import ConcertVideoList from "./selected_concert/ConcertVideoList";
import ConcertCommentList from "./selected_concert/ConcertCommentList";
import AddImage from "./selected_concert/AddImage";
import AddVideo from "./selected_concert/AddVideo";
import AddText from "./selected_concert/AddText";
import "../SelectedConcert.css";

function SelectedConcert({ currentUser }) {
  const [concert, setConcert] = useState({
    images: [],
    videos: [],
    concert_comments: [],
  });
  const images = concert.images;
  const videos = concert.videos;
  const text = concert.concert_comments;
  const { id } = useParams();
  const concertId = concert.id;

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
      return {
        ...concert,
        concert_comments: [...concert.concert_comments, newText],
      };
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
      <Container fluid className="div-1">
        <Container className="pb-5">
          <br />
          <br />
          {/* Header Concert Details Section */}
          <Col className="text-center text-dark  p-4 shadow-sm rounded div-2">
            <h1>CONCERT DASHBOARD</h1>
            <hr />

            <Row className="mx-auto text-center">
              <ConcertDetail concert={concert} />
            </Row>
          </Col>

          {/* Images Section */}
          <Col className="div-2 p-4 mt-5 shadow-sm rounded">
            <Col className="text-center text-dark">
              <h2>IMAGES</h2>
            </Col>
            <Row className=" d-flex justify-content-start">
              {/* Add An Image */}
              <Col className=" p-5 m-4 text-dark shadow-sm rounded div-3">
                <AddImage onAddNewImage={addImage} concertId={concertId} />
              </Col>
            </Row>
            {/* Image List */}
            <hr className="text-dark" />
            <Row className="mx-auto p-4">
              <ConcertImageList images={images} />
            </Row>
          </Col>

          {/* Videos Section  */}
          <Col className="div-2 p-4 mt-5 shadow-sm rounded">
            <Col className="text-center text-dark">
              <h2>VIDEOS</h2>
            </Col>
            {/* Add A Video */}
            <Row className=" d-flex justify-content-start">
              <Col className="border p-5 m-4  shadow-sm rounded div-3">
                <AddVideo onAddNewVideo={addVideo} concertId={concertId} />
              </Col>
            </Row>
            {/* Video List */}
            <hr />
            <Row className="mx-auto p-4">
              <ConcertVideoList videos={videos}  />
            </Row>
          </Col>

          {/* Concert Journal Section */}
          <Col className="div-2 p-4 mt-5 shadow-sm rounded">
            <Col className="text-center text-dark">
              <h2>COMMENTS</h2>
            </Col>
            {/* Add Text */}
            <Row className=" d-flex justify-content-start">
              <Col className="border p-5 m-4 shadow-sm rounded div-3">
                <AddText onAddNewText={addText} concertId={concertId}/>
              </Col>
            </Row>
            <hr />
            <Row className="mx-auto text-center">
              <ConcertCommentList text={text} currentUser={currentUser} />
              {/* handleDeleteText={handleDeleteText} */}
            </Row>
          </Col>
        </Container>
      </Container>
    </>
  );
}

export default SelectedConcert;
