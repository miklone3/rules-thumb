import { Component, h } from '@stencil/core';


@Component({
  tag: 'thumb-banner',
  styleUrl: 'thumb-banner.scss'
})
export class ThumbBanner {

  render() {
    return (
      <div class="thumb-banner">
        <div class="thumb-banner__body">
          <p class="thumb-banner-text">Is there anyone el you would want us to add?</p>
        </div>
        <div class="thumb-banner__action">
          <stencil-route-link anchorClass="thumb-banner-submit" url="/submit">Submit a Name</stencil-route-link>
        </div>
      </div>
    );
  }
}
