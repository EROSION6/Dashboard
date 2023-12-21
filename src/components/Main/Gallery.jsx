import React from 'react';
import style from '../scss/Main.module.scss';

export default function Gallery() {
	const imageResult = [
		{
			url: 'https://i.playground.ru/p/qVvkHT1H34UIYtOC2vxRYA.png',
			title: 'Resin',
			ball: '125/160',
		},
		{
			url: 'https://avatars.mds.yandex.net/get-mpic/4386141/img_id4197311998462740044.jpeg/orig',
			title: 'Achievements',
			ball: '568',
		},
		{
			url: 'https://w.forfun.com/fetch/de/de83dc998245d585c3be45e60e29e433.jpeg',
			title: 'Hours play',
			ball: '1254',
		},
		{
			url: 'https://www.stratege.ru/forums/files/gallery/1/153/e1d/7c4519926c22b9a50c6838a328ca4301.jpeg',
			title: 'Screenshot',
			ball: '32',
		},
	];
	return (
		<div className={style.gallery_grid}>
			{imageResult.map(url => (
				<article className={style.images_block}>
					<img src={url.url} alt={url.title} />
					<b>{url.title}</b>
					<div className={style.rating}>
						<strong>{url.ball}</strong>
					</div>
				</article>
			))}
		</div>
	);
}
