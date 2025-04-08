import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ModalStyled = styled(ReactModal)`
	background-color: rgba(255, 255, 255, 0.95);
	border-radius: 1.6rem;
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	min-width: 50rem;
    min-height: 30rem;
	overflow-y: auto;
	max-height: 100vh;
	padding: 4rem 2rem 1rem 2rem;

	&::-webkit-scrollbar {
		width: 1.2rem;
	}

	&::-webkit-scrollbar-track {
		border-radius: 1rem;
		background-color: #e3e8eb;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--light-gray);
		border-radius: 1rem;
	}
`;

export const CloseModal = styled.button`
	position: absolute;
	top: 3.5rem;
	right: 2.5rem;
	border: 0;
	border-radius: 0.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primary-red);
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}
`;