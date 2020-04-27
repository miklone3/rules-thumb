import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {

  render() {
    return (
      [
        <div class="app-header-content app-header-content__left">
          <stencil-route-link anchorClass="app-header__link" url="/" exact={true}>
            <h1 class="app-header__title">Rule of Thumb.</h1>
          </stencil-route-link>
        </div>,
        <div class="app-header-content app-header-content__right">
          <nav class="app-header-nav">
            <ul class="app-list app-list--inline">
              <li>
                <stencil-route-link anchorClass="app-header__link" url="/past-trial" exact={true} activeClass="app-header__link--active">Past Trials</stencil-route-link>
              </li>
              <li>
                <stencil-route-link anchorClass="app-header__link" url="/how-it-works" activeClass="app-header__link--active">How It Works</stencil-route-link>
              </li>
              <li>
                <stencil-route-link anchorClass="app-header__link" url="/profile" activeClass="app-header__link--active">Log In / Sign Up</stencil-route-link>
              </li>
            </ul>
          </nav>
          <a href="javascript:void(0)" class="app-header__search">
            <i class="icon-search"></i>
          </a>
        </div>
      ]
    );
  }

}
