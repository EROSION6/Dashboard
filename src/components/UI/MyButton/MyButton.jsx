import style from './MyButton.module.scss';

function MyButton({ children, className, ...props }) {
	const buttonClasses = `${style.myButton} ${className}`;
	return (
		<button {...props} className={buttonClasses}>
			{children}
		</button>
	);
}

export default MyButton;
