// document.body.addEventListener("click", () =>{
//     alert("This is the body");
// });
// document.querySelector("section").addEventListener("click", () => {
//     alert("this the section");
// });
// document.querySelector("div").addEventListener("click", () => {
//     alert("this the div")
// });
    // document.addEventListener("keydown", (event) => {
    //     event.preventDefault()
    //     console.log(event.key);
    //     console.log(event.code);
    //     if (event.key == "Enter") {
    //         alert("Hello World!")
    //     }
    // })

    // let time1 = 0.0, time2 = 0.0;
    // document.body.addEventListener("click", (event) => {
    //     console.log(event);
    //     document.body.style.backgroundColor = "black";
    //     time1 = event.timeStamp;
    //     console.log(time1);
    //     console.log(event.currentTarget);
    // });
    // document.body.addEventListener("click", (event)=> {
    //         setTimeout(() =>{
    //         // alert("Hello World!");
    //         time2 = event.timeStamp;
    //         console.log(time2);
    //         console.log(time1 - time2);
    //     },5000)
    //     });

    console.log(document.forms);
    document.forms[0].onsubmit = (event) => {
        event.preventDefault();
    };