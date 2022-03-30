import React from "react";
import { Col } from "react-bootstrap";
import ConcertComment from "./ConcertComment";

function ConcertCommentList({ text, currentUser }) {
  return (
    <>
      {text.map((t) => {
        return (
          <Col lg={10} className="gap-3 mt-3 mb-5 mx-auto">
            <ConcertComment key={t.id} id={t.id} text={t.text_comment} currentUser={currentUser}/>
            {/* handleDeleteText={handleDeleteText} onUpdateText={onUpdateText}  */}
          </Col>
        );
      })}
    </>
  );
}

export default ConcertCommentList;
