import React, { PropTypes } from 'react'

const ResetButton = ({ visibility, resetClick }) => (
	<button id="reset" 
		onClick={resetClick}
		style={{ visibility: visibility }}
	>
		START
	</button>
)

ResetButton.propTypes = {
	visibility: PropTypes.bool.isRequired,
	translate: PropTypes.string.isRequired
}

export default ResetButton