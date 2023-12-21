import React, { useState } from 'react';
import MyButton from '../../UI/MyButton/MyButton';
import { DefaultPlayer as Video } from 'react-html5video';
import style from './CardSmallSteam.module.scss';
import { CiPlay1 } from 'react-icons/ci';

export default function CardSmallSteam({item}) {
	const [hideVideoCard, setHideVideoCard] = useState(false);

	return (
		<div className={style.cardSmallSteam}>
			{!hideVideoCard ? (
				<img
					src={item.ImageUrl}
					alt='poster'
				/>
			) : (
				<Video
					autoPlay
					loop
					muted
					className={style.video}
					poster={item.ImageUrl}>
					<source
						src={item.video}
						type='video/mp4'
					/>
				</Video>
			)}
			<MyButton
				style={{ display: hideVideoCard ? 'none' : 'flex' }}
				onClick={() => setHideVideoCard(true)}>
				<CiPlay1 />
				Play Game
			</MyButton>
		</div>
	);
}
