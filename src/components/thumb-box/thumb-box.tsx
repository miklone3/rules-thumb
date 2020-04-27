import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { saveVotes } from '../../services/votes';
import { getCategory } from '../../services/core';


@Component({
  tag: 'thumb-box',
  styleUrl: 'thumb-box.scss'
})
export class ThumbBox {
  @Prop() data: any = {};
  @Prop() tiny: boolean;

  @State() voteSelected: string;
  @State() voteSended: boolean;
  @Event() ON_DATA_CHANGE: EventEmitter;


  voteNow() {
    if (!this.voteSelected) {
      return
    }

    this.data.votes[this.voteSelected]++;

    saveVotes(this.data.id, this.data);

    this.ON_DATA_CHANGE.emit();
    this.voteSended = true;
  }

  voteAgain() {
    this.voteSelected = null;
    this.voteSended = false;
  }

  renderForm() {
    return (
      <div class="thumb-box-content">
        <p class="thumb-box-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
        <div class="thumb-box-form">
          <span class={{ 'thumb-box-action thumb-box-action--up': true, 'thumb-box-action--active': this.voteSelected === 'thumbUp' }} onClick={() => this.voteSelected = 'thumbUp'}>
            <i class="icon-thumb-up" />
          </span>
          <span class={{ 'thumb-box-action thumb-box-action--down': true, 'thumb-box-action--active': this.voteSelected === 'thumbDown' }} onClick={() => this.voteSelected = 'thumbDown'}>
            <i class="icon-thumb-down" />
          </span>
          <button key="vote-now" class="thumb-box-button" disabled={!this.voteSelected} type="button" onClick={() => this.voteNow()}>
            Vote now
        </button>
        </div>
      </div>
    );
  }

  renderResult() {
    return (
      <div class="thumb-box-content">
        <p class="thumb-box-desc">Thank you for voting!</p>
        <div class="thumb-box-form">
          <button key="vote-again" class="thumb-box-button" type="button" onClick={() => this.voteAgain()}>Vote now</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <article class={{ 'thumb-box': true, 'thumb-box--tiny': this.tiny }}
        style={{
          'background-image': `url(${this.data.image || 'assets/images/kanye.png'})`
        }}>
        <div class="thumb-box__body">
          <div class="thumb-box-header">
            <h3 class="thumb-box-title">
              <span class={{
                'thumb-box-badge': true,
                'thumb-box-badge--up': this.data.votes.thumbUp > this.data.votes.thumbDown,
                'thumb-box-badge--down': this.data.votes.thumbDown > this.data.votes.thumbUp
              }}>
                <i class={{ 'icon-thumb-up': this.data.votes.thumbUp > this.data.votes.thumbDown, 'icon-thumb-down': this.data.votes.thumbDown > this.data.votes.thumbUp }}></i>
              </span>
              {this.data.name || 'Kanye West'}

            </h3>
            <span class="thumb-box-caption">
              <b>1 month ago</b> in {this.data.category ? getCategory(this.data.category) : 'Entertaiment'}
            </span>
          </div>
          {!this.voteSended ? (this.renderForm()) : (this.renderResult())}

        </div>
        <div class="thumb-box__footer">
          <thumb-box-votes data={this.data.votes}></thumb-box-votes>
        </div>
      </article>
    );
  }
}
