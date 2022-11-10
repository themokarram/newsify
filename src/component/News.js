import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Grid, Typography, Button, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types'



export default class News extends Component {

    static defaultProps={
        country:"in",
        category:"general",
        pageSize:12
    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4666e0ec8c754012acf2978b472a388d&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log("cdm", parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4666e0ec8c754012acf2978b472a388d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log("handle previous click", parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4666e0ec8c754012acf2978b472a388d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log("handle next click", parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading:false
        })

    }
    render() {
        return (
            <>
                <Typography variant='h4' m={3} ml={6} sx={{ display: 'flex', justifyContent: 'center' }} >Today's Headlines are {this.state.loading && <CircularProgress />}</Typography>
                <Grid container display={'flex'} justifyContent={'center'} >

                    {this.state.articles.map((e) => {
                        return (
                            <Grid Item lg={4} sm={6} xs={12} key={e.url} >
                                <NewsItems title={e.title.slice(0,50)} date={e.publishedAt.slice(0,10)} description={e.description ? e.description.slice(0, 80) : ""} image={e.urlToImage} newsurl={e.url} />
                            </Grid>
                        )
                    })}

                </Grid>
                <Grid Container m={3} display={'flex'} justifyContent={'space-between'} >
                    <Button disabled={this.state.page <= 1} variant="contained" onClick={this.handlePrevClick}>&larr; PREVIOUS</Button>
                    <Button disabled={this.state.page > (Math.ceil(this.state.totalResults / 6 )) - 1} variant="contained" onClick={this.handleNextClick}>NEXT &rarr; </Button>

                </Grid>

            </>
        )
    }
}
