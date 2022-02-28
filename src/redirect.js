chrome.webRequest.onBeforeRequest.addListener((details) => {
  if (!details.url.match(/^https\:\/\/www.youtube.com\/shorts\/.{11}$/)) return;

  let videoID = details.url.slice(-11);
  return { redirectUrl: `https://www.youtube.com/watch?v=${videoID}` };
}, { urls: ["<all_urls>"] }, ["blocking"]);
