import { Component, h } from '@stencil/core';


@Component({
  tag: 'page-not-found'
})
export class PageNotFound {

  render() {
    return (
      <stencil-route-title pageTitle="Page Not found" >
        <div class="app-home-shadow" />
        <section-screen background="assets/images/not-found.jpg">
        </section-screen>
      </stencil-route-title>
    );
  }
}
