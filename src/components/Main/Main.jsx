import { useEffect, useState } from 'react';
import style from '../scss/Main.module.scss';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Header from './Header';
import '../style.css';
import Gallery from './Gallery';
import CardBigSteam from '../Card/CardBigSteam/CardBigSteam';
import CardSmallSteam from '../Card/CardSmallSteam/CardSmallSteam';
import { galleryFreeGamesBig, galleryFreeGamesSmall } from '../data/data';

export default function Main() {
	const [showPoster, setShowPoster] = useState(true);

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
							<CardBigSteam style={{ width: '33vw' }} key={i} item={item} />
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
