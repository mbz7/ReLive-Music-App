import React from "react";
import { Row, Container } from "react-bootstrap";
import ConcertCard from "./ConcertCard";

function ConcertCardList({ concerts, setConcerts }) {
  return (
    <>
      <Container>
        <Row>
          {concerts.map((concert) => {
            return (
              <ConcertCard
                key={concert.id}
                id={concert.id}
                user={concert.user_id}
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
