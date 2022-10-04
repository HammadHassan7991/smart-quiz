// $(function () {
//     alert('jq loaded')
// })
const correctanswers = ['B', 'B', 'B', 'B']
const form = $('.quiz-form')
// const form = document.querySelector('.quiz-form')
// form.on('submit', e => {
//     e.preventDefault();
//     let score = 0;

//     const useranswers = [$("input[name='q1']:checked").val(), $("input[name='q2']:checked").val(), $("input[name='q3']:checked").val(), $("input[name='q4']:checked").val()]
//     // const useranswers = [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val()]xxxnot workin wit id
//     // const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
//     console.log(useranswers)

//     useranswers.forEach((answer, index) => {
//         // console.log(correct.index)

//         if (answer === correctanswers[index]) {
//             score += 25;
//         }

//     })
//     // console.log(score)
//     // $(".intro h2").after(`<h2 class="container display-3 text-primary my-4">Score: ${score}</h2>`)
//     // window.scrollTo();
//     scrollTo(0, 0)
//     //parameters are x & y cordinates.
//     $(".result span").text(`${score}`)
//     $(".result").removeClass("d-none")
// })
// $(".intro h2").append(`<h2 class="container display-3 text-primary my-4">Score:${score}</h2>`);

////////////////////////////////////////////////Window Object/////////////////////////////////

//to solve probelem wen user click submit it auto scroll up to score area and to do tis we use window object
//it is lobal object on JS and we cann say it te moter of all objects.Everytin we do in front-end javascript is store in
// window object.

// console.log("ello")
// window.console.log("ello")

// setTimeout(() => {
//     alert("ello")

// }, 3000)

/////////////////////////////////////////////Intervals and Animation/////////////////////////////////////

// setTimeout(() => {
//     alert("ello")

// }, 3000)
//setTimeout(); call only once after certain amount of time like 3000 in above case

//setInterval () repeat call after certain amount of time
// let i = 0;
// let timer = setInterval(() => {
//     console.log("ello")
//     i++;
//     if (i == 5) {
//         clearInterval(timer)
//     }
// }, 1000)

form.on('submit', e => {
    e.preventDefault();
    let score = 0;
    const useranswers = [$("input[name='q1']:checked").val(), $("input[name='q2']:checked").val(), $("input[name='q3']:checked").val(), $("input[name='q4']:checked").val()]
    useranswers.forEach((answer, index) => {
        if (answer === correctanswers[index]) {
            score += 25;
        }
    })
    scrollTo(0, 0)

    $(".result").removeClass("d-none")
    let output = 0;
    let timer = setInterval(() => {
        $(".result span").text(`${output}%`)
        {
            if (output == score) {
                clearInterval(timer);
            }
            else {
                output++;
            }
        }
    }, 10)
})
