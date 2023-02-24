const linkBox = document.querySelector(".linkBox");
const inputText = document.getElementById("inputText");

linkBox.innerHTML = "";

// Create Video
const addVideo = () => {

  let url = inputText.value;
  let video = '';

  if (url == '' || !url.startsWith("https")) {
    return;
  }

  if (url.startsWith('https://www.youtube.com/watch?v=')) {
    video = url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
  }

  if (url.startsWith('https://youtu.be/')) {
    video = url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
  }

  if (url.startsWith('https://www.youtube.com/embed/')) {
    video = url
  }


  const iframe = document.createElement('iframe');

  iframe.src = video;
  iframe.width = 360;
  iframe.height = 215;
  iframe.title = "Play Youtubbe";
  iframe.frameborder = 0;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  linkBox.appendChild(iframe);

  // Create button delete
  const btn = document.createElement("button");
  btn.innerHTML = "<i class='fas fa-trash'></i>";

  linkBox.appendChild(btn);

  btn.onclick = () => {
    linkBox.removeChild(iframe);
    linkBox.removeChild(btn);
  }
}