import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'thumb-box-votes',
  styleUrl: 'thumb-box-votes.scss'
})
export class ThumbBoxVotes {

  @Prop() data: {
    thumbUp: number,
    thumbDown: number,
  } = {
      thumbUp: 234,
      thumbDown: 7662
    }

  getThumbPercentage(attr: string) {
    const totalVotes = this.data.thumbUp + this.data.thumbDown;
    if (totalVotes == 0) {
      return 0
    } else {
      const percentage = (this.data[attr] / totalVotes) * 100;
      return Number.isInteger(percentage) ? percentage : percentage.toFixed(2);
    }
  }

  getThumbPercentageString(attr: string) {
    const totalVotes = this.data.thumbUp + this.data.thumbDown;
    return totalVotes === 0 ? 'auto' : `${this.getThumbPercentage(attr)}%`;
  }

  render() {
    return (
      <div class="thumb-box-votes">
        <div class="thumb-box-votes__content thumb-box-votes__content-up" style={{ 'flex-basis': this.getThumbPercentageString('thumbUp') }}>
          <i class="icon-thumb-up"></i>
          <span class="thumb-box-votes-text">{this.getThumbPercentage('thumbUp')}<small>%</small></span>
        </div>
        <div class="thumb-box-votes__content thumb-box-votes__content-down" style={{ 'flex-basis': this.getThumbPercentageString('thumbDown') }}>
          <span class="thumb-box-votes-text">{this.getThumbPercentage('thumbDown')}<small>%</small></span>
          <i class="icon-thumb-down"></i>
        </div>
      </div>
    );
  }
}
