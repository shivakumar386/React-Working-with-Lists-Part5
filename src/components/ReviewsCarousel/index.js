// import {Component} from 'react'
// import './index.css'

// class ReviewsCarousel extends Component {
//   state = {count: 0}

//   leftArrow = () => {
//     const {count} = this.state
//     if (count > 0) {
//       this.setState(prevState => ({
//         count: prevState.count - 1,
//       }))
//     }
//   }

//   rightArrow = () => {
//     const {count} = this.state
//     const {reviewsList} = this.props
//     if (count < reviewsList.length - 1) {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//       }))
//     }
//   }

//   render() {
//     const {count} = this.state
//     const {reviewsList} = this.props
//     const {imgUrl, username, companyName, description} = reviewsList[count]
//     console.log(reviewsList)
//     return (
//       <div className="bg-container">
//         <h1 className="heading">Reviews</h1>
//         <div className="card-container">
//           <button type="button" className="button" onClick={this.leftArrow}>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
//               alt="left arrow"
//             />
//           </button>
//           <div className="review-container">
//             <img src={imgUrl} alt={username} className="images" />
//             <p className="username">{username}</p>
//             <p className="company">{companyName}</p>
//             <p className="description">{description}</p>
//           </div>
//           <button type="button" className="button" onClick={this.rightArrow}>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
//               alt="right arrow"
//             />
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default ReviewsCarousel

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
