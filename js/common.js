window.onload = function () {
    if(localStorage.getItem('loading') === null || localStorage.getItem('loading') != "1"){
        //ローディング実行
        const hoge = document.getElementsByClassName(".a");
        hoge.style.width = "1400px";
        localStorage.setItem('loading',"1");
    }
};
