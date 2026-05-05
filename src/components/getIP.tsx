export async function getIP() {
    const res = await fetch('https://ipinfo.io/json')
      .then(res => res.json())
      .then(data => {
        console.log(`IP: ${data.ip}, Location: ${data.city}, ${data.region}, Coordinates: ${data.loc}, Org: ${data.org}`);
        /* console.log(data) */
      });
    const data = res.json()
    console.log(data)
    return data
  }