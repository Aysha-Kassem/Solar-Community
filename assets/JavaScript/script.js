// open list of smaller nav 
document.getElementById("open").onclick =  () => {
    document.getElementById("list").style.display = "grid";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

// close list of smaller nav 
document.getElementById("close").onclick =  () => {
    document.getElementById("list").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}

// on click any img > full screen
document.querySelectorAll("img").forEach(imag => {
    imag.onclick = () =>{
        const fullscreen = document.createElement("img");
        fullscreen.src = imag.src;
        document.body.appendChild(fullscreen);
        fullscreen.classList.add("fullscreen");
        console.log(fullscreen);

        fullscreen.onclick = () => {
            fullscreen.remove();
        }
        
    }
})
