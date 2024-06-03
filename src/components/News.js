import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : "in",
        pageSize : 6,
        category : 'general'
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }
    articles = []

    capitalizeFirstletter = (string) =>{
        return string.charAt(0).toUpperCase() +string.slice(1)
    }
    constructor(props){
        super(props);
        console.log('hello I m a constructor from news component')
        this.state={
            articles: [],
            loading:false,
            page:1
        }
        document.title =  `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey`

    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=505445417ad64ed08dbd138e7cff9daf&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles, 
            totalResults : parsedData.totalResults,
            loading:false
        })
    }
    handlePrevPage = async ()=>{
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=505445417ad64ed08dbd138e7cff9daf&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles : parsedData.articles,
            page: this.state.page -1,
            loading:false
        })
    }
    handleNextPage = async() =>{
        console.log("next")
        if (!(this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=505445417ad64ed08dbd138e7cff9daf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles : parsedData.articles,
                page: this.state.page + 1,
                loading:false
            })
        }

    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines from {this.capitalizeFirstletter(this.props.category)}</h1>
        {this.state.loading && <Loading />}
        <div className='row' >
            {!this.state.loading && this.state.articles.map((elements)=>{
                return <div className='col-md-4 my-3 ' key={elements.url}>
                <NewsItems title={elements.title.slice(0, 45)} description={elements.description ? elements.description.slice(0, 88) : ''} 
                imageUrl={elements.urlToImage} newsUrl = {elements.url} author = {elements.author} publishedAt={elements.publishedAt}
                source={elements.source.name} />
                </div>
            })}
        </div>    
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
        <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div> 
      </div>
    )
  }
}

export default News
