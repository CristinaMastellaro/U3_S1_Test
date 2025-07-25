import avatar from "../assets/avatar.png";

const Settings = () => {
  const styleWidth = { width: "60px" };
  const styleHeight = { height: "40px" };

  const returnAnchor = (text, margin = "") => {
    return (
      <p className={margin}>
        <a href="#" className="text-primary text-decoration-none">
          {text}
        </a>
      </p>
    );
  };

  return (
    <main className="p-5 bg-light">
      <section className="container">
      <h1 className="my-4">Account</h1>
        <div className="row row-cols-1 row-cols-md-2 border-top border-dark-subtle py-4">
          <div className="col col-md-4 mb-4">
            <h4 className="text-body-tertiary mb-3">MEMBERSHIP & BILLING</h4>
            <button className="btn bg-secondary-subtle rounded-0 px-5 shadow-sm">
              Cancel Membership
            </button>
          </div>
          <div className="col offset-md-1 col-md-7">
            <div className="border-bottom border-secondary">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <p className="fw-bold m-0">student@strive.school</p>

                {returnAnchor("Change account email")}
              </div>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <p className="text-secondary m-0">Password: *******</p>
                {returnAnchor("Change password")}
              </div>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <p className="text-secondary m-0">Phone: 321 044 1279</p>
                {returnAnchor("Change phone number")}
              </div>
            </div>
            <div className="d-flex flex-column justify-content-end my-3 border-bottom border-secondary pb-3">
              <div className="d-flex flex-row align-items-start  justify-content-between flex-column flex-md-row">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://donorbox.org/assets/paypal-logo-456c64a67c5e96213d846dbedaa0db5a1e15f72ee8f7ba963fa9a7aba1646da9.png"
                    alt="PayPal logo"
                    style={styleWidth}
                  />
                  <p className="fw-bold m-0 ms-1">admin@strive.school</p>
                </div>
                {returnAnchor("Update payment info", "mb-0")}
              </div>
              <div className="w-100 d-flex justify-content-md-end">
                {returnAnchor("Billing details")}
              </div>
            </div>
            <div className="d-flex flex-column align-items-start align-items-md-end">
              {returnAnchor("Redeem gift card or promo code", "mb-0")}
              {returnAnchor("Where to buy gift cards", "mb-0")}
            </div>
          </div>
        </div>
      </section>
      <section className="border-top border-dark-subtle py-4 container m-0 mx-auto">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-4">
            <h4 className="text-body-tertiary">PLAN DETAILS</h4>
          </div>
          <div className="col offset-md-1 col-md-7 d-flex justify-content-between flex-column align-items-start flex-md-row">
            <p className="fw-bold">
              Premium
              <img
                src="https://pngmark.com/wp-content/uploads/2023/01/20230110_173135.png"
                alt="Full HD picture"
                style={styleHeight}
              />
            </p>
            {returnAnchor("Change plan")}
          </div>
        </div>
      </section>
      <section className="border-top border-dark-subtle py-4 container m-0 mx-auto">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-4">
            <h4 className="text-body-tertiary">SETTINGS</h4>
          </div>
          <div className="col offset-md-1 col-md-7 d-flex flex-column">
            {returnAnchor("Parental controls", "mb-0")}
            {returnAnchor("Test participation", "mb-0")}
            {returnAnchor("Manage download devices", "mb-0")}
            {returnAnchor("Activate a device", "mb-0")}
            {returnAnchor("Recent device streaming activity", "mb-0")}
            {returnAnchor("Sign out of all devices", "mb-0")}
          </div>
        </div>
      </section>
      <section className="border-top border-dark-subtle py-4 container m-0 mx-auto">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-4">
            <h4 className="text-body-tertiary">MY PROFILE</h4>
          </div>
          <div className="col offset-md-1 col-md-7">
            <div className="d-flex flex-column flex-md-row justify-content-md-between">
              <p className="fw-bold">
                <img
                  src={avatar}
                  alt="Avatar picture"
                  style={styleHeight}
                  className="rounded-circle me-3"
                />
                Strive Student
              </p>
              <div className="d-flex flex-row flex-md-column justify-content-between">
                {returnAnchor("Manage profiles", "mb-0")}
                {returnAnchor("Add profiles", "mb-0")}
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mt-2">
              <div className="col d-flex flex-column">
                {returnAnchor("Language", "mb-0")}
                {returnAnchor("Playback settings", "mb-0")}
                {returnAnchor("Subtitle appearance", "mb-0")}
              </div>
              <div className="col d-flex flex-column">
                {returnAnchor("Viewing activity", "mb-0")}
                {returnAnchor("Ratings", "mb-0")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Settings;
