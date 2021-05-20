	
	
	
	
	
	
	
	const transitionEl = document.querySelector('.transition'); //class name
	const anchors = document.querySelectorAll('a');

		window.onload = () =>{
			setTimeout(()=>{
				transitionEl.classList.remove('is-active')
			},500);

			for(let i=0; i<anchors.length; i++){//loop through anchors
				const anchor = anchors[i];

				anchor.addEventListener('click', e=>{
					e.preventDefault();
					let target = e.target.href;

					transitionEl.classList.add('is-active'); //add the overlay on top of the page

					setTimeout(()=>{
						window.location.href = target;
					
					}, 500);
				})
			}
		}