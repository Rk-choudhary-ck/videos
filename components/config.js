import { StyleSheet, Dimensions } from 'react-native';
const ScreenWidth = Math.round(Dimensions.get('window').width);
const colors = {
    Primary: "#118200",
    Primary2: "#a90000",
    Dark: "#191919",
    Light: "#eeeeee",
    MixLight: "#EAECEE",

    White: "#FFFFFF",
    Red: "#d00000",
    Gray: "#767777",
    MidGray:'#ccd0d5',
    LightGray: "#F5F5F5",
    DarkYellow:'#9b870c',
    Purple: "#5754d5",
    Pink: "#f52c56",
    Green: "#118200",
    Gold: "#e8c400",
    Navy: "#1877F2",
    Orange: '#FF7F00',
    LightBlack: "#4C4D4D",
    Black: "#000000",
    screenColor: "#FFFFFF",
    SkyBlue: "#4fbfe3",
    OrangeDark:"#f05f08"
}

const fonts = {
    SourceSansPro: 'SourceSansPro-Regular',
    SourceSansProBold: 'SourceSansPro-Bold'
}

const fontSize = {
    xs: 6,
    s: 10,
    m: 14,
    l: 18,
    xl: 24,
    xxl: 30,
}

// const Google_Api = 'AIzaSyDDz_cIYEWP2_QOqUNompjJkJ1PcMit5Ec';
// const ajaxurl = 'http://localhost/delivery_app//controller/controller_app.php';
const ajaxurl = 'http://automoney.co.in/blogs/api/news';

// const Firebase_Api = 'AAAAPMqgcDM:APA91bGn9R-upia6NwhjnAg97Zr4OfDem-J5ZV_qjOeR02AwDCtpbT6cD5SepDyC5F3aNPkKcbDfUbWMYjLPknn6vKuMu9VKzGlUptU0w9IGX5cHkTgIqCmTuUIMunWtM_YfkRt3s2Hl';
export { ScreenWidth, colors, fonts, fontSize, ajaxurl }