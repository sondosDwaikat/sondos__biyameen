
let start = 0;
const value = 15;
let start2 = 0;
const value2 = 50;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 5) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    const serviceItems = document.querySelectorAll('.F-one');
    serviceItems.forEach(item=>{
        if (window.scrollY  <= item.offsetTop+10*item.offsetTop) {
            item.style.animation = 'slideUp 1s ease forwards';
        }
    });

    const serviceItems2 = document.querySelectorAll('.F-two');
    serviceItems2.forEach(item=>{
        if (window.scrollY  <= item.offsetTop+10*item.offsetTop) {
            item.style.animation = 'slideUp 1.5s ease forwards';
        }
    });

    const serviceItems3 = document.querySelectorAll('.F-three');
    serviceItems3.forEach(item=>{
        if (window.scrollY  <= item.offsetTop+10*item.offsetTop) {
            item.style.animation = 'slideUp 2s ease forwards';
        }
    });

    const serviceItems4 = document.querySelectorAll('.F-four');
    serviceItems4.forEach(item=>{
        if (window.scrollY  <= item.offsetTop+10*item.offsetTop) {
            item.style.animation = 'slideUp 2.5s ease forwards';
        }
    });

    const image1 = document.querySelectorAll('.imgPosHigh .img1');
    image1.forEach(item=>{
        if (window.scrollY + window.innerHeight >= item.offsetTop) {
            item.style.animation = 'zoomIn 1.5s ease forwards';
        }
    });

    const image2 = document.querySelectorAll('.imgPosHigh .img2');
    image2.forEach(item=>{
        if (window.scrollY + window.innerHeight >= item.offsetTop) {
            item.style.animation = 'zoomIn 2s ease forwards';
        }
    });

    const image3 = document.querySelectorAll('.imgPosLow .img1');
    image3.forEach(item=>{
        if (window.scrollY + window.innerHeight >= item.offsetTop) {
            item.style.animation = 'zoomIn 2.5s ease forwards';
        }
    });

    const image4 = document.querySelectorAll('.imgPosLow .img2');
    image4.forEach(item=>{
        if (window.scrollY + window.innerHeight >= item.offsetTop) {
            item.style.animation = 'zoomIn 3s ease forwards';
        }
    });

    const numb = document.querySelectorAll('.ExpYears h3');
    numb.forEach(item => {
        if (window.scrollY + window.innerHeight >= item.offsetTop) { // شرط للتأكد من العد لم يتم مسبقًا
            function incrementNumber() {
                if (start < value) {
                    start++;
                    item.textContent = start;
                    setTimeout(incrementNumber, 400);
                } 
            }

            incrementNumber();
        }

      
    });

    const imagee = this.document.querySelectorAll(" .m1 ");
    imagee.forEach(item => {
      if(window.scrollY + window.innerHeight >= item.offsetTop){
        item.style.animation = 'slideUp2 0.8s ease forwards';
      }
    });

    const imagee2 = this.document.querySelectorAll(".Mas .m2 ");
    imagee2.forEach(item => {
      if(window.scrollY + window.innerHeight >= item.offsetTop){
        item.style.animation = 'slideUp2 1.2s ease forwards';
      }
    });

    const imagee3 = this.document.querySelectorAll(" .m3 ");
    imagee3.forEach(item => {
      if(window.scrollY + window.innerHeight >= item.offsetTop){
        item.style.animation = 'slideUp2 2s ease forwards';
      }
    });

    const imagee4 = this.document.querySelectorAll(" .m4 ");
    imagee4.forEach(item => {
      if(window.scrollY + window.innerHeight >= item.offsetTop){
        item.style.animation = 'slideUp2 2.2s ease forwards';
      }
    });

    const num = document.querySelectorAll('.PopularChef h3');
    num.forEach(item => {
        if (window.scrollY + window.innerHeight >= item.offsetTop ) { // شرط للتأكد من العد لم يتم مسبقًا
            function inc() {
                if (start2 < value2) {
                    start2++;
                    item.textContent = start2;
                    setTimeout(inc, 200);
                } 
            }
            inc();
        }
    });
});

document.querySelector(".final .inpt").addEventListener("input",function(){

    document.querySelector(".sendd").classList.add("textt");
});
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    on: {
        slideChange: function () {
            var index = swiper.activeIndex;
            updateActiveButton(index); // تحديث التبويب النشط
        }
    }
});

// تغيير الشريحة عندما يتم الضغط على زر التبويب
function clickk(index) {
    swiper.slideTo(index); // التبديل إلى الشريحة المعنية
    updateActiveButton(index); // تحديث التبويب النشط
}

// تحديث التبويب النشط
function updateActiveButton(index) {
    // إزالة الفئة النشطة من جميع الأزرار
    const buttons = document.querySelectorAll('.on');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // إضافة الفئة النشطة للزر المقابل للشريحة الحالية
    const activeButton = document.querySelectorAll('.on')[index];
    activeButton.classList.add('active');
}

// إضافة مستمعات للضغط على أزرار التبويب
document.querySelectorAll('.on').forEach((button, index) => {
    button.addEventListener('click', function() {
        clickk(index); // التبديل إلى الشريحة المقابلة عند الضغط
    });
});


  new tempusDominus.TempusDominus(document.getElementById('datetimepicker'), {
    display: {
      buttons: {
        today: true,
        clear: true,
        close: true
      },
      components: {
        calendar: true,
        date: true,
        month: true,
        year: true,
        decades: true,
        clock: true,
        hours: true,
        minutes: true,
        seconds: false,
        useTwentyfourHour: true
      }
    }
  });







  