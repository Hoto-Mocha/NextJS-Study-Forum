export default function Time(req, res) {
    const today = new Date()
    let year = today.getFullYear() //현재 연도
    let month = today.getMonth() + 1 //현재 달(0~11 + 1)
    let date = today.getDate() //현재 날짜
    let day = today.getDay() //현재 요일(0~6)

    let hour = today.getHours() //현재 시(0~23)
    let minute = today.getMinutes() //현재 분(0~59)
    let second = today.getSeconds() //현재 초(0~59)
    let milliSecond = today.getMilliseconds() //현재 밀리초 (0~999)

    let localeDay = today.toLocaleDateString() //브라우저에 설정된 국가에 따른 날짜
    let localeHour = today.toLocaleTimeString() //브라우저에 설정된 국가에 따른 시각
    let localeString = today.toLocaleString() //브라우저에 설정된 국가에 따른 날짜와 시각

    res.status(200).json(localeString)
}