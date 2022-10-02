type Props = {
	placeholder: string;
	label: string;

	// All other props
	[x: string]: unknown;
};

const Input: React.FC<Props> = ({ placeholder, label, ...rest }) => {
	return (
		<div className="form-control full-width">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				className="input input-bordered input-secondary col-span-12"
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};

export default Input;
