import React, { PropTypes } from 'react'

const ResetButton = ({ resetClick }) => (
  <button id="reset" onClick={resetClick}>
  RESET
  </button>
)

ResetButton.propTypes = {
	translate: PropTypes.func.isRequired
}

export default ResetButton