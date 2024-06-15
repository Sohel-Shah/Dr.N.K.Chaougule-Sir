// 




// script.js 
function changeReadMore() { 
	const mycontent = 
		document.getElementById('mybox1id'); 
	const mybutton = 
		document.getElementById('mybuttonid'); 
	const span1 = document.getElementById("span1") 

	if (mycontent.style.display === 'none'
		|| mycontent.style.display === '') { 
		mycontent.style.display = 'inline'; 
		span1.style.display = "none"; 
		mybutton.textContent = 'Read Less'; 
	} else { 
		mycontent.style.display = 'none'; 
		mybutton.textContent = 'Read More'; 
		span1.style.display = "inline"; 
	} 
} 
//workshop
function toggleReadMore() {
	const moreText = document.getElementById("moreText","moreText2");
	const btnText = document.getElementById("readMoreLessBtn","readMoreLessBtn2");
  
	if (moreText.style.display === "none" || moreText.style.display === "") {
		moreText.style.display = "inline";
		btnText.innerHTML = "Read Less";
	} else {
		moreText.style.display = "none";
		btnText.innerHTML = "Read More";
	}
  }
  
