import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-how-works',
  styleUrl: 'app-how-works.scss'
})
export class AppHowWorks {

  render() {
    return (
      <stencil-route-title pageTitle="How it work's" >
        <div class="app-how-works-shadow" />
        <section-screen background="assets/images/how-it-works.png">
        </section-screen>

        <section class="app-how-works-wrapper">
          <ul class="app-list-three-columns">
            <li class="app-list-three-columns__item">
              <div class="app-how-works-info">
                <div class="app-how-works-info__img">
                  <img src="assets/images/vote-speak.png" alt="" />
                </div>
                <h2 class="app-how-works-info__title">Vote and speak out</h2>
                <p class="app-how-works-info__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi vitae quos, blanditiis, necessitatibus nihil neque tenetur voluptatem saepe consequatur culpa suscipit cumque placeat. Ea nisi quos nobis dolore possimus?</p>
              </div>
            </li>
            <li class="app-list-three-columns__item">
              <div class="app-how-works-info">
                <div class="app-how-works-info__img">
                  <img src="assets/images/see-reports.png" alt="" />
                </div>
                <h2 class="app-how-works-info__title">See Reports</h2>
                <p class="app-how-works-info__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis in aut. Laboriosam eaque quos dolorem harum. Corrupti, cumque placeat. Nam neque totam quae harum perferendis quas sint dolores! Debitis?</p>
              </div>

            </li>
            <li class="app-list-three-columns__item">
              <div class="app-how-works-info">
                <div class="app-how-works-info__img">
                  <img src="assets/images/share-friends.png" alt="" />
                </div>
                <h2 class="app-how-works-info__title">Share with friends</h2>
                <p class="app-how-works-info__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum debitis nisi, facere rem obcaecati hic soluta aliquam perferendis, eos consequatur dolore natus blanditiis vitae consequuntur amet consectetur fugiat recusandae.</p>
              </div>
            </li>

          </ul>
        </section>
      </stencil-route-title>
    );
  }
}
