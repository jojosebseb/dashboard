$(document).ready(function(){
    var panelMod = $('.panel-module');
    var panel = $('.panel');
    var panelAddBtn = $('.panel-add-btn');
    var moduleIndex = 1;
    var exMod = $('.extended-module');

    panelAddBtn.on('click', function(){
        $(this).parent().append('<div class="panel-module">Module '+moduleIndex+'</div>');
        // $(this).parent().append("div").addClass("panel-module");
        moduleIndex++;
        var panelMod = $('.panel-module');
    })


    // exMod.on('click', function(){
    //     exMod.removeClass('active');
    //     $(this).addClass('active');
    // })

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

    var userName = $('.navbar-username').html();
    var fLetter = userName.substr(0,1);
    var lLetter = "";
    if(userName.indexOf(" ")>0) lLetter = userName.substr(userName.indexOf(" ")+1, 1);

    $('.no-img').html(fLetter + lLetter);

    var classColor = fLetter.toLowerCase();
    $('.no-img').addClass(classColor);






})
