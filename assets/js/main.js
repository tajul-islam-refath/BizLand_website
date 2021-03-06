function main() {
    // Scroll header fixd
    window.addEventListener('scroll', function() {
        let headerClass = document.getElementById("header")
        let x = this.window.scrollY
        if (x > 80) {
            headerClass.classList.add("fixed-top")
        } else {
            headerClass.classList.remove("fixed-top")
        }
    })

    // Progress Bar section
    function progressBar(id, width) {
        let progressClass = document.getElementById(id)
        let p = 10;
        let dely = 50

        function htmlProgress() {
            if (p <= width) {
                progressClass.style.width = `${p}%`;
                p += 10
                setTimeout(htmlProgress, dely)
            }
        }
        htmlProgress()
    }


    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 1550 && window.pageYOffset < 2300) {
            // HTMl
            progressBar("html", 100);
            // CSS 
            progressBar("css", 80);
            // javascript
            progressBar("javascript", 70);
            //React JS
            progressBar("react", 70);
            //Bootstrap
            progressBar("bootstrap", 90);
            //Node Js
            progressBar("node", 50);
        }
    })

    // counter section 
    function counter(id, value, n) {
        let counterClass = document.getElementById(id)
        counterClass.innerHTML = "0"
        let p = 10;
        let dely = 70

        function counterCalculate() {
            if (p < value) {
                counterClass.innerHTML = `${p}`
                p += n
                setTimeout(counterCalculate, dely)
            } else {
                counterClass.innerHTML = `${value}`
            }
        }

        counterCalculate()
    }
    counter("clients", 232, 15)
    counter("projects", 521, 20)
    counter("support", 1463, 50)
    counter("workers", 15, 1)



}


(function() {
    // Preloader section

    const lodingText = document.getElementById("loading-text")
    var i = 0;
    var txt = 'I am thinking!';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            lodingText.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()

    let preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.remove()
            }, 2000)
        });
    }

    // main function call 
    setTimeout(() => {
        main();
    }, 3000)


    // active nav link 
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            let current = document.getElementsByClassName("active-nav")
            current[0].classList.remove("active-nav")
            tab.classList.add("active-nav")
                // e.currentTarget.classList.toggle('active-nav');
        })
    })

    const toggle = document.querySelector(".mobile-nav-toggle")
    toggle.addEventListener("click", () => {
        const nav = document.getElementById("navbar")
        const ul = nav.getElementsByTagName("ul")
        if (ul[0].style.opacity == 0) {
            ul[0].style.height = "100%"
            ul[0].style.opacity = 1
        } else {
            ul[0].style.height = "0%"
            ul[0].style.opacity = 0
        }

    })



})()