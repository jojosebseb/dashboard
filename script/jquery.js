$(document).ready(function(){
    var panelMod = $('.panel-module');
    var panel = $('.panel');
    var panelAddBtn = $('.panel-add-btn');
    var moduleIndex = 1;
    var exMod = $('.extended-module');
    var checkbox = $('.checkbox');
    var checkboxHandle = $('.checkbox-handle');

    panelAddBtn.on('click', function(){
        $(this).parent().append('<div class="panel-module">Module '+moduleIndex+'</div>');
        moduleIndex++;
        var panelMod = $('.panel-module');
    })


    $('#navbarExtended > .flex').on('mousemove', function(event){
        var Xm = event.pageX;
        var Min = Xm - (1000 / 2) - 43;
        $('.wave-hover').css({
            left: Min +'px',
            transition: 'none'
        })
    })

    $('#navbarExtended > .flex').on('mouseleave', function(){
        var total = exMod.length;
        exMod.each(function(i){
            if ($(this).hasClass('active')) {
                $('.wave-hover').css({
                    left: (i*166)+'px',
                    transition: 'all .8s cubic-bezier(0.73, -0.18, 0.22, 1.04)'
                })
            }
        })
    })

    //no-img letter navbar
        var userName = $('.navbar-username').html();
        var fLetter = userName.substr(0,1);
        var lLetter = "";
        if(userName.indexOf(" ")>0) lLetter = userName.substr(userName.indexOf(" ")+1, 1);
        $('.no-img').html(fLetter + lLetter);
        //alphabet color
            var classColor = fLetter.toLowerCase();
            $('.no-img').addClass(classColor);
        //alphabet color
    //no-img letter navbar

    //no-img letter msg

    var userNameM = "";
    var fLetterM = "";
    var lLetterM = "";
    var classColorM = "";

        $('.msg-username').each(function(){
            userNameM = $(this).html();
            fLetterM = userNameM.substr(0,1);
            lLetterM = "";
            if(userNameM.indexOf(" ")>0) lLetterM = userNameM.substr(userNameM.indexOf(" ")+1, 1);
            $(this).parent().find('.no-img-msg').html(fLetterM + lLetterM);
            classColorM = fLetterM.toLowerCase();
            $(this).parent().find('.no-img-msg').addClass(classColorM);
        })
    //no-img letter msg

    //checkbox
        $('#msgList').on('click', '.checkbox', function(){
            checkboxHandle.parent().parent().removeClass('marked');
            $(this).parent().parent().toggleClass('marked');

        })
    //checkbox

    //checkboxHandle
        $('#msgList').on('click', '.checkbox-handle', function(){
            checkbox.parent().parent().toggleClass('marked');
            $(this).parent().parent().toggleClass('marked');
        })
    //checkboxHandle

    //msg-detailHandle
    $('#msgList').on('click', '.msg-divider', function(){
        $('#msgDetail').addClass('active');
        $('#historyReply').addClass('active');
        $('#msgList').addClass('hide');
    })
    $('#msgDetail').on('click', '.msgTitle', function(){
        $('#msgDetail').removeClass('active');
        $('.tall').css({
            height: '80px'
        })
        $('#historyReply').removeClass('active');
        $('#msgList').removeClass('hide');
    })
    $('#msgFolders').on('click', '#inboxHandle', function(){
        $('#msgDetail').removeClass('active');
        $('.tall').css({
            height: '80px'
        })
        $('#historyReply').removeClass('active');
        $('#msgList').removeClass('hide');
    })
    //msg-detailHandle

    //scroll-handle
    var wtf    = $('#msgDetailHistory');
    var wtfHeight = wtf[0].scrollHeight;
    wtf.scrollTop(wtfHeight);
    //scroll-handle

    // $('#msgDetailHistory').mCustomScrollBar();
    // $(window).mCustomScrollbar({
    //        theme:"dark",
    //    });
     $("#msgDetailHistory").mCustomScrollbar({
            theme:"dark",
            setTop: wtfHeight+'px',
            scrollInertia: 200,
        });






})
