(function () {
    var removeFunc, qc, qs, qb;

    removeFunc = function () {
        this.parentNode.removeChild(this);
    };

    qc = document.createElement('link');
    qc.href = chrome.extension.getURL('css/qunit.css');
    qc.rel = 'stylesheet';
    qc.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(qc);

    qs = document.createElement('script');
    qs.src = chrome.extension.getURL('js/lib/qunit.js');
    qs.onload = function () {
        var t1 = document.createElement('script');
        t1.src = chrome.extension.getURL('js/tests/test.js');
        t1.onload = removeFunc;
        (document.head || document.documentElement).appendChild(t1);
    };
    (document.head || document.documentElement).appendChild(qs);

    qb = document.createElement('div');
    qb.id = 'qunit';
    document.body.appendChild(qb);
}());
