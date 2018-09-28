const images = [
	'mvbxr tumblr_p6v4epzSmi1wucl3to1_400.gif',
	'mvbxr tumblr_ox7ktc0kXP1wucl3to1_500.gif',
	'viablejp tumblr_osqvijuUt11w2tfpoo1_500.gif',
	'audiovisual-dept tumblr_ovnrkepmty1vhmslwo1_500.gif',
	'millenialcrisis tumblr_osbyr0nOPB1wqfvrxo1_540.gif',
	'sudokuyomi tumblr_op8sjhpD0x1w4oiizo1_500.gif',
	'infinite-flow tumblr_oa4b76LGS11v7t2dzo1_500.gif',
	'mvbxr tumblr_p6wquqV17N1wucl3to1_400.gif',
	'retro-tees tumblr_pdc2nuo5dj1x7tfmzo1_500.gif',
	'sweethoney tumblr_p03yk2eG9n1vp0tjvo1_500.gif'
];

document.getElementsByClassName('background')[0].style.backgroundImage = 'url("../img/' + images[Math.floor(Math.random() * images.length) + 0] + '")';