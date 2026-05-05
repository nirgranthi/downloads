export interface getIpProps {
  "ip": string,
  "city": string,
  "region": string,
  "country": string,
  "loc": string,
  "org": string,
  "postal": string,
  "timezone": string,
  "readme": string,
}

export async function getIP() {
    const res = await fetch('https://ipinfo.io/json')
    const data: getIpProps = await res.json()
    console.log(data)
    return data
  }