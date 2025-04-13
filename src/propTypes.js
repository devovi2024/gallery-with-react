import PropTypes from 'prop-types';

export const itemPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string, 
  price: PropTypes.number, 
});

export const itemArrayPropTypes = PropTypes.arrayOf(itemPropTypes).isRequired;
