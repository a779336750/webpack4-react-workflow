import React, { PureComponent } from 'react';
export default class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: typeof props.rating == 'number' ? props.rating : 0,
      selection: 0
    };
    this.hoverOver = this.hoverOver.bind(this);
    this.hoverOut = this.hoverOver.bind(this, null);
    this.handleClick = this.handleClick.bind(this);
  }
  hoverOver(event) {
    let val = 0;
    if (event && event.target && event.target.getAttribute('star-rating-id'))
      val = event.target.getAttribute('star-rating-id');
    this.setState(state => ({ selection: val }));
  }
  handleClick(event) {
    const val =
      event.target.getAttribute('star-rating-id') || this.state.rating;
    this.setState(state => ({ rating: val }));
    this.props.callback(val);
  }
  render() {
    return (
      <div
        onMouseOut={this.hoverOut}
        onClick={this.handleClick}
        onMouseOver={this.hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1} `}
            marked={
              this.state.selection
                ? this.state.selection >= i + 1
                : this.state.rating >= i + 1
            }
          />
        ))}
      </div>
    );
  }
}
StarRating.defaultProps = {
  /**
   * callback函数，用于获取选择的评分（1~5）
   * @param v
   */
  callback: v => console.log(v),
  /**
   * 默认评分：4
   */
  rating: 4
};
function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: '#ff9933' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
}
