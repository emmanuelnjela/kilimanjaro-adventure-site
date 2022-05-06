(function() {
    "use strict"
    const images =  [
        {id: 1, src: "../images/mount_1.jpg"},
        {id: 2, src: "../images/mount_2.jpg"},
        {id: 3, src: "../images/mount_3.jpg"},
        {id: 4, src: "../images/mount_1.jpg"},
        {id: 5, src: "../images/mount-kilimanjaro-hike.jpg"},
        {id: 6, src: "../images/night-view.jpg"},
        {id: 7, src: "../images/people.jpg"},
        {id: 8, src: "../images/person.jpg"},
        {id: 9, src: "../images/tembo_small_2.jpg"},
        {id: 10, src: "../images/tembo_wawili.jpg"},
        {id: 11, src: "../images/tembo_wengi.jpg"},
        {id: 12, src: "../images/twiga_small_img.jpg"},
        {id: 13, src: "../images/twiga_watatu.jpg"},
    ]
    document.addEventListener("DOMContentLoaded", () => {
        // navbar animation
        function Navbar_handle(){
            const dropdown = document.querySelector(".dropdown-links");
            const overlay = document.querySelector(".over-lay");
            const navBtn = document.querySelector(".bars");
            navBtn.addEventListener("click", e => {
                if(dropdown.ariaHidden == 'true'){
                    dropdown.style.display = "flex";
                    overlay.style.display = "block";
                    console.log(navBtn.querySelector("img").src = "../assert/svgs/solid/x.svg")
                    dropdown.ariaHidden = false;
                }
                else {
                    dropdown.style.display = "none";
                    overlay.style.display = "none";
                    console.log(navBtn.querySelector("img").src = "../assert/svgs/solid/bars.svg")
                    dropdown.ariaHidden = true;
                }
                
                e.preventDefault();
            })
        }
        

        Navbar_handle()
        function counter(count) {
            return function counter() {
                return count++
            }
        }
        let countValue = counter(0)
        // home title animation
        let id = setInterval(text_slide,100)
        function text_slide() {
            let count = countValue();
            let text = "Kilimanjaro Adventure.";
            let textTarget = document.querySelector(".home-heading");
            // textTarget.style.transform = "scale(4)";
            textTarget.append(text[count]);
            if(text.length - 1 == count){
                clearInterval(id);
            }
            console.log(count);
        }   
    })
})()







// 1 loop sequentialy throught an array
// 2 compare if an element match with search element

// let array = [2,5,10,4,3];

// function LinearSearch(value){
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(element == value){
//             console.log("Found");
//             return;
//         }
//     }
//     console.log("Not found");
// }
// LinearSearch(9);

// // 1 start at middle of array
// // 2 compare which side is greater than search value
// // 3 halve until element found

// function BinarySearch(value){
//     for (let i = 0; i < array.length; i++) {
//         let middleIndex = Math.floor(array.length / 2);
//         let previousValue = array[middleIndex - 1];
//         let nextValue = array[middleIndex + 1];
//         if(array[middleIndex] == value || previousValue == value || nextValue == value){
//             console.log("found");
//             return;
//         }
//     }
//     console.log("Not found");
// }
// BinarySearch(3);

// // 1 compare between two adjacent elements
// // 2 if it is not in order swap them

// function BubbleSort(value){
//     let length = array.length

//     let j = 0;
//     let swapped = true;

//     while(swapped){
//         swapped = false;
//         j++;
//         for(i = 0; i < length - j; i++){
//             console.log(i,j,length - j)
//             let currentValue = array[i];
//             let nextValue = array[i + 1];

//             if(currentValue > nextValue){
//                 currentValue = nextValue;
//                 nextValue = currentValue;
//                 swapped = true
//             }
//         }
//     }
//     console.log(array)
// }

// BubbleSort()