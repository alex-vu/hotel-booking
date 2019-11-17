import React from "react";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const NewsList = () => {
  return (
    <div className="news-list-wrap columns">
      <ul className="news-list column col-6">
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
      </ul>
      <ul className="news-list column col-6">
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
        <li className="news-list-item">
          <Link to="/">
            <span>
              Kyoto by GRANVIA features air-conditioned accommodation and a
              fitness centre.
            </span>
            <IoIosAdd />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
