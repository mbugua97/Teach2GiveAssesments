/**
12. Write a JavaScript function to parse an URL.
*/

function parseURL(url) {
    var parsedURL = new URL(url);
  
    var protocol = parsedURL.protocol;
    var hostname = parsedURL.hostname;
    var port = parsedURL.port;
    var pathname = parsedURL.pathname;
    var search = parsedURL.search;
    var hash = parsedURL.hash;
  
    return {
      protocol: protocol,
      hostname: hostname,
      port: port,
      pathname: pathname,
      search: search,
      hash: hash
    };
  }
  