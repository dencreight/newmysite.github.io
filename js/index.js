$(document).ready(function () {
    $('.wrapper').slideDown('slow');

    function Counter() {
        this.currentCount = 1;
        this.run = function () {
            this.currentCount++;
        }
    }
    var butterCounter = new Counter();
    $('#butter').click(function () {
        $('.nav').toggleClass(' click');
        butterCounter.run();
        if (butterCounter.currentCount % 2 == 0) $(this).text('Close');
        else $(this).text('Open');

    })

    var tabBtn = document.getElementsByClassName('tab__btn');
    var tabTxt = document.getElementsByClassName('tab__txt');

    for (let i = 0; i <= tabBtn.length; i++) {
        if (tabBtn[i] == undefined || tabBtn[i].nodeName == '#text') continue;
        tabBtn[i].target = tabBtn[i].dataset.target;
        tabBtn[i].onclick = function () {
            var self = this;


            for (let i = 0; i <= tabBtn.length; i++) {
                if (tabBtn[i] == undefined || tabBtn[i].nodeName == '#text') continue;
                if (tabBtn[i] == this) $(this).addClass('active');
                else $(tabBtn[i]).removeClass('active')
            }

            for (let j = 0; j <= tabTxt.length; j++) {
                if (tabTxt[j] == undefined || tabTxt[j].nodeName == '#text') continue;
                if (tabTxt[j].dataset.order == self.target) {
                    $(tabTxt[j]).slideDown('fast');
                } else $(tabTxt[j]).slideUp('fast');
            }
        }
    }

    var dropdowns = document.getElementsByClassName('dropdown');

    for (let i = 0; i <= dropdowns.length; i++) {
        if (dropdowns[i] == undefined || dropdowns[i].nodeName == '#text') continue;
        // var localDropdownCounter0 = new Counter();
        dropdowns[i].localDropdownCounter = new Counter();
        $(dropdowns[i]).click(function () {

            this.localDropdownCounter.run();
            var th = this.dataset.order;
            console.log(th);
            var id = '#slide' + th;
            $(id).slideToggle("fast", function () {
                console.log('true');
            });

            if (this.localDropdownCounter.currentCount % 2 == 0) $(this).css('transform', 'rotateZ(180deg)');
            else $(this).css('transform', 'rotateZ(0deg)');
        })
    }
})