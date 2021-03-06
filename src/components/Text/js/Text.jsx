import React from 'react';
import PropTypes from 'prop-types';
import '../css/Text.css';

export default function Text({ id, title, value }) {

  return (
    <>
      <label htmlFor={id}>
        {title}
        <p id={id} className="text">{value}</p>
      </label>
    </>
  );

}

Text.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Text.defaultProps = {
  value: '',
};
