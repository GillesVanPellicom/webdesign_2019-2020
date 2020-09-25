let b = 0;
setInterval(() => {
    for (let i = 0; document.getElementsByTagName("td").length > i; i++) {
        document.getElementsByTagName("td")[i].innerHTML = i + b;
    }
    ++b;
}, 1000);