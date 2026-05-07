import callTuneUrl from "../assets/john-pork-is-calling.mp3"

const musicToMyEar = new Audio(callTuneUrl)

export function startCall() {
    musicToMyEar.play().catch((e) => console.log("error playing call tune: ", e))
}

export function stopCall() {
    musicToMyEar.pause()
    musicToMyEar.currentTime = 0
}