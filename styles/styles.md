:root {
    --primary-clr: orange;

    --secondary-clr: mediumaquamarine;

    --padding-xlg: 2.5rem;
    --padding-lg: 2rem;
    --padding-md: 1rem;
    --padding-sm: .5rem;
    --padding-xsm: .3rem;

    --margin-xlg: 2.5rem;
    --margin-lg: 2rem;
    --margin-md: 1rem;
    --margin-sm: .5rem;
    --margin-xsm: .3rem;

    --border-xlg: 2rem solid;
    --border-lg: 1rem solid;
    --border-md: .5rem solid;
    --border-sm: .3rem solid;
    --border-xsm: .1rem solid;

    --font-size-xlg: 2rem;
    --font-size-lg: 1.5rem;
    --font-size-md: 1rem;
    --font-size-sm: .5rem;
    --font-size-xsm: .3rem;


}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: beige;
    /* overflow: hidden; */
}

.container {
    position: relative;
}

.home-wrapper {
    background-image: url(../assert/images/mount_3.jpg);
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
}

/* Adding black overlay to home wrapper */
.home-wrapper::after {
    content: "";
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 5;
    top: 0;
    background-color: rgba(0, 0, 0, 0.39);
}
/* End of adding overlay to home wrapper */

.nav-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 10;
    height: 10vh;
    width: 100%;

    /* animation-name: navbar;
    animation-duration: 1s;
    animation-delay: 2.2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite; 
    animation-direction: alternate; */
}

.nav-brand {
    /* flex-basis: %; */
    text-align: center;
}
.navbar-nav {
    flex-basis: 80%;
}
.nav-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
/* height: 100%; *//* padding: 2rem 0; */}
.nav-item {
    padding: var(--padding-sm);

}
.nav-item:hover {
    background-color: white;
    border-radius: 5rem;
    background-color: var(--primary-clr);
}
.nav-link {
    color: white;
    text-transform: capitalize;
    font-weight: 700;
    display: flex;
    align-items: center;
height: 100%;width: 100%;}

.nav-link img {
    /* height: 50rem; */width: 2rem;
    filter: invert();
    margin-left: var(--margin-sm);
}

.weather {
    /* padding: var(--padding-sm); */
    border-radius: 5rem;
    background-color: var(--secondary-clr);
}
.weather:hover {
    background-color: var(--secondary-clr);
}
.weather-btn {
    background-color: transparent;
    /* font-weight: 900; */
    border: none;
    /* background-color: var(--primary-clr); */
    display: flex;
    align-items: center;
}
.weather a {
    font-weight: 900;
    color: white;
    font-size: var(--font-size-md);
}
.weather img {
    /* width: initial; */
    filter: invert();
    margin-left: var(--margin-sm);
}
.bars {
    display: none;
    /* background-color: black; */
    transition: 5s;
    transition-timing-function: ease-in-out;
    /* background-color: #18597e; */
    height: 100%;
/* padding: var(--padding-sm); */
}
.bars:hover {
    background-color: transparent;
}
.bars img {
    width: 2rem;
}
.dropdown-links {
    display: none;
    position: absolute;
    z-index: 25;
    width: 100%;
    padding: 0 var(--padding-xlg);
}
.over-lay {
    background-color: rgb(24 89 126);
    /* background-color: var(--secondary-clr); *//* background-image: url(../assert/images/tembos.jpg); */
    height: calc(100% - 10vh);
    height: 50%;
    width: 100%;
    position: absolute;
    background-size: cover;
    z-index: 20;
    /* top: 10vh; */
    display: none;
    opacity: 100%;
/* filter: blur(5px); */transition: 5s;transition-property: display;}
.dropdown-item {
    
}
.dropdown-item:hover {
    background-color: rgba(128, 128, 128, 0.836);
}
.dropdown-items {
    display: flex;
    
    flex-direction: column;
    width: 100%;
    /* position: absolute;
    z-index: 20; */
}
.dropdown-link {
    color: white;
    font-size: var(--font-size-lg);
}
.dropdown-item {
    padding: var(--padding-md);
}
.dropdown-item img {
    filter: invert();
    height: 2rem;
    width: 2rem;
    float: right;
}

/* End of home nav bar */

.home-contents {
    height: calc(100% - 10vh);
    position: relative;
    z-index: 10;
    padding: var(--padding-xlg);
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: visible;
width: 100vw;}
.left-home-contents {
    width: 50%;
}
.home-heading {
    color: white;
    font-size: calc(var(--font-size-xlg) * 2);
    line-height: 1;
max-width: q;}
.qoute-of-day {
    color: white;
    font-size: var(--font-size-lg);
    word-break: break-all;
    width: 70%;
    line-height: 1.5rem;
    /* animation-name: show-qoute;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 2.5s;
    animation-timing-function: ease-in-out; */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.qoute-writter {
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--primary-clr);
    font-size: calc(var(--font-size-lg) - 0.3rem);
    animation-name: show-qoute;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 2.5s;
    animation-timing-function: ease-in-out;
}
.right-home-contents {
    /* width: 50%; */
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.social-icons {
    position: absolute;
    right: 2rem;
    /* z-index: 500; */
}

.social-icon {
    color: transparent;
    /* background-color: white; */
    width: 2rem;
    height: 2rem;
    margin-bottom: var(--margin-md);
}
.social-icon:last-child {
    margin-bottom: 0rem;
}
.social-icon img {
    filter: invert();
}

.next-page-button {
    height: 3rem;
    width: 3rem;
    text-align: center;
    border-radius: 50%;
    border-bottom: none;
    border-left: none;
    border-right: none;
    position: absolute;
    bottom: 3rem;
    cursor: pointer;
    /* background-color: var(--primary-clr); */
    /* border-bottom: var(--border-lg) var(--primary-clr); */
    /* border: var(--border-xsm) var(--primary-clr); */
    animation-name: home-next-page;
    animation-duration: 2s;
    animation-delay: 2.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.next-page-button:hover {
    /* animation-duration: 5s; */
    /* animation-delay: 5s; */
}
.next-page-button img {
    filter: invert();
    opacity: 90%;
}

/* End of Home wrapper */

/* Main section start */

/*  section-1 start */
.section-1 {
    height: 110vh;
    width: 100%;
    padding: var(--padding-xlg);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 57.5vh 40vh;
    background-color: beige;
    /* margin-top: var(--margin-md); */
    overflow: hidden;
}
.section-top {
    display: flex;
}
.section-story {
    width: 50%;
    height: 100%;
    padding-right: var(--padding-md);
}
.section-story p {
    margin-top: var(--margin-md);
    width: 100%;
}
.bordered {
    font-weight: 700;
    border-left: var(--border-xsm) var(--primary-clr);
    padding-left: var(--padding-md);
}

.section-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: var(--margin-lg);
    /* text-align: center; */
    }
.section-footer p {
    text-transform: uppercase;
    font-weight: 600;
    /* border-left: var(--border-xsm) var(--primary-clr);
    padding-left: var(--padding-md); */
    color: var(--primary-clr);
}
.left-section-footer, .right-section-footer {
    /* display: flex; */
    /* width: 50%; */
}

.right-section-footer img, .left-section-footer img {
    width: 2rem;
    margin-top: var(--margin-xsm);
    opacity: 50%;
}

.gradient-bolder {
    height: .3rem;
    width: 100%;
    background-color: gray;
    margin-top: var(--margin-md);
    position: relative;
    z-index: 1;
}
.bolder-line {
    height: .3rem;
    width: 40%;
    background-color: var(--primary-clr);
    position: relative;
    /* top: 0; */
    /* z-index: 5; */
}

.section-story-image {
    width: 50%;
    height: 100%;
    padding-left: var(--padding-md);
}
.section-story-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    float: right;
    border-radius: 5%;
    box-shadow: .3rem .5rem .5rem 0rem rgba(95, 95, 95, 0.5);
    /* border-left: .5rem solid var(--primary-clr); */
}
.images-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: var(--margin-xlg);
}
.image-1,.image-2,.image-3 {
    height: 27vh;
    width: 40vh;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: .3rem .5rem .5rem 0rem rgba(95, 95, 95, 0.5);
}
.images-container img {
    height: 100%;
    width: 100%;
}
/* End of section-1 */

/* start of section-two */
.section-2 {
    height: 110vh;
    width: 100%;
    padding: var(--padding-xlg);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: calc(50vh - 4rem) calc(50vh - 1rem);
    grid-gap: 1rem;
    background-color: beige;
    /* margin-top: var(--margin-md); */
    overflow: visible;
}

.story-board-container {
    /* width: 40vw; */
    /* height: 40vh; */
}
.story-board {
    line-height: 2rem;
    /* width: 100%; */
    /* height: 40%; */
}
.story-board-header {
    color: #341C01;
}
.story-board-sub-header {
    font-size: calc(var(--font-size-lg) - 0.3rem);
}

.story-board {
    padding: 0 var(--padding-xsm);
}
.story-board-item {
    display: flex;
    align-items: center;
}
.story-board-item h1 {
    font-size: var(--font-size-md);
    font-weight: 500;
}
.story-board-item-img {
    background-color: rgba(255, 136, 0, 0.397);
    margin: var(--margin-xsm);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.story-board-item img {
    width: 55%;
    height: 60%;
    /* filter: invert(); */
    opacity: 65%;
    margin: var(--margin-sm);
    /* background-color: var(--primary-clr)red; */
    margin-right: var(--margin-md);
}
.story-board .section-footer {
    margin-top: 0;
}

.section-2 .gradient-bolder {
    /* margin-top: 0; */
}

.story-board .right-section-footer , .story-board .left-section-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.right-section-footer img, .left-section-footer img {
    margin-left: 1rem;
}
.img-board-container {
    width: 100%;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
}
.img-board {

    border-radius:  0 5% 5% 0rem;
    width: 100%;
    height: 100%;
    /* height: calc(100% + 2rem); */
    overflow: hidden;
    box-shadow: .2rem 0 .2rem rgba(14, 14, 14, 0.425);
    background-color: rgba(255, 136, 0, 0.397);

}
.img-board img {
    object-position: .3rem;
    /* border: .1px solid rgb(99, 99, 99); */
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* End of section-two */

/* start of section three */
.section-3 {
    height: 110vh;
    width: 100%;
    padding: var(--padding-xlg);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 57.5vh 40vh;
    background-color: beige;
    margin-top: var(--margin-md);
    overflow: hidden;
    /* transition: 5s; */
    /* transition-property: all; */
}
.section-3 .section-story-image img {
    border-radius: 0 ;
}
.section-3 .text-container {
    display: flex;
    justify-content: space-between;
    margin-top: var(--margin-xlg);
    height: 60.5%;
    
}
.text-one, .text-two {
    box-shadow: -.3rem -.3rem .5rem rgba(177, 176, 176, 0.699);
    width: 45%;
    border-radius: 2rem 0 0;
    background-color: var(--primary-clr);   
    padding: var(--padding-lg);
    height: auto;
    font-size: calc(var(--font-size-lg) - 0.3rem);
    font-family: 'Courier New', Courier, monospace;
}
/* End of of section four */

/* start of news latter page */
.news-letter-page {
    height: 100vh;
    width: 100%;
    margin-top: var(--margin-md);
}
.news-letter-form {
    background-image: url(../assert/images/twiga_big_img.jpg);
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
.news-letter-form img {
    width: 2rem;
    /* margin-top: var(--margin-xsm); */
    opacity: 70%;
}
.news-letter-form form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
    /* height: 20%; */
    width: 40%;
    padding: var(--padding-xlg);
}
.form-header {
    text-transform: uppercase;
    text-align: center;
    color: #341C01;
}
.field-input, .field-input input {
    width: 100%;
}
.field-input input {
    font-size: var(--font-size-md);
    outline: none;
    border: none;
    padding: var(--padding-md);
    border-bottom: 1px solid;
}
.news-letter-form button {
    padding: var(--padding-md);
    margin-top: var(--margin-lg);
    outline: none;
    background-color: var(--primary-clr);
    border: none;
    border-radius: 1rem;
    font-size: var(--font-size-md);
    /* height: 5rem; */
    /* width: 30%; */
    color: white;
    text-align: center;display: flex;font-weight: 500;
align-content: center;justify-content: center;}
.news-letter-form button:hover {
    background-color: var(--secondary-clr);
    box-shadow: 0 0 .2rem rgba(0, 0, 0, 0.39);
}
/* end of news letter page */

/* End of main section */

/* start of footer */
.footer {
    height: 100vh;
    width: 100%;
    background-color: beige;
    margin-top: var(--margin-md);
    /* overflow: hidden; */
}
.footer-images-slides {
    width: 100%;
}
.footer-images-slide .btn {
    background-color: var(--primary-clr);
    border: none;
    padding: var(--padding-md);
    outline: none;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-images-slide .btn img {
    margin-right: var(--margin-sm);
    width: 1rem;
}
.images-slide-container {
    padding: var(--padding-lg);
    display: grid;
    grid-template-columns: repeat(3,minmax(30vw, 1fr));
    /* grid-template-rows: repeat(2,40vh); */
    grid-gap: 1rem;
    height: 60vh;
    
}
.image-one, .image-three {
    width: 100%;
    height: 100%;
    /* opacity: 20%; */
}
.footer-back-link {
    width: 100%;
    height: 10%;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    /* width: 2rem; */
    padding: var(--padding-lg);
    padding-top: 0;
}
.footer-back-link img {
    width: 2rem;
}
.images-slide-container img {
    width: 100%;
    height: 100%;
    border-radius: 0 5rem 0 0;
    box-shadow: .1rem 0 .8rem rgba(0, 0, 0, 0.39);
}
.footer-bottom {
    padding: var(--padding-md);
    width: 100%;
    height: 40vh;
    background-color: #341C01;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-around;
}

.footer-bottom-header h1 {
    color: white;
    text-transform: capitalize;
    font-size: var(--font-size-xlg);
}
.footer-bottom-body {
    width: 100%;
}
.footer-bottom-body a {
    color: white;
    font-size: var(--font-size-lg);
}
.footer-bottom-body .social-icons {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    margin-top: var(--margin-md);
}
/* end of footer */


/* Animation start here */
@keyframes home-next-page {
     0% {
         transform: translateY(-1rem);
     }
     50% {
         transform: translateY(-2rem);
     }
     100% {
         transform: rotate(180deg);
     }
}

@keyframes navbar {
    0% {
        transform: translateY(-5rem);
    }
    100% {
        transform: translate(0);
    }
}

@keyframes show-qoute {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 90%; }
}
/* End of animation */


@media screen and (max-width: 830px) {
    :root {
    --bg-primary-clr: beige;
    --secondary-clr: rgb(24 89 126);
    --primary-clr: orangered;

}
    body {
        font-size: 20px;
    }
    /* .nav-bar {
        display: flex;
        flex-direction: column;
    } 
    */
    .nav-bar {
        background-color: rgb(24 89 126);
    }
    .weather {
        background-color: transparent;
    }
    .nav-brand .nav-link {
        font-size: var(--font-size-xlg);
    }
    .navbar-nav {
        flex-basis: 30%;
    height: 100%;width: 100%;display: flex;justify-content: center;} 
    .nav-item {
        display: none;
    }
    .weather {
        display: flex;
    }
    .bars {
        display: block;
    }
    .left-home-contents {
        min-width: 100%;
    }
    .right-home-contents {
        display: none;
    }
    .qoute-of-day {
        margin-top: var(--margin-md);
        width: 100%;
        line-height: 1.2;
    font-size: var(--font-size-xlg);}
    .home-contents .social-icons {
        display: none;
        position: relative;
        border-radius: 5rem;
        left: 1vw;
        background-color: var(--primary-clr);
        padding: var(--padding-md);
    }
    .section-footer {
        display: none;
    }
    /* section one */
    .section-1 {
        height: 110vh;
        grid-template-rows: 60vh 30vh;
        grid-gap: 5rem;
    }
    .section-1 .section-top {
        flex-direction: column;
    }
    .section-1 .section-top .section-story  {
        width: 100%;
    }
    .section-1 .section-story-image {
        padding: 0;
        width: 100%;
        height: 50%;
        margin-top: var(--margin-md);
    }
    .section-1 .image-3 {
        display: none;
    }
    .section-1 .image-1 , .section-1 .image-2 {
        width: 45%;
    }
    /* End section one */

    /* section two */
    .section-2 {
        margin-top: 0;
        height: 110vh;
        grid-template-rows: 50vh 50vh ;
        margin-bottom: calc(var(--margin-lg)*2);
        /* grid-gap: 5rem; */
    }
    .img-board {
        height: 80%;
    }
    .img-board img {
        object-position: center;
    }
    /* end section two */

    /* section three */
    .section-3 {
        padding-top: 0;
        margin-top: 0;
        
        padding-bottom: 0;grid-gap: 3rem;grid-template-rows: 70% 30%;
    grid-row-gap: 1;}
    .section-3 .section-top {
        height: auto;
    }
    .section-3 .section-bottom {
        height: max-content;
    }
    .section-3 .text-container {
        height: 100%;
        margin-top: 0%;
    }
    /* end section three */

    /* news letter */
    .news-letter-form form {
        width: 80%;
    }
    .news-letter-form-left-img , .news-letter-form-right-img {
        display: none;
    }
    /* footer */
    .images-slide-container {
        grid-template-columns: repeat(2, minmax(50%, 1fr));
    }
    .image-three {
        display: none;
    }
    .footer-back-link {
        justify-content: space-between;
    }
    .footer-back-previous {
        display: none;
    }
}

@media screen and (max-height: 768px) {
    * {
        font-size: 16px;
    }
}

/* mobile devices */
@media screen and (min-width: 320px) and (max-width: 600px) {
    html {
        font-size: 12px;
    }
    :root {
        
    --padding-xlg: 3rem;
    --padding-lg: 2.5rem;
    --padding-md: 1.5rem;
    --padding-sm: 1rem;
    --padding-xsm: .5rem;

    --margin-xlg: 3rem;
    --margin-lg: 2.5rem;
    --margin-md: 1.5rem;
    --margin-sm: 1rem;
    --margin-xsm: .5rem;

    --border-xlg: 2.5rem solid;
    --border-lg: 1.5rem solid;
    --border-md: 1rem solid;
    --border-sm: .5rem solid;
    --border-xsm: .3rem solid;

    --font-size-xlg: 2.5rem;
    --font-size-lg: 1.5rem;
    --font-size-md: 1.5rem;
    --font-size-sm: 1rem;
    --font-size-xsm: .5rem;
    }
    .next-page-button {
        display: none;
    }
    .left-home-contents {
        width: 100%;
    }
    .home-heading {
        max-width: 100%;
    }
    .qoute-of-day {
        font-size: var(--font-size-xlg);
        width: 100%;
/*         word-spacing: .5rem; */
        text-align: justify;
        line-height: 1;
    }
    .section-1, .section-2, .section-3 {
        grid-template-rows: 70% auto;
        height: auto;
        /* grid-gap: 5rem; */
        display: block;
    }
    .section-top {
         flex-direction: column;
/*          height: 50%; */
    }
    .section-story {
        width: 100%;
        height: auto;
        margin-bottom: var(--margin-lg);
    }
    .section-story-image {
        width: 100%;
        height: 100%;
        padding: 0;
    }
    .img-board-lg {
        display: none;
    }
    .story-board-container {
        margin-bottom: var(--margin-lg);
    }
    .story-board-header {
        display: none;
    }
    .story-board-sub-header {
        font-size: var(--font-size-md);
    }
    .img-board-container {
        margin-bottom: var(--margin-lg);
    }
    .section-3 {
        display: grid;
    }
    .images-slide-container {
        display: flex;
    }
    .image-one {
        width: 100%;
    }
    .image-two {
        display: none;
    }
    .section-3 .text-container {
        display: block;
    }
    .text-one, .text-two {
        width: 100%;
        padding: var(--padding-md);
        margin-top: var(--margin-md);
    }
    .footer {
        /* overflow: auto; */
    }
    .footer-bottom {
        height: auto;
    }
    .footer-bottom {
        display: block;
    }
}