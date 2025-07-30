import { Form } from "react-bootstrap";
import HomepageBody from "./HomepageBody";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [title, setTitle] = useState("");
  const [doSearch, setdoSearch] = useState(false);

  //   const navigate = useNavigate()

  //   useEffect(() => {
  //     navigate("/")
  //   })

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchQuery.includes(" ")) {
            setSearchQuery(searchQuery.replaceAll(" ", "%20"));
          }
          console.log("searchQuery", searchQuery);
          setdoSearch(true);
        }}
      >
        <Form.Group
          className="mb-3 d-flex flex-column justify-content-center align-items-center"
          controlId="formBasicEmail"
        >
          <Form.Label className="text-light">Cerca</Form.Label>
          <div className="w-50 d-flex align-items-center justify-content-between">
            <Form.Control
              type="text"
              placeholder="Jesus Christ Superstar"
              style={{ width: "90%" }}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setTitle(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </Form.Group>
      </Form>
      {doSearch && <HomepageBody searchQuery={searchQuery} title={title} />}
    </>
  );
};

export default Search;
