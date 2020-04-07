document.addEventListener('scroll',function(){
	const header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 0);
});

const toggleDiv= document.querySelector('.toggle');
const ul= document.querySelector('header ul');

toggleDiv.addEventListener('click', function(){
	const header = document.querySelector('header');
	header.classList.toggle('active');
});

ul.addEventListener('click',function(e){
	if (e.target.parentElement.parentElement.classList.contains('nav-items')) {
		const header = document.querySelector('header');
		header.classList.toggle('active');
	}
})
