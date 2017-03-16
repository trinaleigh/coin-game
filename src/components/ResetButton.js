import React, { PropTypes } from 'react'

const ResetButton = ({ visibility, resetClick }) => (
	<div id="overlay" style={{ visibility: visibility }}>
		<button id="reset" onClick={resetClick}>
			START
		</button>
	</div>
)

ResetButton.propTypes = {
	visibility: PropTypes.bool.isRequired,
	translate: PropTypes.string.isRequired
}

export default ResetButton