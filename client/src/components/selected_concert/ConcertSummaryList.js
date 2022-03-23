import React from "react";
import { Col } from "react-bootstrap";
import ConcertSummary from "./ConcertSummary";

function ConcertSummaryList({ text }) {
  return (
    <>
      {text.map((t) => {
        return (
          <Col>
            <ConcertSummary key={t.id} text={t.text_summary} />
          </Col>
        );
      })}
    </>
  );
}

export default ConcertSummaryList;
