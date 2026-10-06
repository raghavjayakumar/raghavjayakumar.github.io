/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sidebar Navigation
// Sticky Header
// Hamburger Menu
// Scroll To Section
// OnePage Active Class
// Portfolio Filter
// Portfolio Gallery Carousel
// Testimonial Carousel
// Nice Select
// ALL Popup
// Preloader
// Sidebar Hover BG Color
// Services Hover BG
// Portfolio Filter BG Color
// Funfact
// WoW Js

****************************************************/

(function ($) {
	"use strict";

	/*------------------------------------------------------
  /  Data js
  /------------------------------------------------------*/
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {
		/*------------------------------------------------------
  	/  Sticky Header
  	/------------------------------------------------------*/
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		/*------------------------------------------------------
  	/  Hamburger Menu
  	/------------------------------------------------------*/
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".header-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".header-menu ul li a").on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".header-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});

		/*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
		$(".header-menu nav ul").onePageNav({
			currentClass: "current-menu-ancestor",
			changeHash: false,
			easing: "swing",
		});

		/*------------------------------------------------------
	/  Two-Row Horizontally Moving Creative Showcase
	/------------------------------------------------------*/
		var longFormProjects = [
			{
				id: "estate",
				title: "Luxury Estate Living",
				category: "Architectural Cinema",
				desc: "High-end lifestyle and estate documentary",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/long%20form%201.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/long%20form%201.jpg"
			},
			{
				id: "creator",
				title: "The Creator Mindset",
				category: "Creator Documentary",
				desc: "Multi-cam studio interview and retention cuts",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/long%20form%202.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/long%20form%202.jpg"
			},
			{
				id: "burn",
				title: "Burn – Cinematic Narrative",
				category: "Narrative & Sound Design",
				desc: "Dramatic color grading and layered audio",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/Burn.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/Burn.jpg"
			},
			{
				id: "mo",
				title: "Creator Odyssey Branding",
				category: "Channel Identity",
				desc: "3D character animation and UI motion",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/Mo.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/Mo.jpg"
			},
			{
				id: "sim",
				title: "Simon Squibb Conversation",
				category: "Long-Form Interview",
				desc: "High-retention conversational pacing and cuts",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/Sim.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/Sim.jpg"
			},
			{
				id: "gif",
				title: "Retail Investors Movement",
				category: "Financial Motion",
				desc: "Clean corporate typography and grid design",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/GIF.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/GIF.jpg"
			},
			{
				id: "skyfall",
				title: "Skyfall 3D Motion Tracking",
				category: "3D VFX & Motion Showreel",
				desc: "Camera solve, glow typography and sky replacement",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/Reels.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/Reels.jpg"
			},
			{
				id: "animation",
				title: "Father & Son Night Story",
				category: "2D Animated Narrative",
				desc: "Cinematic lighting, moon silhouette and soundscape",
				format: "format-16-9",
				categories: ["long-form"],
				videoSrc: "assets/img/portfolio/fa.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/fa.jpg"
			}
		];

		var shortFormProjects = [
			{
				id: "twi",
				title: "The Recession Blueprint",
				category: "Explainer Reel",
				desc: "Kinetic document motion and data storytelling",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/twi.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/twi.jpg"
			},
			{
				id: "nike",
				title: "Shoe Dog – Nike Origin",
				category: "Narrative Storytelling",
				desc: "Kinetic archival motion and speech pacing",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/reels%201.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/reels%201.jpg"
			},
			{
				id: "chemical",
				title: "Chemical Attack VFX",
				category: "Sci-Fi Visual Effects",
				desc: "Dark atmosphere and holographic motion",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/reels%202.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/reels%202.jpg"
			},
			{
				id: "mindset",
				title: "Time & Mindset Philosophy",
				category: "Kinetic Collage Reel",
				desc: "Surreal collage art and clock timing motion",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/fin.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/fin_reel.jpg"
			},
			{
				id: "focus",
				title: "Focus Is Growth",
				category: "Motivation & Street Reel",
				desc: "Dynamic urban poster pacing and kinetic motion",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/Com.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/com_reel.jpg"
			},
			{
				id: "recession2",
				title: "Data Narrative Breakdown",
				category: "Financial Explainer Reel",
				desc: "High-speed document animation and kinetic typography",
				format: "format-9-16",
				categories: ["short-form"],
				videoSrc: "assets/img/portfolio/twi.mp4",
				posterSrc: "assets/img/portfolio/thumbnails/twi.jpg"
			}
		];

		// Backwards-compatible aliases
		var youtubeProjects = longFormProjects;
		var reelsProjects = shortFormProjects;

		// Dedicated Short Form showcase list (excludes Data Narration / Recession Blueprint)
		var shortFormOnlyProjects = [
			shortFormProjects[1], // nike: Shoe Dog – Nike Origin
			shortFormProjects[2], // chemical: Chemical Attack VFX
			shortFormProjects[3], // mindset: Time & Mindset Philosophy
			shortFormProjects[4]  // focus: Focus Is Growth
		];

		var projectsMap = {};
		longFormProjects.concat(shortFormProjects).forEach(function (p) {
			projectsMap[p.id] = p;
		});

		function buildCardMarkup(item, isClone) {
			var cloneAttr = isClone ? ' tabindex="-1" aria-hidden="true"' : ' tabindex="0" role="button" aria-label="Watch video: ' + item.title + '"';
			var descMarkup = item.desc ? '<p class="meta-desc">' + item.desc + '</p>' : '';
			return '<div class="portfolio-card ' + item.format + ' ' + item.categories.join(' ') + '" data-id="' + item.id + '"' + cloneAttr + '>' +
				'<div class="image-box">' +
					'<video poster="' + item.posterSrc + '" autoplay loop muted playsinline preload="auto">' +
						'<source src="' + item.videoSrc + '" type="video/mp4">' +
					'</video>' +
					'<div class="portfolio-meta">' +
						'<div class="meta-inner">' +
							'<span class="meta-category">' + item.category + '</span>' +
							'<h3 class="meta-title">' + item.title + '</h3>' +
							descMarkup +
						'</div>' +
						'<div class="meta-action">' +
							'<i class="fa-solid fa-arrow-up-right"></i>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		function getFilteredRows(filterVal) {
			if (filterVal === "short-form" || filterVal === ".short-form" || filterVal === "reels" || filterVal === ".reels") {
				// STRICTLY 9:16 SHORT FORM ONLY (SINGLE LAYER OF REAL 9:16 WORKS)
				// Excludes: Data Narration / Data Narrative project & The Recession Blueprint
				return {
					row1: shortFormOnlyProjects.concat(shortFormOnlyProjects),
					row2: []
				};
			} else if (filterVal === "long-form" || filterVal === ".long-form" || filterVal === "youtube" || filterVal === ".youtube") {
				// STRICTLY 16:9 LONG FORM ONLY
				return {
					row1: [longFormProjects[0], longFormProjects[1], longFormProjects[2], longFormProjects[3]], // estate, creator, burn, mo
					row2: [longFormProjects[4], longFormProjects[5], longFormProjects[6], longFormProjects[7]]  // sim, gif, skyfall, animation
				};
			} else {
				// ALL (Harmonious alternating 16:9 Landscape and 9:16 Portrait across both rows)
				return {
					row1: [
						longFormProjects[0], // 16:9 Estate
						shortFormProjects[0], // 9:16 Twi
						longFormProjects[1], // 16:9 Creator
						shortFormProjects[1], // 9:16 Nike
						longFormProjects[2], // 16:9 Burn
						shortFormProjects[3], // 9:16 Mindset
						longFormProjects[3]  // 16:9 Mo
					],
					row2: [
						shortFormProjects[2], // 9:16 Chemical
						longFormProjects[4], // 16:9 Sim
						shortFormProjects[4], // 9:16 Focus
						longFormProjects[5], // 16:9 Gif
						shortFormProjects[5], // 9:16 Recession2
						longFormProjects[6], // 16:9 Skyfall
						longFormProjects[7]  // 16:9 Animation
					]
				};
			}
		}

		function bulkPlayVideos($container) {
			var $target = $container || $("#portfolio-showcase");
			$target.find("video").each(function () {
				var v = this;
				v.muted = true;
				v.defaultMuted = true;
				v.loop = true;
				v.playsInline = true;
				var playPromise = v.play();
				if (playPromise !== undefined && playPromise.catch) {
					playPromise.catch(function () {});
				}
			});
		}

		function updateShowcaseGrid(filterVal) {
			var rows = getFilteredRows(filterVal);
			var $showcase = $("#portfolio-showcase");
			var isShortForm = (filterVal === "short-form" || filterVal === ".short-form" || filterVal === "reels" || filterVal === ".reels");

			$showcase.addClass("is-switching");
			setTimeout(function () {
				$(".portfolio-marquee-row").removeClass("is-paused");

				if (isShortForm) {
					$showcase.addClass("is-single-row");
				} else {
					$showcase.removeClass("is-single-row");
				}

				var $r1Orig = $showcase.find('.portfolio-marquee-row[data-row="1"] .marquee-original').empty();
				var $r1Clone = $showcase.find('.portfolio-marquee-row[data-row="1"] .marquee-clone').empty();
				rows.row1.forEach(function (item) {
					$r1Orig.append(buildCardMarkup(item, false));
					$r1Clone.append(buildCardMarkup(item, true));
				});

				var $r2Row = $showcase.find('.portfolio-marquee-row[data-row="2"]');
				var $r2Orig = $r2Row.find('.marquee-original').empty();
				var $r2Clone = $r2Row.find('.marquee-clone').empty();
				if (!isShortForm && rows.row2 && rows.row2.length) {
					rows.row2.forEach(function (item) {
						$r2Orig.append(buildCardMarkup(item, false));
						$r2Clone.append(buildCardMarkup(item, true));
					});
				}

				bulkPlayVideos($showcase);
				$showcase.removeClass("is-switching");
			}, 180);
		}

		// Filter button click handler
		$(".filter-button-group").on("click", "button", function () {
			$(".filter-button-group button").removeClass("active");
			$(this).addClass("active");
			var filterVal = $(this).attr("data-filter");
			updateShowcaseGrid(filterVal);
		});

		// Hover interaction pauses horizontal marquee motion so user can focus on the card
		$("#portfolio-showcase")
			.on("mouseenter", ".portfolio-card", function () {
				if (!$("#portfolio-video-dialog").hasClass("is-open")) {
					$(this).closest(".portfolio-marquee-row").addClass("is-paused");
				}
			})
			.on("mouseleave", ".portfolio-card", function () {
				if (!$("#portfolio-video-dialog").hasClass("is-open")) {
					$(this).closest(".portfolio-marquee-row").removeClass("is-paused");
				}
			});

		// Initial Bulk Autoplay Activation
		bulkPlayVideos($("#portfolio-showcase"));
		$(window).on("load scroll", function () {
			if (!$("#portfolio-video-dialog").hasClass("is-open")) {
				bulkPlayVideos($("#portfolio-showcase"));
			}
		});
		$(document).one("click touchstart", function () {
			if (!$("#portfolio-video-dialog").hasClass("is-open")) {
				bulkPlayVideos($("#portfolio-showcase"));
			}
		});

		// Video Dialog / Lightbox Logic
		var activeTriggerCard = null;

		function openVideoDialog(cardId, $triggerElement) {
			var project = projectsMap[cardId];
			if (!project && $triggerElement && $triggerElement.length) {
				var $v = $triggerElement.find("video source");
				var vSrc = $v.attr("src") || $triggerElement.find("video").attr("src");
				var isPort = $triggerElement.hasClass("format-9-16");
				project = {
					id: cardId,
					title: $triggerElement.find(".meta-title").text(),
					format: isPort ? "format-9-16" : "format-16-9",
					videoSrc: vSrc
				};
			}
			if (!project || !project.videoSrc) return;

			activeTriggerCard = $triggerElement || null;

			// Stop/pause gallery previews and pause marquee movement
			$("#portfolio-showcase video").each(function () {
				this.pause();
			});
			$(".portfolio-marquee-row").addClass("is-paused");

			// Lock page scroll
			$("body").addClass("video-dialog-active");

			var $dialog = $("#portfolio-video-dialog");
			var dialogVideo = document.getElementById("portfolio-dialog-video");

			// Configure dialog player aspect ratio format
			$dialog.attr("data-format", project.format);
			$dialog.removeAttr("hidden");

			// Play selected video with AUDIO ENABLED initialized from direct interaction
			dialogVideo.pause();
			dialogVideo.src = project.videoSrc;
			dialogVideo.currentTime = 0;
			dialogVideo.muted = false; // AUDIO ENABLED
			dialogVideo.volume = 1.0;

			// Force reflow and open dialog
			$dialog[0].offsetHeight;
			$dialog.addClass("is-open");

			var playPromise = dialogVideo.play();
			if (playPromise !== undefined) {
				playPromise.catch(function (error) {
					console.warn("Autoplay with audio blocked:", error);
					// Fallback to muted playback if browser gesture policy restricts audio
					dialogVideo.muted = true;
					dialogVideo.play();
				});
			}

			// Focus close button for accessibility
			setTimeout(function () {
				$dialog.find(".video-dialog-close").focus();
			}, 120);
		}

		function closeVideoDialog() {
			var $dialog = $("#portfolio-video-dialog");
			if (!$dialog.hasClass("is-open")) return;

			var dialogVideo = document.getElementById("portfolio-dialog-video");
			if (dialogVideo) {
				dialogVideo.pause();
				dialogVideo.muted = true;
				dialogVideo.removeAttribute("src");
				dialogVideo.load();
			}

			$dialog.removeClass("is-open");
			$("body").removeClass("video-dialog-active");

			setTimeout(function () {
				$dialog.attr("hidden", true);
				$dialog.removeAttr("data-format");
			}, 300);

			if (activeTriggerCard && activeTriggerCard.length) {
				try {
					activeTriggerCard.focus();
				} catch (err) {}
			}

			// Resume portfolio gallery movement and autoplay after a short delay
			setTimeout(function () {
				if (!$("#portfolio-video-dialog").hasClass("is-open")) {
					bulkPlayVideos($("#portfolio-showcase"));
					$(".portfolio-marquee-row").removeClass("is-paused");
				}
			}, 400);
		}

		// Project click/keypress handler to open dialog
		var hasDragged = false;

		$("#portfolio-showcase")
			.on("click", ".portfolio-card", function (e) {
				if (hasDragged) {
					hasDragged = false;
					return;
				}
				var cardId = $(this).attr("data-id");
				openVideoDialog(cardId, $(this));
			})
			.on("keydown", ".portfolio-card", function (e) {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					var cardId = $(this).attr("data-id");
					openVideoDialog(cardId, $(this));
				}
			});

		// Dialog close handlers
		$("#portfolio-video-dialog")
			.on("click", ".video-dialog-close", function (e) {
				e.preventDefault();
				e.stopPropagation();
				closeVideoDialog();
			})
			.on("click", function (e) {
				// Prevent close when clicking video or its controls
				if ($(e.target).closest(".video-dialog-media-wrap").length) {
					return;
				}
				if ($(e.target).closest(".video-dialog-close").length) {
					return;
				}
				closeVideoDialog();
			})
			.on("keydown", function (e) {
				// Focus trap within modal
				if (e.key === "Tab") {
					var focusables = $(this).find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video[controls]');
					var first = focusables.first()[0];
					var last = focusables.last()[0];

					if (e.shiftKey && document.activeElement === first) {
						e.preventDefault();
						last.focus();
					} else if (!e.shiftKey && document.activeElement === last) {
						e.preventDefault();
						first.focus();
					}
				}
			});

		$(document).on("keydown", function (e) {
			if (e.key === "Escape" || e.keyCode === 27) {
				if ($("#portfolio-video-dialog").hasClass("is-open")) {
					closeVideoDialog();
				}
			}
		});

		// Mouse and touch drag interaction for smooth horizontal movement
		$(".portfolio-marquee-row").each(function () {
			var $row = $(this);
			var isDown = false;
			var startX = 0;
			var startY = 0;

			$row.on("pointerdown", function (e) {
				if (e.pointerType === "mouse" && e.button !== 0) return;
				isDown = true;
				hasDragged = false;
				startX = e.clientX;
				startY = e.clientY;
				$row.addClass("is-paused is-dragging");
			});

			$row.on("pointermove", function (e) {
				if (!isDown) return;
				if (Math.abs(e.clientX - startX) > 8 || Math.abs(e.clientY - startY) > 8) {
					hasDragged = true;
				}
			});

			$(window).on("pointerup pointercancel", function () {
				if (isDown) {
					isDown = false;
					$row.removeClass("is-dragging");
					setTimeout(function () {
						if (!$row.is(":hover") && !$("#portfolio-video-dialog").hasClass("is-open")) {
							$row.removeClass("is-paused");
						}
					}, 600);
				}
			});
		});

		/*------------------------------------------------------
  	/ Testimonial Carousel
  	/------------------------------------------------------*/
		$(".testimonial-carousel.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});

		/*------------------------------------------------------
  	/  Nice Select
  	/------------------------------------------------------*/
		$("select").niceSelect();
	});

	$(window).on("load", function () {
		/*------------------------------------------------------
  	/  WoW Js
  	/------------------------------------------------------*/
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		/*------------------------------------------------------
  	/  Preloader
  	/------------------------------------------------------*/
		const svg = document.getElementById("preloaderSvg");
		const svgText = document.querySelector(
			".hero-section .intro_text svg text"
		);
		const tl = gsap.timeline({
			onComplete: startStrokeAnimation,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		function startStrokeAnimation() {
			// Add a class or directly apply styles to trigger the stroke animation
			svgText.classList.add("animate-stroke");
		}



		/*------------------------------------------------------
  	/  Portfolio Filter BG Color
  	/------------------------------------------------------*/
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);

			$(window).on("resize", function () {
				var activeBtn = $(".portfolio-filter .button-group button.active");
				activeFilterBtn(active_bg, activeBtn);
				
			});
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.siblings().removeClass("active");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		/*------------------------------------------------------
  	/  Funfact
  	/------------------------------------------------------*/
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}

		// Form Validation
		/* contact form */
		if ($("#contact-form").length > 0) {
			$("#contact-form").validate({
				rules: {
					conName: "required",
					conEmail: {
						required: true,
						email: true,
					},
				},

				messages: {
					conName: "Enter your name.",
					conEmail: "Enter a valid email.",
				},
				submitHandler: function (form) {
					var $btn = $(form).find('button[type="submit"]');
					$btn.prop("disabled", true).text("Sending...");

					// start ajax request
					$.ajax({
						type: "POST",
						url: "https://api.web3forms.com/submit",
						data: $(form).serialize(),
						dataType: "json",
						cache: false,
						success: function (response) {
							if (response && response.success) {
								$("#message_sent").modal("show");
								$(form).trigger("reset");
							} else {
								$("#message_fail").modal("show");
							}
						},
						error: function () {
							$("#message_fail").modal("show");
						},
						complete: function () {
							$btn.prop("disabled", false).text("Send Message");
						},
					});
					return false;
				},
			});
		}
		/* !contact form */
	});
})(jQuery);
