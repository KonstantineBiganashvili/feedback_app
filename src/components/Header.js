import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const { text, bgColor, textColor } = props;

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          <Link to="/">{text}</Link>
        </h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Reviews App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
