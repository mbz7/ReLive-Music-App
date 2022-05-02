import React from "react";
import { Row, Container } from "react-bootstrap";
import ConcertCard from "./ConcertCard";

function ConcertCardList({ concerts, setConcerts, handleDelete, editPost }) {
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
                logo={concert.band_logo}
                venue={concert.venue}
                location={concert.location}
                date={concert.date}
                setConcerts={setConcerts}
                handleDelete={handleDelete}
                editPost={editPost}
                // currentUser={currentUser}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ConcertCardList;
