import React from "react";
import { Col } from "react-bootstrap";
import ConcertSummary from "./ConcertSummary";

function ConcertSummaryList({ text }) {
  return (
    <>
      {text.map((t) => {
        return (
          <Col lg={10} className="gap-3 mt-3 mb-5 mx-auto">
            <ConcertSummary key={t.id} id={t.id} text={t.text_summary} />
            {/* handleDeleteText={handleDeleteText} onUpdateText={onUpdateText}  */}
          </Col>
        );
      })}
    </>
  );
}

export default ConcertSummaryList;
