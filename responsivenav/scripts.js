const selectelement= function(s){
	document.querySelector(s);
	
};

selectelement('.toggle-nav').addEventListener('click',()=>{
	selectelement('.nav-list-toggle').classList.add('is-active');
})

selectelement('#close').addEventListener('click',()=>{
	selectelement('.nav-list-toggle').classList.remove('is-active');
})