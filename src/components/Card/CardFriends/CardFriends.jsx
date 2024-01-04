import style from './CardFriends.module.scss';

export default function CardFriends() {
	const imgAvatar = [
		'https://cs16planet.ru/steam-avatars/1739',
		'https://cs16planet.ru/steam-avatars/2022',
		'https://cs16planet.ru/steam-avatars/1312',
		'https://cs16planet.ru/steam-avatars/766',
	];
	return (
		<article className={style.cardFriends}>
			<div className={style.imgFriends}>
				{imgAvatar.map((img, i) => (
					<img src={img} key={i} />
				))}
			</div>
		</article>
	);
}
