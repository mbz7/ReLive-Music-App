import React from "react";
import { Row, Container } from "react-bootstrap";
import ConcertCard from "./ConcertCard";

function ConcertCardList({ concerts, setConcerts, currentUser }) {
  return (
    <>
      <Container>
        <Row>
          {concerts.map((concert) => {
            return (
              <ConcertCard
                key={concert.id}
                id={concert.id}
                
                band={concert.band}
                venue={concert.venue}
                location={concert.location}
                date={concert.date}
                setConcerts={setConcerts}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ConcertCardList;
