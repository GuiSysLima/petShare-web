import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MainContent = styled.div`
	min-height: calc(100vh - 6rem);
	display: flex;
	column-gap: 2.4rem;
	background-color: #f0f4f9;
	padding: 0 3.6rem 0 0;

	@media (max-width: 768px) {
		padding: 0 2rem 0 2rem;

		& aside {
			display: none;
		}
	}
`;

export const PagesContainer = styled.div`
	flex: 1;
	width: 100%;
	max-width: 120rem;
	overflow-x: auto;
	background-color: #f0f4f9;
	margin: 0 auto;
	& > div {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
`;
