import React, { useState } from "react";
import LayoutTeacher from "../../components/Layout/LayoutTeacher";
import { v4 as uuid } from "uuid";
import axios from "axios";

export default function index() {
  const [link, setLink] = useState("");

  const handleGenerateLink = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:1337/links", {
          link_id: uuid(),
          user_permissions_user: 0,
        })
        .then((response) => {
          console.log(response.data);
          setLink(response?.data?.link_id);
        });
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  return (
    <LayoutTeacher>
      <section>
        <form onSubmit={handleGenerateLink}>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.currentTarget.value)}
            className="input__generatedlink"
            readOnly
          />
          <input type="submit" value="Generate link" />
        </form>
      </section>
    </LayoutTeacher>
  );
}
