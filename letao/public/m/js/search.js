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
   })
});
