

document.querySelector('.nasaVideo').style.display = 'none'
document.querySelector('.nasaImage').style.display = 'none'


document.querySelector('.this').addEventListener('click', getFetch)
function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

fetch(`https://api.nasa.gov/planetary/apod?api_key=eoILEWXdS1q9v63gjvJo8DXrtFrtlPKsg3S1p7pV&date=${choice}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if(data.media_type === 'image'){
        document.querySelector('.nasaImage').src = data.hdurl
        document.querySelector('.nasaImage').style.display = ''
        document.querySelector('.nasaVideo').style.display = 'none'
      }else if(data.media_type === 'video'){
        document.querySelector('.nasaVideo').src = data.url
        document.querySelector('.nasaVideo').style.display = ''
        document.querySelector('.nasaImage').style.display = 'none'
      }
      document.querySelector('.explanation').innerText = data.explanation
      document.querySelector('.title').innerText = data.title


    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }



	// Breakpoints.
		breakpoints({
			xlarge:   [ '1367px',  '1680px' ],
			large:    [ '981px',   '1366px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			window.setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// 	// Nav Panel.

// 		// Button.
// 			$(
// 				'<div id="navButton">' +
// 					'<a href="#navPanel" class="toggle"></a>' +
// 				'</div>'
// 			)
// 				.appendTo($body);

// 		// Panel.
// 			$(
// 				'<div id="navPanel">' +
// 					'<nav>' +
// 						$('#nav').navList() +
// 					'</nav>' +
// 				'</div>'
// 			)
// 				.appendTo($body)
// 				.panel({
// 					delay: 500,
// 					hideOnClick: true,
// 					resetScroll: true,
// 					resetForms: true,
// 					side: 'top',
// 					target: $body,
// 					visibleClass: 'navPanel-visible'
// 				});

// 	// Parallax background.

// 		// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
// 			if (browser.name == 'ie'
// 			||	browser.name == 'edge'
// 			||	browser.mobile)
// 				settings.parallax = false;

// 		if (settings.parallax) {

// 			var $dummy = $(), $bg;

// 			$window
// 				.on('scroll.locus_parallax', function() {

// 					// Adjust background position.
// 					// Note: If you've removed the background overlay image, remove the "top left, " bit.
// 						$bg.css('background-position', 'top left, center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

// 				})
// 				.on('resize.locus_parallax', function() {

// 					// If we're in a situation where we need to temporarily disable parallax, do so.
// 					// Note: If you've removed the background overlay image, remove the "top left, " bit.
// 						if (breakpoints.active('<=medium')) {

// 							$body.css('background-position', 'top left, top center');
// 							$bg = $dummy;

// 						}

// 					// Otherwise, continue as normal.
// 						else
// 							$bg = $body;

// 					// Trigger scroll handler.
// 						$window.triggerHandler('scroll.locus_parallax');

// 				})
// 				.trigger('resize.locus_parallax');

// 		}

// (jQuery);