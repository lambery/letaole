window.ltl={};
ltl.getParamByUrl=function () {
    var params=[];
    var search=location.search.replace('?','');

    if(search){
        var arr=search.split('&');
        arr.forEach(function (item,i) {
            var itemArr=item.split('=');
            params[itemArr[0]]=itemArr[1];
        });
    }
    return params;
};

//需要登陆的ajax请求
ltl.loginUrl='/m/user/login.html';
ltl.cartUrl='/m/user/cart.html';


ltl.loginAjax=function (params) {
//params==>{}
    $.ajax({
        type: params.type || 'get',
        url: params.url || '#',
        data: params.data || '',
        dataType: params.dataType || 'json',
        success:function (data) {
            //未登陆处理error400
            if(data.error == 400){
                location.href = ltl.loginUrl + '?returnUrl=' + location.href;
                return false;
            }else{
                params.success && params.success(data);
            }

        },
        error:function () {
            mui.toast('服务器繁忙');
        }

    })
};