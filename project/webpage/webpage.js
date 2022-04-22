$(function () {
	$('html, body').animate({ scrollTop: 0 }, 'smooth');
});

let didScroll;
let lasScrollTop = 0;
let delta = 5;
let navBerHeight = $('header').outerHeight();
$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);
// 헤더 컨트롤 함수//
function hasScrolled() {
	let st = $(this).scrollTop();

	if (Math.abs(lasScrollTop - st) <= delta) return;

	if (st > lasScrollTop && st > navBerHeight) {
		$('header').removeClass('navDown').addClass('navUp');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('navUp').addClass('navDown');
		}
	}
	lasScrollTop = st;
}
// typing //
const stringTarget = document.querySelector('#stringTarget');

randomString = () => {
	const stringArr = ['먹으러 가자!', '놀러가자!', '쇼핑하자!', '낮잠 자자!'];
	const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
	const selectStringArr = selectString.split('');
	return selectStringArr;
};

//random typing//
resetTyping = () => {
	stringTarget.textContent = '';
	stringTg(randomString());
};

stringTg = (randomArr) => {
	if (randomArr.length > 0) {
		stringTarget.textContent += randomArr.shift();
		setTimeout(function () {
			stringTg(randomArr);
		}, 80);
	} else {
		setTimeout(resetTyping, 1500);
	}
};
stringTg(randomString());

//컨텐츠 버튼 클릭시 이동//

$(document).ready(function () {
	$('#eat').click(function () {
		$('html,body').animate({ scrollTop: $('#Timeineat').offset().top }, 200);
	});
	$('#play').click(function () {
		$('html,body').animate({ scrollTop: $('#playing').offset().top }, 200);
	});
	$('#shopping').click(function () {
		$('html,body').animate({ scrollTop: $('#shoppingspot').offset().top }, 200);
	});
	$('#viewer').click(function () {
		$('html,body').animate({ scrollTop: $('#shoppingspot').offset().top }, 200);
	});
});

//강아지 옷입히는거//

$(function () {
	$('#cbOne').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shoppingpo4.png)');
	});
	$('#cbTwo').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shoppingpo5.png)');
	});
	$('#cbThree').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shoppingpo6.png)');
	});
	$('#cbFour').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shoppingpu2.png)');
	});
	$('#cbFive').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shoppingpu3.png)');
	});
	$('#cbSix').click(function () {
		$('#shoppingslide').css('background-image', 'url(./dogpng/shppingpo8.png)');
	});
});

// playdog //
$(function () {
	$('.playinfoBt2').click(function () {
		$('.pi2').css({
			transition: 'all ease-in 0.7s',
			opacity: '1',
			transform: 'translate(-12rem,0rem) rotate(-10deg)',
			'z-index': '15',
		});
	});
	$('.pi2').click(function () {
		$(this).css({ opacity: '0', transform: 'translate(-5rem,5rem) rotate(30deg)', 'z-index': '0' });
	});
	$('.playinfoBt3').click(function () {
		$('.pi1').css({
			transition: 'all ease-in 0.7s',
			opacity: '1',
			transform: 'translate(65rem, -10rem) rotate(-15deg)',
			'z-index': '15',
		});
	});
	$('.pi1').click(function () {
		$(this).css({ opacity: '0', transform: 'translate(55rem,5rem) rotate(-45deg)', 'z-index': '0' });
	});
	$('.playinfoBt1').click(function () {
		$('.pi3').css({
			transition: 'all ease-in-out 0.8s',
			opacity: '1',
			transform: 'translate(-70rem,25rem) rotate(-50deg)',
			'z-index': '15',
		});
	});
	$('.pi3').click(function () {
		$(this).css({ opacity: '0', transform: 'translate(-85rem, 10rem) rotate(10deg)', 'z-index': '0' });
	});
});

$(function () {
	$('.informationDNJ:nth-child(4)').on('mouseover', function () {
		$('.informationDNJ:nth-child(2)').css({ opacity: '1', transform: 'translate(-45rem,25rem) rotate(15deg)' });
		$('.informationDNJ:nth-child(3)').css({ opacity: '1', transform: 'translate(-50rem,25rem) rotate(5deg)' });
	});
	$('.informationDNJ:nth-child(4)').on('mouseout', function () {
		$('.informationDNJ:nth-child(2)').css({ opacity: '0', transform: 'translate(0rem,25rem) rotate(25deg)' });
		$('.informationDNJ:nth-child(3)').css({ opacity: '0', transform: 'translate(-20rem,15rem) rotate(25deg)' });
	});
});

//input 검사//
$('input').on('blur', function (e) {
	let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	let regdogname = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
	let email = $('#Emailadress').val();
	let dogname = $('#dogname').val();

	if (!regdogname.test(dogname)) {
		$('#dogname_alret').css({ visibility: 'visible' });
	} else {
		$('#dogname_alret').css({ visibility: 'hidden' });
	}
	if (!regEmail.test(email)) {
		$('#Emailadress_alret').css({ visibility: 'visible' });
	} else {
		$('#Emailadress_alret').css({ visibility: 'hidden' });
	}
});

$('form').on('click', function (e) {
	e.preventDefault();
});
//버튼 변하는!
$('#submitbtn').on('click', function () {
	let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	let regdogname = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
	let email = $('#Emailadress').val();
	let dogname = $('#dogname').val();

	if (regdogname.test(dogname) && regEmail.test(email)) {
		$(this).text('신청완료!');
		$(this).css({ background: '#BE85FD', color: '#ffea80', animation: 'motion 1s linear 0.5s infinite alternate' });
		$('input').val('');
		$('#flyingdog').css({ transform: 'translate(-15rem)' });
		$('.sumitmodal').css({ display: 'flex' });
	} else {
		$(this).text('ERROR!');
		$(this).css({ background: '#494454', color: '#b61827', animation: 'none' });
	}
	$('#modalclose').on('click', function () {
		$('.sumitmodal').css({ display: 'none' });
		$('#flyingdog').css({ transform: 'translate(-5rem)' });
		$('#submitbtn').css({ background: '#508fff', color: '#fff5e0', animation: 'none' });
		$('#submitbtn').text('신청하기');
	});
});
