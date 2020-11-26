import React from "react";
import styled from "styled-components";

const FormulaButtonStyle = styled.button`
	width: 80px;
	height: 80px;
	& > svg {
		width: 50px;
		height: 50px;
	}
`;

export default function FormulaButton({ name, onClick }) {
	return (
		<FormulaButtonStyle onClick={onClick}>
			<svg></svg>
			<p>{name}</p>
		</FormulaButtonStyle>
	);
}