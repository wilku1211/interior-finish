import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { addTeamMember } from "../../lib/api";

const AddItem = () => {
  const history = useNavigate();

  const { sendRequest, status } = useHttp(addTeamMember);
  useEffect(() => {
    if (status === "completed") {
      history.push("/team");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quateData) => {
    const newItem = {
      firstName: "Katarzyna",
      lastName: "Bośniak",
      role: "AGENT DS. NIERUCHOMOŚCI",
      description:
        "Amet magna ex nisi et ad dolore consequat aliquip proident magna pariatur mollit Culpa eiusmod do dolore ad aliquip aute consectetur nulla eu labore incididunt. Amet magna ex nisi et ad dolore consequat aliquip proident magna pariatur mollit",
      email: "smtbosniak@gmail.com",
      telephone: "999 666 777",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/katarzyna-bosniak.jpg?alt=media",
    };
    sendRequest(newItem);
  };
  return (
    <>
      <button onClick={onAddQuoteHandler}>add</button>
    </>
  );
};

export default AddItem;
