import { createSlice } from "@reduxjs/toolkit"


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
     reducers:{
        toggleGptSearchView:(state,action)=>{
           
           if(action.payload)
           {state.showGptSearch=action.payload
             return}
           
           state.showGptSearch=!state.showGptSearch
        },
        addgptRecommendedMovies:(state,action)=>{
         const{movieNames,movieResults}=action.payload;
         state.movieNames=movieNames;
         state.movieResults=movieResults;
        },
        removegptRecommendedMovies:(state,action)=>{
         state.movieNames=null 
         state.movieResults=null;
         return
        }
     }
})
export const{toggleGptSearchView,addgptRecommendedMovies,removegptRecommendedMovies}=gptSlice.actions
export default gptSlice.reducer