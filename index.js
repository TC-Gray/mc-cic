window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById("logo").style.width = "14%";
		document.getElementById("n-left").style.left = "3.5%";

	} else {
		document.getElementById("logo").style.width = "18%";
		document.getElementById("n-left").style.left = "0";

	}
}

function seeMore() {
	var x = document.getElementById("more-projects").classList.contains('none');
    document.getElementById("more-projects").classList.toggle('none');
		if (x == true) {
			document.getElementById("see-more-btn").innerHTML = "Show less -";
		} else {
			document.getElementById("see-more-btn").innerHTML = "Show more +";
		}
}

// function nextSlide() {
// 		if (document.querySelector(".slide2").classList.contains("visible") == true) {
// 		document.querySelector(".slide2").classList.replace("visible", "hidden");
// 		document.querySelector(".slide1").classList.replace("hidden", "visible");
// 	} else if (document.querySelector(".slide2").classList.contains("visible") == false) {
// 		document.querySelector(".slide1").classList.replace("visible", "hidden");
// 		document.querySelector(".slide2").classList.replace("hidden", "visible");
// 	}
// }
//
// function dropNavMenu() {
// 	var x = document.getElementById("nav-menu");
// 	if (x.classList.contains("responsive") == false) {
// 		x.classList.add("responsive");
// 	} else {
// 		x.classList.remove("responsive");
// 	}
// 	}
