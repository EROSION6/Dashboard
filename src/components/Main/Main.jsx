import React, { useEffect, useState } from 'react';
import style from '../scss/Main.module.scss';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Header from './Header';
import '../style.css';
import Gallery from './Gallery';
import CardBigSteam from '../Card/CardBigSteam/CardBigSteam';
import CardSmallSteam from '../Card/CardSmallSteam/CardSmallSteam';

export default function Main() {
	const [showPoster, setShowPoster] = useState(true);

	const galleryFreeGamesBig = [
		{
			id: 1,
			name: 'The Front',
			video:
				'https://cdn.akamai.steamstatic.com/steam/apps/256971861/movie480_vp9.webm?t=1695891815',
			ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2285150/header.jpg?t=1699155742',
		},
		{
			id: 2,
			name: 'Dyson Sphere Program',
			video:
				'https://cdn.akamai.steamstatic.com/steam/apps/256988952/movie480_vp9.webm?t=1702608210',
			ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1366540/header.jpg?t=1702624498',
		},
	];

	const galleryFreeGamesSmall = [
		{
			id: 1,
			name: 'War Thunder',
			video: 'https://cdn.akamai.steamstatic.com/steam/apps/2032399/movie480.webm?t=1576785190',
			ImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/236390/hero_capsule.jpg?t=1702564009',
		},
		{
			id: 2,
			name: 'Trackmania',
			video:
				'https://cdn.akamai.steamstatic.com/steam/apps/256926223/movie480_vp9.webm?t=1674777790',
			ImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/2225070/hero_capsule.jpg?t=1693425668',
		},
		{
			id: 3,
			name: 'All-In-One Summer Sports VR',
			video:
				'https://cdn.akamai.steamstatic.com/steam/apps/256956581/movie480_vp9.webm?t=1689558882',
			ImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/2074750/hero_capsule.jpg?t=1702862604',
		},
	];

	useEffect(() => {
		const timerReactVideo = setTimeout(() => {
			setShowPoster(false);
		}, 5000);

		return () => clearTimeout(timerReactVideo);
	}, []);

	return (
		<div className={style.main}>
			<Header />
			<main>
				<section>
					<div className={style.left}>
						{showPoster ? (
							<img src='https://i.playground.ru/p/qVvkHT1H34UIYtOC2vxRYA.png' alt='poster' />
						) : (
							<Video
								autoPlay
								loop
								muted
								poster='https://i.playground.ru/p/qVvkHT1H34UIYtOC2vxRYA.png'>
								<source src='/public/video/video.mp4' type='video/mp4' />
							</Video>
						)}
					</div>
					<div className={style.right}>
						<h2>Genshin Impact</h2>
						<p>Last activity: 16 hours ago</p>
						<Gallery />
					</div>
				</section>
				<div className={style.content_card}>
					<h1>Special offers</h1>
					<div className={style.card_block_items}>
						{galleryFreeGamesBig.map((item, i) => (
							<CardBigSteam key={i} item={item} />
						))}
						{galleryFreeGamesSmall.map((item, i) => (
							<CardSmallSteam item={item} key={i} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
