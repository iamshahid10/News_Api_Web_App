import React from 'react'

const NewsItem = (props)=> {
   
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className="my-3">
                <div className="card">
                    <span className="badge rounded-pill bg-danger" style={{display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: 0}} >
                      {source}
                    </span>
                    <img src={!imageUrl ? "https://www.wealthyaccountant.com/wp-content/uploads/2017/01/news-636978_960_720-768x576.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}\</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm2 btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
