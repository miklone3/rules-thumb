import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss'
})
export class AppFooter {

  render() {
    return [
      <div class="app-footer-content" key="footer-left">
        <ul class="app-list app-list--inline">
          <li class="app-list__item">
            <stencil-route-link anchorClass="app-footer__link" url="/terms">Terms ad Conditions</stencil-route-link>
          </li>
          <li class="app-list__item">
            <stencil-route-link anchorClass="app-footer__link" url="/privacy">Privacy</stencil-route-link>
          </li>
          <li class="app-list__item">
            <stencil-route-link anchorClass="app-footer__link" url="/contact-us">Contact Us</stencil-route-link>
          </li>
        </ul>
      </div>,
      <div class="app-footer-content" key="footer-right">
        <p class="app-footer__caption">
          Follow Us
        </p>
        <ul class="app-list app-list--inline">
          <li class="app-list__item">
            <a class="app-footer__link-social icon-facebook" href="https://www.facebook.com/" target="_blank">
              <i class="icon-facebook"></i>
            </a>
          </li>
          <li class="app-list__item">
            <a class="app-footer__link-social icon-twitter" href="https://www.twitter.com/" target="_blank">
              <i class="icon-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    ];
  }
}
