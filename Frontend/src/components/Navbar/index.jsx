import React from 'react';
import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <>
      <header className="shadow-lg w-100 bg-success p-1">
        <div className="container">
          <nav className="nav d-flex align-items-center justify-content-between">
            <h2 className="nav-logo text-white">Courses</h2>
            <ul className="nav__list list-unstyled mt-3 d-flex w-50 align-items-center justify-content-between">
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-dark fw-bold" : "text-white")}
                  to="/">Registration
                </NavLink>
              </li>

              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-dark fw-bold" : "text-white")}
                  to="/login">Login
                </NavLink>
              </li>

              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-dark fw-bold" : "text-white")}
                  to="/course">Home
                </NavLink>
              </li>

              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-dark fw-bold" : "text-white")}
                  to="/coursesList">CoursesList
                </NavLink>
              </li>

            </ul>

            <button className="btn btn-danger">Logout</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;