import { Component, h, State, Listen } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  @State() headerScroll: boolean

  @Listen('scroll', { target: 'window' })
  onScroll() {
    this.headerScroll = (document.documentElement.scrollTop > 30);
  }

  render() {
    return [
      <header class={{ 'app-header': true, 'app-header--on-scroll': this.headerScroll }} key="main-header">
        <app-header></app-header>
      </header>,

      <main class="app-main" key="main-content">
        <stencil-router titleSuffix=" - Rules of thumbs">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
            <stencil-route url='/past-trial' component='app-past-trials' exact={true} />
            <stencil-route url='/past-trial/:id' component='app-home' exact={true} />
            <stencil-route url='/how-it-works' component='app-how-works' exact={true} />
            <stencil-route url='/terms' component='app-terms' exact={true} />
            <stencil-route component="page-not-found" />
          </stencil-route-switch>
        </stencil-router>
      </main>,

      <footer class="app-footer" key="main-footer">
        <app-footer></app-footer>
      </footer>
    ];
  }
}
