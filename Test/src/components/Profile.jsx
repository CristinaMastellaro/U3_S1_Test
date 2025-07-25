import avatar from "../assets/avatar.png";
import "../css/Profile.css";
import { NavDropdown, Form } from "react-bootstrap";

const Profile = () => {
  const styleWidth = { width: "190px" };

  const createButton = (label, color = "outline-secondary") => {
    return (
      <button className={"btn btn-" + color + " rounded-0 px-4 mb-2"}>
        {label}
      </button>
    );
  };

  return (
    <main className="px-3 px-md-5 mt-4 bg-black py-5">
      <div className="w-75 mx-auto">
        <h1 className="text-light">Edit Profile</h1>
        <div className="container p-0 mt-4">
          <div className="row gx-3 border-bottom border-dark-subtle row-cols-1 row-cols-md-2">
            <div className="col col-md-3 col-lg-2 mb-3">
              <div id="avatarContainer">
                <img src={avatar} alt="" />
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col offset-lg-1 col-md-9">
              <input
                type="text"
                placeholder="Strive Student"
                className="bg-dark-subtle w-100 mb-3 px-2"
              />
              <div className="border-bottom border-dark-subtle pb-4">
                <NavDropdown
                  title="Language"
                  id="language"
                  className="text-white my-2"
                >
                  <NavDropdown.Item href="#">English</NavDropdown.Item>
                  <NavDropdown.Item href="#">Italian</NavDropdown.Item>
                  <NavDropdown.Item href="#">Japanese</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="my-4 border-bottom border-dark-subtle pb-4">
                <h6 className="text-white-50 fw-normal">Maturity Settings:</h6>
                <p
                  className="bg-secondary p-1 text-center text-white"
                  style={styleWidth}
                >
                  ALL MATURITY RATINGS
                </p>
                <p className="text-light">
                  Show titles of
                  <span className="fw-bold">all maturity ratings</span> for this
                  profile.
                </p>
                {createButton("EDIT")}
              </div>
              <div className="my-4 pb-4">
                <h6 className="text-white-50 fw-normal">Autoplay controls</h6>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Autoplay next episode in a series on all devices."
                      className="d-flex align-items-center align-items-md-end gap-2"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Autoplay previews while browsing on all devices."
                      className="d-flex align-items-center align-items-md-end gap-2"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-75 px-md-5 mx-auto">
        <div className="mt-4 d-flex justify-content-between flex-column flex-md-row">
          {createButton("SAVE", "light fw-bold")}
          {createButton("CANCEL")}
          {createButton(" DELETE PROFILE")}
        </div>
      </div>
    </main>
  );
};

export default Profile;
