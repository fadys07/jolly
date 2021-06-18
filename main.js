function animateStep(t, e, button) {
	var buttons = button.parents(".buttons");

	var a = $("[data-step=" + t + "]");
	$new_step = $("[data-step=" + e + "]"), 
	$("body").removeClass("step--" + t).addClass("step--" + e), 
	t != e ? ("zoom" == $new_step.data("effect") ? a.css({"-webkit-transform": "scale(0)", 
	transform: "scale(0)"}).fadeOut(200, function () {
		$new_step.fadeIn(200).css({"-webkit-transform": "scale(1)", transform: "scale(1)"})
	}) : "left" == $new_step.data("effect") ? (a.css({"-webkit-transform": "translateX(-100%)", transform: "translateX(-100%)"}), 
	$new_step.show(), setTimeout(function () {
		$new_step.css({"-webkit-transform": "translateX(0)", transform: "translateX(0)"})
	}, 0)) : "up" == $new_step.data("effect") ? ($new_step.show(), 
	setTimeout(function () {
		$new_step.css({"-webkit-transform": "translateY(0)", transform: "translateY(0)"})
	}, 0)) : "turn" == $new_step.data("effect") && ($("[data-step=" + (t - 1) + "]").fadeOut(100), 
	a.show().css({"-webkit-transform": "rotate3d(0, 1, 0, -90deg)", transform: "rotate3d(0, 1, 0, -90deg)"}).fadeOut(250, function () {
		$new_step.fadeIn(250).css({"-webkit-transform": "rotate3d(0, 1, 0, 0deg)", transform: "rotate3d(0, 1, 0, 0deg)"})
	})), 
	2 == e && ($("body").removeClass("is--yellowbg"), 
	$("footer a").addClass("is--white")), 
	5 == e && ($('.step:last-child').addClass("is--overlayed"), 
	$('.unsubscribe').appendTo('div.step:last-child'),
	setTimeout(function () {
		var t = $(".percentage"), e = 0, a = 1e3, s = 83, n = 10, o = setInterval(function () {
			var d = parseInt(e / a * 100);
			t.text(d), d === s && (clearInterval(o), $(".match-result").addClass("is--visible")), e += n
		}, n)
	}, 400))) : $new_step.fadeIn(400), 
	$(window).scrollTop($("[data-form]").offset().top),
	setTimeout(function(){
		$new_step.find(".field__input").focus();
	}, 800);
}

function changeTitle(data) {
	if (data.city.en != undefined) {
		$('title').text('Meet local girls in ' + data.city.en);
	}
}

$(document).ready(function () {
	 

	var nextBtn = $('.btn__next');
	var cur_step = 1;	

	nextBtn.on('click', function(e) {
		e.preventDefault();

		var button = $(this);
		var new_step = cur_step + 1;

		animateStep(cur_step, new_step, button);
		cur_step = new_step;
	});			
});