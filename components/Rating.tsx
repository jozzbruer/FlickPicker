type Props = {
	filled?: boolean;
	onClick?: () => void;
};
const Rating: React.FC<Props> = ({ filled, onClick }) => {
	const starStyle = {
		color: filled ? 'gold' : 'gray',
		cursor: 'pointer',
	};

	return (
		<span style={starStyle} onClick={onClick}>
			{filled ? '★' : '☆'}
		</span>
	);
};

export default Rating;
