import { Component, h, State, Listen } from '@stencil/core';
import { getDatabase } from '../../services/core';


@Component({
  tag: 'app-past-trials',
  styleUrl: 'app-past-trials.scss'
})
export class AppPastTrials {
  @State() pastTrials: any[];
  @State() categories: any;

  @Listen('ON_DATA_CHANGE')
  onDataChange() {
    this.loadDatabase();
  }

  async componentWillLoad() {
    this.loadDatabase();
  }

  async loadDatabase() {
    const database = await getDatabase();
    this.pastTrials = database.pastTrials;
  }

  render() {
    return (
      <stencil-route-title pageTitle="Past Trials" >
        <div class="app-past-trials-header"></div>

        <section class="app-past-trials">
          <h2 class="section-title">
            Past Trials
          </h2>
          <ul class="app-list-three-columns">
            {this.pastTrials.map(item => (
              <li class="app-list-three-columns__item">
                <thumb-box key={item.id} data={item} tiny={true} />
              </li>
            ))}
          </ul>
        </section>
      </stencil-route-title>
    );
  }
}
