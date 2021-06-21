// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    isActive: 0,
  }

  onClickRightArrow = () => {
    const {isActive} = this.state
    const {reviewsData} = this.props

    if (isActive < reviewsData.length - 1) {
      this.setState(prevState => ({
        isActive: prevState.isActive + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {isActive} = this.state

    if (isActive > 0) {
      this.setState(prevState => ({
        isActive: prevState.isActive - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {isActive} = this.state
    const currentReviewData = reviewsData[isActive]

    return (
      <div className="reviews-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="button"
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewData)}
          <button
            className="button"
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
