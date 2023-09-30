import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <section className="text-center text-lg-start">
          <div className="row g-0 align-items-center py-4">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign in now</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example3">
                        Email address or Username
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        checked
                      />
                      <label className="form-check-label" for="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>

                    <div className="text-center">
                      <p>or sign in with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 loginImg rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
      </section>
    </>
  );
};

export default index;
