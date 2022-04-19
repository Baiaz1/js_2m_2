

const timePromise = () =>
new Promise((resolve, reject) =>
setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  await timePromise()
  document.body.innerHTML += "<div class='box'>first</div>"
  await timePromise()
  document.body.innerHTML += "<div class='box2'>!first</div>"
}

asyncFn()