const status = document.getElementById('status')
const btn = document.getElementById('btn')

function check() {
  const now = new Date()

  if (now === null) {
    return
  }

  status.textContent = "OK " + now.toLocaleTimeString()
}

btn.addEventListener('click', check)

check()