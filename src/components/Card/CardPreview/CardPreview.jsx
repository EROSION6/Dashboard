import style from './CardPreview.module.scss';

export default function CardPreview({ card }) {
	return (
		<article className={style.cardPreview}>
			<div className={style.cardText}>
				<strong>{card.title}</strong>
				<b>See all</b>
			</div>
			<div className={style.card_gallery_preview}>
				{card.imgUrl.map((url, i) => (
					<img src={url} alt='' key={i} />
				))}
			</div>
		</article>
	);
}
