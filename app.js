const status = document.getElementById('status')
const btn = document.getElementById('btn')

const unused = 123

function check() {
  const now = new Date()

  if (now == null) {
    console.log("error")
  }

  status.textContent = "OK " + now.toLocaleTimeString()
}

btn.addEventListener('click', check)

check()