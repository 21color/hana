'use strict';
//intro
window.onload = () => {
	const introwapper = document.querySelector('.introwapper');
	const introtitle = document.querySelector('.introtitle');
	// setTimeout(() => {
	//   introwapper.style.opacity= '0';
	//   introtitle.style.animation = 'none';
	// }, 2200);
	// setTimeout(() => {
	//   introwapper.style.visibility= 'hidden';
	// }, 2300);

	tabmenu()
  // slider

  let indexNum = 0;
  function slideShow (){
    const himage = document.querySelectorAll('.himage');
    for(let i = 0; i < himage.length ; i ++ ) {
      himage[i].style.opacity = 0;
    }
    indexNum ++;
    if (indexNum > himage.length ) {
      indexNum = 1;
    }
    himage[indexNum - 1].style.opacity = 1;
    setTimeout(slideShow, 2500);
  }
  slideShow();
  ///slider 2 

	function slideshow2(){
		const prevbtn = document.querySelector('.prevbtn');
		const nextbtn = document.querySelector('.nextbtn');
		const slidimgs = document.querySelector('.slidimgs');
		let slidarray = [
			'../img/SVG/img.jpg', '../img/SVG/img2.jpeg', '../img/SVG/img3.jpeg'
		];

		prevbtn.addEventListener('click', (e) => {
			let tryValue = slidarray.shift();
			slidarray.push(tryValue);
			slidimgs.style.backgroundImage = `url('${slidarray[1]}')`
		});
		nextbtn.addEventListener('click', (e)=>{
			let tryValue2 = slidarray.pop();
			slidarray.unshift(tryValue2);
			slidimgs.style.backgroundImage = `url('${slidarray[1]}')`
		})
	}

	$(document).on({'click': (e) => {
		
		console.log(e.target);
		switch (e.target.id) {
			case 'catclosebtn':
				{
					$('.catgifcontior').css({
						visibility: 'hidden',
						opacity: '0',
					});
          $('.catgif').css({
            transform:'translate(2rem,-20rem)'
          }); 
				}
				break;
			case 'catimg':
				{
					$('.catgifcontior').css({
						visibility: 'visible',
						opacity: '1',
					});
          $('.catgif').css({
            transform:'translate(2rem,0rem)'
          });
					$('.infowapper').css({
						visibility: 'hidden',
						opacity: '0',
					});
					$('.coralinewappr').css({
						visibility: 'hidden',
						opacity: 0,
						zIndex: 0
					});
				}
				break;
			case 'homeclosebtn':
				{
					$('.infowapper').css({
						visibility: 'hidden',
						opacity: '0',
					});
          $('.houseimage').css({
            transform: 'translate(32rem,3rem)'
          })
          $('.coraline_house_info_img').css({
            transform: 'translate(-30rem,5rem)'
          })
				}
				break;
			case 'coralinehome': {
				$('.infowapper').css({
					visibility: 'visible',
					opacity: '1',
				});
          $('.houseimage').css({
            transform: 'translate(12rem,3rem)'
          });
          $('.coraline_house_info_img').css({
            transform: 'translate(-10rem,5rem)'
          })
					$('.catgifcontior').css({
						visibility: 'hidden',
						opacity: '0',
					});
          $('.catgif').css({
            transform:'translate(2rem,-20rem)'
          }); 
			}
			break;
			case 'aboutcoralineclosebtn': {
				clearTimeout();
				$('.coralinewappr').css({
					visibility: 'hidden',
					opacity: 0,
					zIndex: 0
				});
				$('.catgifcontior').css({
					visibility: 'hidden',
					opacity: '0',
				});
				$('.catgif').css({
					transform:'translate(2rem,-20rem)'
				}); 
				$('.hairpingif').css({
					visibility: 'hidden',
					opacity: 0,
					marginTop: '50rem'
				});
				$('.fakecogif').css({
					visibility: 'hidden',
					opacity: 0,
					marginBottom: '50rem'
				});
				$('.storybord').css({
					visibility: 'hidden',
					opacity: 0,
					marginLeft: '40rem'
				});
				$('.hairpin').removeClass('hairpinadd')
				$('.fakeco').removeClass('fakecoani');
				
			}
			break;
			case 'coralinepng': {
				$('.coralinewappr').css({
					visibility: 'visible',
					opacity: 1,
					zIndex: 1000
				});
				$('.catgifcontior').css({
					visibility: 'hidden',
					opacity: '0',
				});
				$('.catgif').css({
					transform:'translate(2rem,-20rem)'
				}); 
				$('.hairpin').addClass('hairpinadd')
				$('.fakeco').addClass('fakecoani');
				let timer = setTimeout(() => {
					$('.fakeco').append(`<p class="clickp">click me!</p>`);
					$('.hairpin').append(`<p class="clickthis">Click this!</p>`)
				}, 2500)
			};
			break;
			case 'gif3closebtn': {
				$('.fakecogif').css({
					visibility: 'hidden',
					opacity: 0,
					marginBottom: '50rem'
				});
			}
			break;
			case 'fakecobtn': {
				$('.fakecogif').css({
					visibility: 'visible',
					opacity: 1,
					marginBottom: '0rem'
				});	
			}
			break;
			case 'mainimgcon': {
				$('.storybord').css({
					visibility: 'visible',
					opacity: 1,
					marginLeft: 0
				});
				$('.hairpingif').css({
					visibility: 'hidden',
					opacity: 0,
					marginTop: '50rem'
				});
			}
			break;
			case 'infoclosebtn': {
				$('.storybord').css({
					visibility: 'hidden',
					opacity: 0,
					marginLeft: '40rem'
				})
			}
			break;
			case 'hairpin': {
				slideshow2 ()
				$('.hairpingif').css({
					visibility: 'visible',
					opacity: 1,
					marginTop: 0
				})
				$('.storybord').css({
					visibility: 'hidden',
					opacity: 0,
					marginLeft: '40rem'
				})
			}
			break;
			case 'gif4closebtn': {
				$('.hairpingif').css({
					visibility: 'hidden',
					opacity: 0,
					marginTop: '50rem'
				});
			}
			break;
			case 'bigpinkplace': {
				$('.youtubewapper').css({
					visibility: 'visible',
					opacity: 1
				})
				$('.catgifcontior').css({
					visibility: 'hidden',
					opacity: '0',
				});
				$('.catgif').css({
					transform:'translate(2rem,-20rem)'
				}); 
				$('.iframewapper').css({
					transform: 'translate(-5rem)'
				})
				$('.movieinfomation').css({
					transform: 'translate(5rem)'
				})
			}
			break;
			case 'youtubeclosebtn': {
				$('.youtubewapper').css({
					visibility: 'hidden',
					opacity: 0
				})
				$('.iframewapper').css({
					transform: 'translate(-50rem)'
				})
				$('.movieinfomation').css({
					transform: 'translate(50rem)'
				})
			}
			
		}
		
	},'mouseover': (e)=>{
		switch(e.target.className) {
		case 'coralinepng': {
			$('.treeimg').css({
				transform: 'translate(-25rem, 9rem) rotate(7deg)'
			});
		}
	}},
	'mouseout': (e)=>{
		$('.treeimg').css({
			transform: 'translate(-25rem, 9rem) rotate(5deg)'
		});
	}
});
function tabmenu() {
  let tabWrapper = $('#tab-block'),
      tabMnu = tabWrapper.find('.tab-mnu  li'),
      tabContent = tabWrapper.find('.tab-cont > .tab-pane');
  
  tabContent.not(':first-child').hide();
  
  tabMnu.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  tabContent.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  
  tabMnu.click(function(){
    const tabData = $(this).data('tab');
    tabWrapper.find(tabContent).hide();
    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
  });
  
  $('.tab-mnu > li').click(function(){
    const before = $('.tab-mnu li.active');
    before.removeClass('active');
    $(this).addClass('active');
   });
	}
}