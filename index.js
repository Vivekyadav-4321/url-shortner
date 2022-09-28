

function noinput(){


    document.getElementById("inputfield").value = ""
}





function copygerneatedlink() {

    var shorturl = document.getElementById("generatedlinkspan").innerText


navigator.clipboard.writeText(shorturl)


    document.getElementById("generatedlinkcopybutton").classList.remove("fa-copy")
    document.getElementById("generatedlinkcopybutton").classList.add("fa-check")


    setTimeout(() => {
        document.getElementById("generatedlinkcopybutton").classList.remove("fa-check")
        document.getElementById("generatedlinkcopybutton").classList.add("fa-copy")
    }, 3000);

}

function whatsappshare() {
    var shorturl = document.getElementById("generatedlinkspan").innerText

    var url = `https://wa.me/?text=Link:%20${shorturl}`
    window.open(url, '_blank');
}

function facebookshare() {
    var shorturl = document.getElementById("generatedlinkspan").innerText

    var url = `https://www.facebook.com/sharer/sharer.php?u=${shorturl}`
    window.open(url, '_blank');
}

function twittershare() {
    var shorturl = document.getElementById("generatedlinkspan").innerText

    var url = `https://twitter.com/intent/tweet?text=Link%20:%20${shorturl}`
    window.open(url, '_blank');
}

function redditshre() {
    var shorturl = document.getElementById("generatedlinkspan").innerText

    var url = `  https://www.reddit.com/submit?title=Link:&url=${shorturl}`
    window.open(url, '_blank');
}

function pasteurl() {
    navigator.clipboard.readText().then((copiedtext) => {
document.getElementById("inputfield").value = copiedtext

var userinputlink = document.getElementById("inputfield").value
if(userinputlink.includes("http") && userinputlink.includes(".") && userinputlink.includes(":") && userinputlink.includes("//") ){


socket.emit("userinputlink", userinputlink)

l




}


    })
}

function sharecopy() {
    navigator.clipboard.writeText(`Check out this amazing tool ${window.location.href}`)

    document.getElementById("copylink").classList.remove("fa-link")
    document.getElementById("copylink").classList.add("fa-check")

    setInterval(() => {
        document.getElementById("copylink").classList.remove("fa-check")
        document.getElementById("copylink").classList.add("fa-link")
    }, 6000);
}








