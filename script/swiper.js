import Swiper from 'swiper';
import { Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	observer: true,
	breakpoints: {
		1119: {
			enabled: false,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
});