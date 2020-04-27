import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'thumb-main',
  styleUrl: 'thumb-main.scss'
})
export class ThumbMain {
  @Prop() data: any;

  render() {
    return (
      <article class="thumb-main">
        <div class="thumb-main__body">
          <blur-box />
          <div class="thum-main-box">
            <span class="thum-main-box__caption">What’s your opinion on</span>
            <h1 class="thum-main-box__title">{this.data.name}?</h1>
            <p class="thum-main-box__desc">
              {this.data.opinion}
            </p>
            <span class="thum-main-box__more">
              <i class="icon-wikipedia"></i> <a href={this.data.wiki} target="_blank">More information</a>
            </span>
            <span class="thumb-main-votes-title">
              What’s Your Verdict?
            </span>
          </div>
        </div>
        <div class="thumb-main__footer">
          <div class="thumb-main-votes">
            <div class="thumb-main-votes__item thumb-main-votes__item--up">
              <i class="icon-thumb-up"></i>
            </div>
            <div class="thumb-main-votes__item thumb-main-votes__item--down">
              <i class="icon-thumb-down"></i>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
