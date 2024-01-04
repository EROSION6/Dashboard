import { useEffect, useState } from 'react';
import Header from '../components/Main/Header';
import style from '../components/scss/DiscoverGames.module.scss';
import axios from 'axios';
import CardSmallSteam from '../components/Card/CardSmallSteam/CardSmallSteam';
import CardBigSteam from '../components/Card/CardBigSteam/CardBigSteam';

export default function DiscoverGames() {
	const [cardGames, setCardGames] = useState([]);
	const [cardBig, setCardBig] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredGames, setFilteredGames] = useState(cardGames);

	useEffect(() => {
		const fetchData = async () => {
			const response1 = await axios.get('https://0cab3ac01bee217d.mokky.dev/Game');
			const response2 = await axios.get('https://0cab3ac01bee217d.mokky.dev/ItemsBig');
			setCardGames(response1.data);
			setCardBig(response2.data);
		};
		fetchData();
	}, [search]);

	useEffect(() => {
		const filteredGames = cardGames.filter(item =>
			item.name.toLowerCase().includes(search.toLowerCase()),
		);
		setFilteredGames(filteredGames);
	}, [search, cardGames, cardBig]);

	return (
		<div className={style.discoverGames}>
			<Header search={search} setSearch={setSearch} />
			<main>
				<section>
					<h1>Browse By Categories</h1>
					<div className={style.cardBigGamesApi}>
						{cardBig.map(item => (
							<CardBigSteam key={item.id} item={item} />
						))}
					</div>
					<section>
						<h1>Best Selling</h1>
						<div className={style.cardSmallGamesApi}>
							{filteredGames.length > 0 ? (
								filteredGames.map(item => <CardSmallSteam key={item.id} item={item} />)
							) : (
								<h1>Ничего не найдено &#128577;</h1>
							)}
						</div>
					</section>
				</section>
			</main>
		</div>
	);
}
