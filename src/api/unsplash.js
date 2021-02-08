import axios from 'axios';

axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S1ifyGWfW8meKCVE61tSOXYH06Ywn8K2_5iC4OHiUo4'
      }
    })

    export default unsplash;