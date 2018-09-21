$(function () {
   $('.ltl_search a').on('tap',function () {
       var key=$.trim($('input').val());
       if(!key){
       //mui 的信息提示框
           mui.toast('请输入关键字');
           return false;
       }else{
           location.href='searchList.html?key='+key+'';
       }
   });
    
    
    
    
//搜索历史


    /*1.使用json数据存储搜索历史记录*/
    /*2.预设一个key   historyList */
    /*3.数据格式列表 存的是json格式的数组*/
    /*4. [电脑，手机，。。。。]*/

    /*1.默认根据历史记录渲染历史列表*/
    var historyListJson = localStorage.getItem('historyList') || '[]';
    var historyListArr = JSON.parse(historyListJson);
    /*获取到了数组格式的数据*/
    var render = function () {
        /*$.each(function(i,item){}) for() for in */
        /* forEach 遍历函数  只能数组调用  回到函数（所有对应的值，索引）*/
        var html = '';
        historyListArr.forEach(function (item,i) {
            html += '<li><span>'+item+'</span><a data-index="'+i+'" href="javascript:;">删除</a></li>';
        });
        html = html || '<li>没有搜索记录</li>';
        $('ul').html(html);
    };
    render();

    /*2.点击搜索的时候更新历史记录渲染列表*/
    $('.ltl_search a').on('click',function () {
        var key = $.trim($('input').val());
        if(!key){
            alert('请输入搜索关键字');
            return false;
        }
        /*追加一条历史*/
        historyListArr.push(key);
        /*保存*/
        localStorage.setItem('historyList',JSON.stringify(historyListArr));
        /*渲染一次*/
        render();
        $('input').val('');
    });

    /*3.点击删除的时候删除对应的历史记录渲染列表*/
    $('ul').on('click','a',function () {
        var index = $(this).data('index');
        /*删除*/
        historyListArr.splice(index,1);
        /*保存*/
        localStorage.setItem('historyList',JSON.stringify(historyListArr));
        /*渲染一次*/
        render();
    });
    $('ul').on('click','span',function () {
        var key=$.trim($(this).text());
        location.href='searchList.html?key='+key+'';
    });

    /*4.点击清空的时候清空历史记录渲染列表*/
    $('.clearAll').on('click',function () {
        /*清空*/
        historyListArr = [];
        /*慎用  清空网上的所有本地存储*/
        //localStorage.clear();
        //localStorage.removeItem('historyList');
        localStorage.setItem('historyList','');
        render();
    });




});
    
    
    

