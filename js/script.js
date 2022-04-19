

document.body.innerHTML += "<div class='box'>tree</div>"

function test (n) {

  if(n === 1){
    return n
  }
  console.log(n);
  setTimeout(() => {
      test(n - 1)
  }, 0)
}

// test(100000)

function testMicroTask(n){
  if(n === 0){
    return n
  }

  Promise.resolve().then(() => {
    testMicroTask(n - 1)
  })
}



console.log("start");

setTimeout(() => {
  console.log("task");
}, 0)

Promise.resolve().then(() => {
  console.log("Microtask");
})

console.log("end");