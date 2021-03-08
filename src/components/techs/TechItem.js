import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a
          href="#!"
          className="secondary-content"
          onClick={() => deleteTech(id)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
