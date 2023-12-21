import React, { useState } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import style from './CardBigSteam.module.scss';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiCup } from 'react-icons/tfi';
import { CiPlay1 } from 'react-icons/ci';
import MyButton from '../../UI/MyButton/MyButton';

export default function CardBigSteam({item}) {
	const [showVideoCard, setShowVideoCard] = useState(false);

	const cardCategory = [
		{
			icon: <IoTimeOutline />,
			text: '151 h',
		},
		{
			icon: <TfiCup />,
			text: '38/64',
		},
	];

	return (
		<div className={style.cardBigSteam}>
			{!showVideoCard ? (
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
			<div style={{ display: showVideoCard ? 'none' : 'flex' }} className={style.rating_card}>
				{cardCategory.map((cat, i) => (
					<span key={i}>
						{cat.icon}
						<b>{cat.text}</b>
					</span>
				))}
			</div>
			<MyButton
				style={{ display: showVideoCard ? 'none' : 'flex' }}
				onClick={() => setShowVideoCard(true)}>
				<CiPlay1 />
				Play Game
			</MyButton>
		</div>
	);
}
