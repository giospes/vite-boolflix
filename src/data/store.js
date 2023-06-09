import axios from 'axios'
import { reactive } from 'vue'

export const store = reactive({
    
        baseUrl : 'https://api.themoviedb.org/3',
        imgBaseUrl : 'https://image.tmdb.org/t/p',
        endpoint : {
            searchMovies: '/search/movie',
            searchTv: '/search/tv',
            discoverMovies: '/discover/movie',
            discoverTv: '/discover/tv',
        },
        apikey : '86bc7bbdf9e9aaef4f8f8205ae68e103',
        query: '',
        moviesFound: [],
        TvFound: [],
        errorMess: '',
        loaded: 0,
        searchMovies(){
            this.loaded = 1;
            const url = this.baseUrl + this.endpoint.searchMovies
            axios.get(url, {params:{ api_key: this.apikey, query: this.query}}).then(
                (res)=>{
                    this.moviesFound = res.data.results
                    this.loaded= 2 
                },
                (error)=> {
                    this.errorMess = error.message 
                }
            )
            this.loaded= 0
            
        },searchTv(){
            this.loaded = 1;
            const url = this.baseUrl + this.endpoint.searchTv
            axios.get(url, {params:{ api_key: this.apikey, query: this.query}}).then(
                (res)=>{
                    this.TvFound = res.data.results
                    this.loaded= 2
                },
                (error)=> {
                    this.errorMess = error.message
                }
            )
            this.loaded= 0
        }
        
    
        
    
        
    
   
})