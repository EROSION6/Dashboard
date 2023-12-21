import React, { useState, useContext } from 'react';
import Header from '../components/Main/Header';
import style from '../components/scss/Setting.module.scss';
import MyButton from '../components/UI/MyButton/MyButton';
import { PiPencilLineDuotone } from 'react-icons/pi';
import Profile from '../components/Profile/Profile';
import Module from '../components/UI/Modul/Modul';
import Form from '../components/Profile/Form';
import { Context } from '../components/Context';

export default function Setting() {
	const [modalActive, setModalActive] = useState(false);
	const [value, setValue] = useState({ valueName: '', valueCountry: '', valueComment: '' });
	const [savedValue, setSavedValue] = useState({ name: '', country: '', comment: '' });

	const handleRemoveModal = () => {
		if (value.valueName === '') {
			alert('Please select a value');
		} else {
			setModalActive(false);
		}
	};

	const { file, setFile } = useContext(Context);
	return (
		<div className={style.setting}>
			<Header />
			<section className={style.block_setting}>
				<div className={style.left}>
					{!file ? (
						<img src='/public/Images/avatar.jpg' alt='avatar' />
					) : (
						<img src={file} alt='avatar' />
					)}
					<div className={style.content_text}>
						{value.valueName ? <h2>{savedValue.name}</h2> : <h2>Anon</h2>}
						{value.valueCountry ? <b>{savedValue.country}</b> : <b>Tashkent, Uzbekistan</b>}
						{value.valueComment ? (
							<p>{savedValue.comment}</p>
						) : (
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in quasi
								pariatur inventore cum tempore hic, similique dolore mollitia distinctio.
							</p>
						)}
					</div>
				</div>
				<div className={style.right}>
					<MyButton onClick={() => setModalActive(true)}>
						<PiPencilLineDuotone />
						Edit profile
					</MyButton>
					<Module
						setModalActive={setModalActive}
						style={{ display: !modalActive ? 'none' : 'flex', transition: 'all .3s' }}>
						<Form
							handleRemoveModal={handleRemoveModal}
							value={value}
							setValue={setValue}
							setSavedValue={setSavedValue}
							savedValue={savedValue}
							setFile={setFile}
						/>
					</Module>
				</div>
			</section>
			<Profile />
		</div>
	);
}
