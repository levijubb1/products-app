type Props = {
	placeholder?: string;
	label: string;
	styles?: string;
	// All other props
	[x: string]: unknown;
};

const Input: React.FC<Props> = ({ placeholder, label, styles, ...rest }) => {
	return (
		<div className={'form-control full-width' + (styles ? ` ${styles}` : '')}>
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				className="input input-bordered input-secondary"
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};

export default Input;
