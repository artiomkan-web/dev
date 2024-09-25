'use strict'
window.addEventListener('DOMContentLoaded', ()=>{
    let header = document.querySelector('header'),
        headerBurger = document.querySelector('.burger'),
        headerMenu = header.querySelector('.header__menu')

    headerBurger.addEventListener('click', toggleMenu)
    function toggleMenu() {
        headerMenu.classList.toggle('_active')
        headerBurger.classList.toggle('_active')
        document.body.classList.toggle('_lock')
    }
    function closeMenu() {
        headerMenu.classList.remove('_active')
        headerBurger.classList.remove('_active')
        document.body.classList.remove('_lock')
    }
    document.addEventListener('click', (e) => {
        let withinBoundaries = e.composedPath().includes(headerMenu);

        if ( !withinBoundaries && !e.composedPath().includes(headerBurger)) {
            closeMenu()
        }
    })

    const timer = document.querySelector('.timer')
    if (timer) {
        let hours = timer.querySelector('.timer__hours'),
            minutes = timer.querySelector('.timer__minutes'),
            seconds = timer.querySelector('.timer__seconds')
        let data = {
            hours: 0,
            minutes: 30,
            seconds: 0
        }
        let secondsLeft = data.hours * 3600 + data.minutes * 60 + data.seconds
        let beautyValue = (value) => {
            value = Math.floor(value)
            if (value.toString().length < 2){
                return '0' + value
            }
            else {
                return value
            }
        }
        setInterval(()=>{
            let values  = {
                hours: beautyValue(secondsLeft / 3600),
                minutes: beautyValue(secondsLeft % 3600 / 60),
                seconds: beautyValue(secondsLeft % 3600 % 60)
            }

            hours.innerHTML = values.hours
            minutes.innerHTML = values.minutes
            seconds.innerHTML = values.seconds

            secondsLeft == 0 ? secondsLeft = data.hours * 3600 + data.minutes * 60 + data.seconds : ''

            secondsLeft--
        }, 1000)



    }

    let background = document.querySelector('.background')
    if (background) {
        document.onmousemove = e => {
            let x = e.clientX / window.innerWidth,
                y = e.clientY / window.innerHeight

            background.style.transform =`translate(${x*50}px, ${y*50}px`

        }
    }


    if ($(window).width() > 576) {
        let radius = getComputedStyle(document.querySelector('.benefits')).getPropertyValue('--circle-radius').replace('px', '')*1,
            circleSvg = document.querySelector('.circle__svg'),
            circleAnim = document.querySelector('.circle__anim')
        circleAnim.setAttribute('cx', `${radius+1}`)
        circleAnim.setAttribute('cy', `${radius+1}`)
        circleAnim.setAttribute('r', `${radius}`)
        circleSvg.setAttribute('viewBox', `0 0 ${radius*2} ${radius*2}`)

        gsap.registerPlugin(MotionPathPlugin);

        const circlePath = MotionPathPlugin.convertToPath(".circle__anim", false)[0];
        circlePath.id = "circlePath";
        document.querySelector("svg").prepend(circlePath);
        const items = document.querySelectorAll('.circle__item');

        let step = 1 / items.length;
        let wrapProgress = gsap.utils.wrap(0, 1);
        let snap = gsap.utils.snap(step)

        gsap.set(items, { motionPath: {
                path: circlePath,
                align: circlePath,
                alignOrigin: [0.5, 0.5],
                //autoRotate: true,
                end: i => i / items.length
            }});

        const tl = gsap.timeline({ paused:true });
        tl.to('.circle', {
            transformOrigin: 'center',
            duration: 1,
            ease: 'none'
        });
        gsap.to(tl, {
            progress: snap(tl.progress() + step),
            modifiers: {
                progress: wrapProgress
            }
        });
    }

    if ($(window).width() < 912) {
        $('.offers__list').slick({
            arrows: false,
            dots: true,
            customPaging : function(slider, i) {
                return '<div class="slick-dot"></div>';
            },
            // appendDots: categoriesDots,
            slidesToShow: 1,
            infinite: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                // {
                //     breakpoint: 912,
                //     settings: {
                //         slidesToShow: 3
                //     }
                // },
            ]
        })
    }
})