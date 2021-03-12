import React from "react";

const Bar = ({ height, numberOfBars }) => {
	const styles = {
		backgroundColor: "turquoise",
		height: `${height}px`,
		width: "4px",
		margin: "1px",
	};

	if (numberOfBars <= 75) {
		styles.width = "8px";
		styles.margin = "1.5px";
	} else if (numberOfBars <= 100) {
		styles.width = "7px";
		styles.margin = "1.5px";
	} else if (numberOfBars <= 150) {
		styles.width = "6px";
		styles.margin = "1.2px";
	} else if (numberOfBars <= 175) {
		styles.width = "5px";
		styles.margin = "1.2px";
	}

	return <div style={styles} className="bar"></div>;
};

export default Bar;
