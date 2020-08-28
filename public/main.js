console.log("hi");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.head.appendChild(style);
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const xmlDom = request.responseXML;
      xmlText = xmlDom.getElementsByTagName("warning")[0].textContent;
      console.log(xmlText);
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const obj = JSON.parse(request.response);
      const h2 = document.querySelector("h2");
      h2.innerText += obj.name;
      console.log(obj.name);
    }
  };
  request.send();
};
let n = 2;
getNextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const arr = JSON.parse(request.response);
      arr.map((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        list.appendChild(li);
      });
    }
  };
  request.send();
  n += 1;
};
