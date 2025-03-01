import React from "react";
import PropTypes from "prop-types";

const ReposItem = props => {
  const { repo } = props;
  return (
    <div className="card">
      <h3>
        <a href="{repo.html_url}">{repo.name}</a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default ReposItem;
