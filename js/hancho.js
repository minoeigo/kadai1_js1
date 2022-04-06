$(".cho").on("click", function () {
const random = Math.floor(Math.random() * 6) + 1;
console.log(random);
if(random == 1){
    console.log("1")
    $(".sai_img").attr('src', 'img/1.png');
    $("h1").text("半！あんたの負けや");
}else if(random == 2){
    console.log("2")
    $(".sai_img").attr('src', 'img/2.png');
    $("h1").text("丁！あんたの勝ちや");
}else if(random == 3){
    console.log("3")
    $(".sai_img").attr('src', 'img/3.png');
    $("h1").text("半！あんたの負けや");
}else if(random == 4){
    console.log("4")
    $(".sai_img").attr('src', 'img/4.png');
    $("h1").text("丁！あんたの勝ちや");
}else if(random == 5){
    console.log("5")
    $(".sai_img").attr('src', 'img/5.png');
    $("h1").text("半！あんたの負けや");
}else if(random == 6){
    console.log("6")
    $(".sai_img").attr('src', 'img/6.png');
    $("h1").text("丁！あんたの勝ちや");
}
});

$(".han").on("click", function () {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    if(random == 1){
        console.log("1")
        $(".sai_img").attr('src', 'img/1.png');
        $("h1").text("半！あんたの勝ちや");
    }else if(random == 2){
        console.log("2")
        $(".sai_img").attr('src', 'img/2.png');
        $("h1").text("丁！あんたの負けや");
    }else if(random == 3){
        console.log("3")
        $(".sai_img").attr('src', 'img/3.png');
        $("h1").text("半！あんたの勝ちや");
    }else if(random == 4){
        console.log("4")
        $(".sai_img").attr('src', 'img/4.png');
        $("h1").text("丁！あんたの負けや");
    }else if(random == 5){
        console.log("5")
        $(".sai_img").attr('src', 'img/5.png');
        $("h1").text("半！あんたの勝ちや");
    }else if(random == 6){
        console.log("6")
        $(".sai_img").attr('src', 'img/6.png');
        $("h1").text("丁！あんたの負けや");
    }
    });
/*
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      }; */