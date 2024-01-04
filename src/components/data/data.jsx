import { BiBook } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { TiMessages } from 'react-icons/ti';

export const navigationItem = [
	{ name: 'Home', path: '/', icon: <GoHome /> },
	{ name: 'Categories', path: 'DiscoverGames', icon: <BiBook /> },
	{ name: 'My Games', path: 'MyGames', icon: <TiMessages /> },
	{ name: 'Profile', path: '/Setting', icon: <PiFinnTheHumanFill /> },
];

export const imageResult = [
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

export const galleryFreeGamesBig = [
	{
		id: 1,
		name: 'The Front',
		video: 'https://cdn.akamai.steamstatic.com/steam/apps/256971861/movie480_vp9.webm?t=1695891815',
		ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2285150/header.jpg?t=1699155742',
	},
	{
		id: 2,
		name: 'Dyson Sphere Program',
		video: 'https://cdn.akamai.steamstatic.com/steam/apps/256988952/movie480_vp9.webm?t=1702608210',
		ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1366540/header.jpg?t=1702624498',
	},
];

export const galleryFreeGamesSmall = [
	{
		id: 1,
		name: 'War Thunder',
		video: 'https://cdn.akamai.steamstatic.com/steam/apps/2032399/movie480.webm?t=1576785190',
		ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/236390/hero_capsule.jpg?t=1702564009',
	},
	{
		id: 2,
		name: 'Trackmania',
		video: 'https://cdn.akamai.steamstatic.com/steam/apps/256926223/movie480_vp9.webm?t=1674777790',
		ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2225070/hero_capsule.jpg?t=1693425668',
	},
	{
		id: 3,
		name: 'All-In-One Summer Sports VR',
		video: 'https://cdn.akamai.steamstatic.com/steam/apps/256956581/movie480_vp9.webm?t=1689558882',
		ImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2074750/hero_capsule.jpg?t=1702862604',
	},
];
