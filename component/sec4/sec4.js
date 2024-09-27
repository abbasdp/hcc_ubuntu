
let listOf = [
    {extraIMG:"../img/db.png", name:"دانیال", nikname:"بهزادی", datauser:"امیرعماد میرمیرانی (زادهٔ ۲۵ دی ۱۳۵۶) که با نام مستعار جادی شناخته می‌شود، برنامه‌نویس ، هکر ، گیک ، فعال حوزهٔ تکنولوژی‌های جدید و جامعهٔ نرم‌افزار آزاد و متن‌باز و وبلاگ‌نویس اهل ایران است. او مجری پادکستی با عنوان «رادیو گیک» است که بعداً نامش به «رادیو جادی» تغییر یافت.",titleera:"از این اوبونتو تا اون اوبونتو", era:"آپدیت جدید اوبنتو و تغییرات آن",miniimg:"../img/mini-r2.png"},
    {extraIMG:"../img/mmd.png", name:"محمد ", nikname:"مزارعی", datauser:"من حدود ۲۰ سال است که در حوزه امبدد کار می‌کنم از پیاده سازی انواع نرم افزار به شکل bare metal تا سیستم عامل‌های انحصاری و بلادرنگ و در انتها هم امبدد لینوکس همه در گستره کارهایی است که انجام دادم حدود شش سال پیش با هدف به اشتراک گذاری تجربه ها و دانسته هایم وبسایت sisoog.com را با همکاری یکی از دوستانم ایجاد کردیم که خوشبختانه مورد استقبال فعالان این حوزه قرار گرفته است و یکی از معدود سایت های فعال در این حوزه است و هم اکنون با وجود ۴ زیرمجموعه دیگر به فعالیت خود ادامه می دهد  ",titleera:"gps spoofing ", era:"آپدیت جدید اوبنتو و تغییرات آن",miniimg:"../img/mini-r3.png"},
    {extraIMG:"../img/farooq.png", name:"فاروق", nikname:"کریمی زاده", datauser:"برنامه‌نویس، پژوهش‌گر رایانش تکاملی، گیمر و بازی‌ساز ماین‌تست، مشارکت‌کنندهٔ ویکی‌پدیای فارسی و انگلیسی",titleera:"کامپیوتر های تک برد", era:" رزبری پای، نانو پای، لیبره کامپیوتر، ESP32 و ارونج‌پای",miniimg:"../img/mini-r4.png"},
    {extraIMG:"../img/ex-jadi.png", name:"جادی", nikname:"هکر خندون:)", datauser:"امیرعماد میرمیرانی (زادهٔ ۲۵ دی ۱۳۵۶) که با نام مستعار جادی شناخته می‌شود، برنامه‌نویس ، هکر ، گیک ، فعال حوزهٔ تکنولوژی‌های جدید و جامعهٔ نرم‌افزار آزاد و متن‌باز و وبلاگ‌نویس اهل ایران است. او مجری پادکستی با عنوان «رادیو گیک» است که بعداً نامش به «رادیو جادی» تغییر یافت.",titleera:"از این اوبونتو تا اون اوبونتو", era:"آپدیت جدید اوبنتو و تغییرات آن",miniimg:"../img/mini-r1.png"},
]


const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
<link rel="stylesheet" href="../css/all.min.css">
<link rel="stylesheet" href="../css/menu.css">

  <div class="container" >
    

    <div class="slider-container">
        <div id="slider" class="slider tras justify-center">

            
          
        </div>
    </div>
    
    <div class="indicators flex  gap-5 mt-36  justify-center p-7">

        <button class="prev text-3xl text-white font-bold " onclick="prevSlide()">&#10094;</button> 
        <div id="btn-cont" class="flex justify-center gap-5">
      
        </div>
        <button class="next text-3xl text-white font-bold ">&#10095;</button>
    </div>
</div>



`
class sec4 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

    
this.className="m-auto"



  


                listOf.forEach((data)=>{

                    let btnimg=`   <img class="thumbnail  " src="${data.miniimg}" alt="Thumbnail 1" onclick="currentSlide(1)">`

                    let them = `  <div class="slide hidden  w-full">
                    <div class="content flex flex-col md:flex-row   ">
    
                        <div class="ira order-2 md:order-1 md:w-4/12 flex flex-col p-5 gap-9 justify-center ">
                            <div class="flex md:flex-col gap-5 items-center md:items-start">
                                <p class="text-2xl text-white jadi font-black text-6xl ">${data.name}</p>
                                <p class="text-2xl  text-white font-light text-4xl   ">${data.nikname}</p>
                            </div>
                            <p class="text-2xl font-normal text-[#c8c8c8] ">${data.datauser}</p>
                        </div>
    
    
                        <div class="img p-4 order-1 md:order-2 md:w-4/12">
                            <img src="${data.extraIMG}" alt="">
                        </div>
    
    
                        <div class="data order-3 content-center   md:order-3 md:w-4/12">
                            <p class="text-2xl font-black  p-4 bg-white text-black text rounded-tl-3xl rounded-br-3xl rounded-tr-3xl text-3xl   ">${data.titleera} </p>
                            <p class=" p-4 text-2xl font-semibold text-black ">${data.era}</p>
                        </div>
    
    
                    </div>
                    </div>`


                    this.shadowRoot.querySelector("#slider") .insertAdjacentHTML("afterbegin",them)
                    this.shadowRoot.querySelector("#btn-cont") .insertAdjacentHTML("afterbegin",btnimg)
                    
                })

                let slideIndex = 0;

                const slides = this.shadowRoot.querySelectorAll('.slide');
                const thumbnails = this.shadowRoot.querySelectorAll('.thumbnail');

                function showSlides(n) {

                    // console.log('slideIndex before adjustment:', n);  // لاگ قبل از تنظیمات
                    // console.log('Total slides:', slides.length);  // تعداد کل اسلایدها
                

                
                
                    // کنترل اینکه اگر اسلاید انتخابی از تعداد کل بیشتر یا کمتر باشد
                    if (n >= slides.length) {
                        slideIndex = 0;
                        console.log('slideIndex set to 0 (looping to first slide)');
                    }
                    if (n < 0) {
                        slideIndex = slides.length - 1;
                        console.log('slideIndex set to last slide:', slideIndex);
                    }
                
                    // حذف کلاس "active" از همه اسلایدها
                    console.log('Removing active class from all slides');
                    slides.forEach((slide, index) => {
                        console.log(`Slide ${index}: removing active class`);
                        slide.classList.add('hidden');
                    });
                
                    // حذف کلاس "active-thumbnail" از همه تصاویر کوچک
                    console.log('Removing active-thumbnail class from all thumbnails');
                    thumbnails.forEach((thumbnail, index) => {
                        console.log(`Thumbnail ${index}: removing active-thumbnail class`);
                        thumbnail.classList.remove('active-thumbnail');
                    });
                
                    // افزودن کلاس "active" به اسلاید انتخاب‌شده
                    console.log('Adding active class to slide:', slideIndex);
                    slides[slideIndex].classList.remove('hidden');
                
                    // افزودن کلاس "active-thumbnail" به تصویر کوچک انتخاب‌شده
                    console.log('Adding active-thumbnail class to thumbnail:', slideIndex);
                    thumbnails[slideIndex].classList.add('active-thumbnail');
                }
                
        
                
                
                
                showSlides()

                function nextSlide() {
                    slideIndex++;
                    showSlides(slideIndex);
                }
                
                function prevSlide() {
                    slideIndex--;
                    showSlides(slideIndex);
                }
                
                function currentSlide(n) {
                    slideIndex = n - 1;
                    showSlides(slideIndex);
                }


                thumbnails.forEach((thumbnail, index) => {
                    thumbnail.addEventListener('click', () => {
                        slideIndex = index;
                        showSlides(slideIndex);
                    });
                });
                
                this.shadowRoot.querySelector(".next").addEventListener("click",()=>{
              
                        nextSlide(slideIndex);
                    

                })
      
  }

  
  
}

export {
  sec4
}