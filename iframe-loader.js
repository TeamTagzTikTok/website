window.onload = function() {
  var iframeContainer = document.getElementById('iframe-container');
  var iframe = document.createElement('iframe');
  iframe.src = "https://frankietry0.wixsite.com/cloudysoe-vm";
  iframe.style = "width:100%; height:100vh; border:none; position:absolute; top:-50px;";
  iframeContainer.appendChild(iframe);
};
