import style from '../scss/Form.module.scss';
import MyButton from '../UI/MyButton/MyButton';

export default function Form({
	value,
	setValue,
	handleRemoveModal,
	savedValue,
	setSavedValue,
	setFile,
}) {
	const handleDefault = e => {
		e.preventDefault();
		setSavedValue({
			...savedValue,
			name: value.valueName,
			country: value.valueCountry,
			comment: value.valueComment,
		});

		handleRemoveModal();
	};

	return (
		<form>
			<input
				value={value.valueName}
				onChange={e => setValue({ ...value, valueName: e.target.value })}
				type='text'
				placeholder='Change nickname'
			/>
			<input
				type='text'
				value={value.valueCountry}
				onChange={e => setValue({ ...value, valueCountry: e.target.value })}
				placeholder='country where you live'
			/>
			<input
				type='text'
				value={value.valueComment}
				onChange={e => setValue({ ...value, valueComment: e.target.value })}
				placeholder='Description'
			/>
			<input
				type='file'
				accept='image/*'
				onChange={({ target: { files } }) => {
					setFile(URL.createObjectURL(files[0]));
				}}
			/>
			<MyButton className={style.submit} onClick={handleDefault}>
				Change
			</MyButton>
		</form>
	);
}
