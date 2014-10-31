'use strict';

// (function(){
// 	$(function(){
// 		var imgUl = $('div.slider').children('ul'),
// 			imgs = imgUl.find('.slide'),
// 			imgWidth = imgs[0].clientWidth,
// 			imgTotal = imgs.length,
// 			current = 1,
// 			totalWidth = imgWidth - (imgTotal * imgWidth) ;
//
// 			$('button').on('click',function(){
// 				console.log(current);
// 				var direction = $(this).data('dir');
// 				direction === 'next' ? ++current : --current;
// 				var loc = imgWidth;
//
// 				if(current === 0){//first image then click previous
// 					current = imgTotal; //set to last image
// 					loc = totalWidth;
// 				} else if(current - 1 === imgTotal ) { //last image then click next restart
// 					current = 1;
// 					loc = 0;
// 				}
// 				var dir;
// 				if(loc !== 0){
// 					dir = (direction === 'next') ? '-=' : '+=';
// 				}
// 				console.log(loc);
//
//
//
// 				imgUl.animate({'margin-left': dir ? (dir+loc) : loc});
// 			});
// 	});
// })();
