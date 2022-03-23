import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Card, Stack } from "react-bootstrap";
import ConcertDetailList from "./selected_concert/ConcertDetailList";
import ConcertImageList from "./selected_concert/ConcertImageList";
import ConcertVideoList from "./selected_concert/ConcertVideoList";
import ConcertSummaryList from "./selected_concert/ConcertSummaryList";

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
  // const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`/concerts/${id}`)
      .then((res) => res.json())
      .then((concert) => {
        setConcert(concert);
      });
  }, [id]);

  const addImage = () => {
    //fetch to add image to concert
    //inside callback once you have a new image from that post fetch:
    /*setConcert(concert => {
      return {...concert, images: [...concert.images, newImage]}
    })*/
  };

  // const concertArray = []

  // console.log(concertArray)

  console.log(concert);
  console.log(images);
  console.log(videos);
  console.log(text);

  return (
    <>
      {/* {concert.forEach((e) => console.log(e))} */}
      <Container>
        <Col className="p-5 text-center">
          <h1>Selected Concert Page</h1>
        </Col>
        <Col sm={12} md={12} lg={12} className="gap-3 mb-5 mt-5">
          <Card
          // as={Link}
          // className="card-div mx-auto"
          // onClick={(e) => setBrewery(id)}
          // to={`/breweries/${id}`}
          >
            {/* <Card.Img className="h-100 card-img-filter" src={image} alt="" /> */}

            <div className="p-4 mt-2 text-dark gap-3">
              {/* <Card.ImgOverlay className="card-img-o"> */}
              <Row>
                <Col md={2} lg={2} className="m-0 p-0">
                  <div className="bg-light h-100 w-100 d-flex align-items-center p-4">
                    <h5 className="mx-auto">band logo</h5>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-3 p-2">
                  <Col
                    md={6}
                    lg={6}
                    className="text-center band_card_border-right"
                  >
                    <Card.Title className="update_title_color">
                      <h2 className="text-dark p-2">{concert.band}</h2>
                    </Card.Title>
                    {/* <Button
                    variant="outline-dark"
                    className="mx-auto mt-2"
                    as={Link}
                    onClick={(e) => setConcerts(id)}
                    to={`/concerts/${id}`}
                  >
                    View Concert Dashboard
                  </Button> */}
                    {/* <Link to={`/concerts/${id}`}>Link To Concert</Link> */}
                  </Col>
                  <Col className="band_card_info-right">
                    <Card.Text className="">
                      <strong>Venue: </strong>
                      {concert.venue}
                    </Card.Text>
                    <Card.Text className="">
                      <strong>Location: </strong>
                      {concert.location}
                    </Card.Text>
                    <Card.Text className="">
                      <strong>Date: </strong>
                      {concert.date}
                    </Card.Text>
                  </Col>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

        <ConcertDetailList concert={concert} />
        {/* Images Section */}
        <Col className="border p-4 mt-5">
          <h2>IMAGES</h2>
          <hr />
          <Row className="mx-auto text-center">
            <ConcertImageList images={images} />
          </Row>
        </Col>
        {/* Videos Section  */}
        <Col className="border p-4 mt-5">
          <h2>VIDEOS</h2>
          <hr />
          <Row className="mx-auto text-center">
            <ConcertVideoList videos={videos} />
          </Row>
        </Col>
        {/* Concert Journal Section */}
        <Col className="border p-4 mt-5">
          <h2>CONCERT JOURNAL</h2>
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
