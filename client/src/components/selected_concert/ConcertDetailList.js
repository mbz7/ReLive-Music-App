import React from "react";
import ConcertDetail from "./ConcertDetail";
import { Row, Container } from "react-bootstrap";

function ConcertDetailList({ concert }) {

  const concertArray = Object.values(concert);
  return (
    <>
      <Container>
        <Row>
          {/* {concert.map((c) => {
            return (
              <ConcertDetail
                key={c.id}
                id={c.id}
                user={c.user_id}
                band={c.band}
                venue={c.venue}
                location={c.location}
                date={c.date}
              />
            );
          })} */}
          {/* {console.log(arr3)} */}
          
        </Row>
      </Container>
    </>
  );
}

export default ConcertDetailList;
