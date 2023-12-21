import React from 'react';
import style from './MyInput.module.scss'

export default function MyInput({ ...props }) {
	return <input className={style.myInput} {...props} />;
}
