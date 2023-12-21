import React, { useContext, useEffect } from 'react';
import '../scss/Form.module.scss';
import { Context } from '../Context';

export default function Form({ value, setValue, handleRemoveModal, savedValue, setSavedValue }) {
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

	const { setFile } = useContext(Context);

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
			<button onClick={handleDefault}>Change</button>
		</form>
	);
}
