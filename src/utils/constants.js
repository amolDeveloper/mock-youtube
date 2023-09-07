export const GOOGLE_API_KEY = '&key=AIzaSyAx1x0TwLrlJqTiIFXeKZQZE8r_gJSbJRk';

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN' + GOOGLE_API_KEY;

export const VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const LIVE_CHAT_OFFSET = 15;

export const SUPPORTED_LANG = [
    {identifier: 'en', name: 'English'},
    {identifier: 'hindi', name: 'Hindi'},
    {identifier: 'spanish', name: 'Spanish'}
]

export const lang = {
    en: {
        placeholder: 'What would you like to watch today?',
        buttonText: 'Search'
    },
    hindi: {
        placeholder: 'आज आप क्या देखना चाहेंगे?',
        buttonText: 'खोज'
    },
    spanish: {
        placeholder: '¿Qué te gustaría ver hoy?',
        buttonText: 'Buscar'
    }
}

