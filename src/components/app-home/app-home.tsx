import { Component, h, State, Listen } from '@stencil/core';
import { getDatabase } from '../../services/core';
import { getDatesDiff } from '../../services/time';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @State() pastTrials: any[];
  @State() currentTrial: any;

  @Listen('ON_DATA_CHANGE')
  onDataChange() {
    this.loadDatabase();
  }

  async componentWillLoad() {
    this.loadDatabase();
  }

  async loadDatabase() {
    const database = await getDatabase();
    this.currentTrial = database.pastTrials.find(t => t.currentPastTrials);
    this.pastTrials = database.pastTrials.filter(t => !t.currentPastTrials);
  }

  render() {
    return (

      <stencil-route-title pageTitle="Home" >
        <div class="app-home-shadow" />
        <section-screen background={this.currentTrial.image}>
          <section class='app-home'>
            <div class="app-home__content">
              <thumb-main data={this.currentTrial}></thumb-main>
            </div>
            <footer class="app-home__footer">
              <div class="app-home-counter">
                <div class="app-home-counter__left">closing in</div>
                <div class="app-home-counter__right">
                  <b>{Math.abs(getDatesDiff(this.currentTrial.time))}</b> days
                </div>
              </div>

            </footer>
          </section>
        </section-screen>
        <section class="app-home-wrapper">
          <section-toast>
            <div class="app-home-notification">
              <div class="app-home-notification__slogan">
                <span class="app-home-notification__slogan-text">Speak out. Be heard.</span>
                <span class="app-home-notification__slogan-text app-home-notification__slogan-text--strong">Be counted</span>
              </div>
              <div class="app-home-notification__desc">
                Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
              </div>
            </div>
          </section-toast>
          <h2 class="section-title">
            Votes
          </h2>

          <ul class="app-list-two-columns">
            {this.pastTrials.map(item => (
              <li class="app-list-two-columns__item">
                <thumb-box key={item.id} data={item} />
              </li>
            ))}

          </ul>

          <thumb-banner></thumb-banner>
        </section>
      </stencil-route-title>

    );
  }
}
