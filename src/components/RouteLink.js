import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';
import { Link } from 'gatsby';

const RouteLink = ({ goToRoute, children }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <Link
      to={goToRoute}
      getProps={({ isCurrent }) => {
        return {
          style: {
            textDecoration: 'none',
            color: 'white',
            borderBottom: isCurrent ? '5px solid #ccc' : null,
          },
        };
      }}
    >
      <LinkAnimated selected={false}>{children}</LinkAnimated>
    </Link>
  </Box>
);

RouteLink.propTypes = {
  goToRoute: PropTypes.string,
  children: PropTypes.node,
};

export default RouteLink;
