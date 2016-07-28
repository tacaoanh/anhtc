//sự kiện form contact
$(document).ready(function () {
    $('#rd2').hide();
    $('#rd1').hide();
    $('#ckbox').hide(300);
    $('#form1').click(function () {
        if ($('#rdkhachhang:checked').val() != true) {
            $('#rd2').fadeIn(1000);
        }
        else {
            $('#rd2').hide();
            $('#rd1').hide();
        }
    });
    $('#form2').click(function () {
        if ($('#rdtuvan:checked').val() != true) {
            console.log("rd:" + $('#rdtuvan:checked').val());
            $('#rd1').fadeIn(1000);
            $('#ckbox').fadeIn(1000);
            $('#ck-online1').prop('checked',true);
        }
        else{
            $('#rd1').hide();
            
        }
    })
});