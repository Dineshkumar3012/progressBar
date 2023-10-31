let progressBar=document.getElementById("progress_bar");
let loadingBar=document.getElementById("loading");
let barWidth=0;

const download=()=>{
	barWidth++;
	progressBar.style.width= `${barWidth}%`;
	
	setTimeout(()=>{
		loadingBar.innerHTML=(barWidth===100)? `${barWidth}% completed `:`${barWidth}% progress`})
}

	setTimeout(()=>{
		let interId=setInterval(()=>{
			if(barWidth===100){
				clearInterval(interId)
			} 
			else{
				download()
			}
		},100)
	})