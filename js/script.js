function introAnim() {
	$('#text span').velocity('transition.slideLeftIn', {
		stagger: 100,
		complete: function() {
			buttonAnim();
		}
	});
}

function buttonAnim() {
	$('#about')
		.velocity('transition.bounceUpIn')
		.mouseenter(function() {
			$(this).velocity({
				width: 110
			});
		})
		.mouseleave(function() {
			$(this).velocity({
				width: 135
			});
		});
}

function introAnimOut() {
	$('#about')
		.attr('disabled', true)
		.css({
			color: 'black'
		});
	$('#about').velocity('transition.whirlOut', {
		stagger: 100,
		complete: function() {
			$('#text').velocity(
				{
					'font-size': '5vw',
					top: '95%'
				},
				{
					duration: 1000,
					complete: function() {
						callMenu();
						$("#menu ul li a[href='who_am_i']").trigger('click');
						$('#about')
							.attr('disabled', false)
							.css({
								color: 'black'
							});
					}
				}
			);
		}
	});
}

function callMenu() {
	$('#menu ul li').velocity('transition.slideLeftIn', {
		stagger: 250
	});
	$('#menu ul li a')
		.off()
		.click(function(event) {
			event.preventDefault();
			$(this)
				.parent('li')
				.addClass('active')
				.siblings()
				.removeClass('active');

			var hrefString = $(this).attr('href');
			if (hrefString == 'back') {
				back();
			} else {
				if (!$('#' + hrefString).is(':visible')) {
					$('.container-content').fadeOut(500);
					setTimeout(function() {
						$('#' + hrefString).show();
						window[hrefString]();
					}, 500);
				}
			}
		});
}

function who_am_i() {
	$('#who_am_i img').velocity('transition.flipYIn', {
		duration: 1500
	});
	$('#who_am_i .title').velocity('transition.slideUpIn', {
		duration: 1500
	});
	$('#who_am_i div').velocity('transition.slideDownIn', {
		duration: 1500
	});
}

function contact() {
	$('#logo ul li').velocity('transition.perspectiveUpIn', {
		stagger: 150
	});
	setTimeout(function() {
		$('#logo ul li a')
			.mouseover(function() {
				$(this)
					.parent('li')
					.addClass('fa-spin')
					.siblings()
					.removeClass('fa-spin');
			})
			.mouseleave(function() {
				$(this)
					.parent('li')
					.removeClass('fa-spin');
			});
	}, 1200);
}

function back() {
	$('#menu ul li').hide();
	$('.container-content').hide();
	$('#text').velocity(
		{
			'font-size': '50px',
			top: '50%'
		},
		{
			duration: 1000,
			complete: function() {
				$('#about')
					.velocity('transition.whirlIn')
					.css({
						width: '135'
					});
			}
		}
	);
}

$(document).ready(function() {
	introAnim();
});
