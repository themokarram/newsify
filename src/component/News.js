import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Grid,Typography,Button } from '@mui/material';



export default class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4666e0ec8c754012acf2978b472a388d"
        let data= await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({ articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    handlePrevClick=async()=>{
        console.log("Previous")
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4666e0ec8c754012acf2978b472a388d&page=${this.state.page - 1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({ 
            articles:parsedData.articles,
            page:this.state.page+1
        })
    }
    handleNextClick= async()=>{
        console.log("NEXT")
        if (this.state.page + 1 >Math.ceil(this.state.totalResults / 20)){ }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4666e0ec8c754012acf2978b472a388d&page=${this.state.page + 1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({ 
            articles:parsedData.articles,
            page:this.state.page+1
        })
    } 
    }
    render() {
        return (
            <>
              <Typography variant='h3'm={3} ml={6} sx={{ display:'flex' , alignItems:'center' }} >Today's Headlines are</Typography>
                
               <Grid container >
               
                {this.state.articles.map((e) => {
                    return (
                        <Grid Item lg={4} sm={6} xs={12} key={e.url} >
                            <NewsItems title={e.title} description={e.description?e.description.slice(0,80):""} image={e.urlToImage} newsurl={e.url} />
                        </Grid>
                    )
                })}
                
              </Grid>
              <Grid Container m={3} display={'flex'} justifyContent={'space-between'} >
                <Button disabled={this.state.page<=1}  variant="contained" onClick={this.handlePrevClick}>&larr; PREVIOUS</Button>
                <Button disabled={this.state.page>(Math.ceil(this.state.totalResults /20))-1} variant="contained" onClick={this.handleNextClick}>NEXT &rarr; </Button>

                </Grid>

            </>
        )
    }
}
