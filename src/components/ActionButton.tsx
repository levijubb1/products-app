import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

type Props = {
	action: () => void;
};

const ActionButton: React.FC<Props> = ({ action }) => {
	return (
		<button
			onClick={action}
			className="btn-primary btn btn-circle fixed bottom-10 right-10"
		>
			<FaPlus />
		</button>
	);
};

ActionButton.propTypes = {
	action: PropTypes.func.isRequired
};

export default ActionButton;
