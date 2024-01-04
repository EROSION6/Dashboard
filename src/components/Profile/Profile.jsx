import { useState } from 'react';
import style from '../scss/Setting.module.scss';
import CardPreview from '../Card/CardPreview/CardPreview';
import CardFriends from '../Card/CardFriends/CardFriends';

export default function Profile() {
	const blockGamesCategory = [
		{
			title: 'Games',
			imgUrl: [
				'https://cdn.akamai.steamstatic.com/steam/apps/1928420/hero_capsule.jpg?t=1695292364',
				'https://cdn.akamai.steamstatic.com/steam/apps/892970/hero_capsule.jpg?t=1701931405',
				'https://cdn.akamai.steamstatic.com/steam/apps/582660/hero_capsule.jpg?t=1702578736',
				'https://cdn.akamai.steamstatic.com/steam/apps/1527950/hero_capsule_alt_assets_3_russian.jpg?t=1702564922',
			],
		},
		{
			title: 'inventory',
			imgUrl: [
				'https://sun9-12.userapi.com/impf/5KLW4AMoou68GnzlTX4HpGU4A7HPOFqb7BXnfA/Ml2A7oiuxAI.jpg?size=600x400&quality=96&sign=91b02323e9b9be9f23944afe7f4b6d47&type=album',
				'https://steamcommunity-a.akamaihd.net/economy/image/W_I_5GLm4wPcv9jJQ7z7tz_l_0sEIYUhRfbF4arNQkgGQGKd3kMuVpMgCwRZrhKDZECe1qNefuLIDgc-EozAREuqe76Zx1utUtdPbutnNngm0Iiq0RwMV3TTBuNCWtd4vcvLhwq7WFCUcDppyYRV16WYh8fXCKbV_xCzdwB00vopU8uuv4wSrg/490fx326f',
				'https://www.digiseller.ru/preview/1150455/p1_3673090_944ccf6e.png',
				'https://www.digiseller.ru/preview/1174986/p1_3764508_cdc3863c.jpg',
			],
		},
		{
			title: 'Groups',
			imgUrl: [
				'https://avatars.akamai.steamstatic.com/6cf6289bea80ab0b4b96723741a24a89d9b7596f_full.jpg',
				'https://avatars.akamai.steamstatic.com/eb3af84bf1cd255019d7ab0980e0f3e3c41a4d27_full.jpg',
				'https://avatars.akamai.steamstatic.com/b423ca41a4980c2ae40a587c58bec3430b99369d_full.jpg',
				'https://avatars.akamai.steamstatic.com/8123e1f2969850d7ee16cdc335e1cf79e7d74b3d_full.jpg',
			],
		},
	];

	const [tabActive, setTabActive] = useState(0);

	const handlerTabsActive = i => {
		setTabActive(i);
	};

	return (
		<div className={style.container}>
			<section className={style.block_game_setting}>
				<h2>Recent Activity</h2>
				<div className={style.myGames_list}>
					<h1>You don't have any games 😓</h1>
				</div>
			</section>
			<div className={style.block_text_setting}>
				<nav>
					<ul>
						<li
							className={tabActive === 0 ? style.activeTabs : style.list}
							onClick={() => handlerTabsActive(0)}>
							Preview
						</li>
						<li
							className={tabActive === 1 ? style.activeTabs : style.list}
							onClick={() => handlerTabsActive(1)}>
							Friends
						</li>
					</ul>
				</nav>
				<div
					style={{ display: tabActive === 0 ? 'flex' : 'none' }}
					className={style.grid_block_preview}>
					{blockGamesCategory.map((card, i) => (
						<CardPreview card={card} key={i} />
					))}
				</div>
				<div style={{ display: tabActive === 1 ? 'flex' : 'none' }} className={style.tabs_2}>
					<CardFriends />
				</div>
			</div>
		</div>
	);
}
