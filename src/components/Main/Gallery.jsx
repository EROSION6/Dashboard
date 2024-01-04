import style from '../scss/Main.module.scss';
import { imageResult } from '../data/data';

export default function Gallery() {
	return (
		<div className={style.gallery_grid}>
			{imageResult.map((url, i) => (
				<article key={i} className={style.images_block}>
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
