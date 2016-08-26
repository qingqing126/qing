alert(123)
require.config({
    paths: {
        haha: 'a',
        //通过网络去引用
        jquery:["http://libs.baidu.com/jquery/2.1.4/jquery"]
    }
})
require(["haha"]);
require(["js/b"]);
require(['jquery'], function($) {
    alert($().jquery);
});
