import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-terms',
  styleUrl: 'app-terms.scss'
})
export class AppTerms {

  render() {
    return [
      <div class="app-terms-header"></div>,

      <section class="app-terms">
        <h1 class="app-terms-title">Terms & Conditions</h1>
        <h2 class="app-terms-caption">Yout Privacy is our main goal. Please read the following terms.</h2>
        <p class="app-terms-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget leo ac tortor sagittis rutrum. Cras eu sodales erat. Nulla ut augue luctus, convallis augue nec, congue dolor. Vivamus a mollis nulla, sit amet dapibus ligula. Pellentesque pharetra vestibulum fermentum. Proin at luctus enim. <br />
          Suspendisse hendrerit ligula justo, eu sodales arcu tincidunt a. Cras fermentum velit eget enim lobortis, semper blandit elit cursus. Sed pellentesque eleifend tellus, id auctor mauris porttitor at. Sed consectetur odio a nibh facilisis, sed auctor velit tincidunt.
        </p>
        <p class="app-terms-desc">
          Ut scelerisque erat a magna tempor gravida ut quis leo. Donec at scelerisque mauris, pulvinar eleifend tortor. Etiam scelerisque metus vel enim pellentesque gravida. Maecenas mattis ac sem porttitor sodales. Fusce eget tortor diam. Duis odio nisi, sagittis in leo et, iaculis convallis nisl. <br />
          Suspendisse sollicitudin blandit nunc, id placerat velit finibus et. Etiam placerat est vel blandit lobortis. Nullam in magna ut diam pulvinar dictum at at eros. Donec at ante porta, eleifend dolor at, congue nulla. Proin vitae cursus nisi, ac aliquet sem. Duis pretium dolor sit amet placerat sodales. <br />
          Phasellus bibendum velit nec neque porttitor, lacinia cursus felis placerat. Nam lectus purus, feugiat nec tellus sit amet, semper convallis nisi.
        </p>
        <p class="app-terms-desc">
          Donec sit amet porta justo, eget porttitor ante. Aliquam a dapibus orci, a volutpat arcu. Etiam varius mauris sit amet elit accumsan, ac accumsan nisi finibus. Suspendisse potenti. Proin ultricies leo vel ex rutrum, in ornare orci viverra. Suspendisse et sem tincidunt, venenatis tellus in, tincidunt massa. Donec bibendum consectetur neque sit amet suscipit. Mauris sit amet magna nec erat porttitor ullamcorper aliquam ac dolor. Etiam imperdiet, neque nec laoreet venenatis, risus nibh pulvinar massa, dictum congue libero nunc ut neque. Praesent nec ligula sollicitudin, blandit nisi id, sollicitudin elit. Pellentesque ut consequat nisl, non posuere leo. Proin eu scelerisque lorem, id commodo eros. Mauris auctor justo eget enim pharetra hendrerit. <br />
          Nulla quis tellus mi. Nullam ut pharetra lorem. Etiam placerat diam efficitur, facilisis eros sit amet, auctor lacus.
        </p>
        <p class="app-terms-desc">
          Vivamus dignissim eu turpis at sodales. Ut lobortis ullamcorper egestas. Sed sed augue sapien. Curabitur tincidunt sapien nec nulla faucibus venenatis. Cras tortor neque, lobortis sit amet velit vel, laoreet vulputate ligula. Phasellus ut blandit enim. In ultrices eros et dolor condimentum, sit amet pretium magna vehicula. Nulla ipsum urna, finibus eu ipsum vel, auctor sagittis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <p class="app-terms-desc">
          Aliquam erat leo, pulvinar sed pellentesque id, fermentum id ex. Ut vehicula massa ante, a sagittis neque tristique vitae. Morbi lobortis nisi ut ligula volutpat, a ultricies dui dictum. Aliquam id mi mattis, scelerisque orci id, feugiat orci. Maecenas sit amet auctor nunc, sed pharetra justo. In ullamcorper lorem iaculis, scelerisque felis sit amet, finibus ex. Vestibulum consequat massa sit amet ultricies pretium. Donec sed suscipit velit, ac consectetur arcu. Praesent vel enim neque. Mauris tincidunt rutrum nunc, bibendum rhoncus ligula feugiat sed. Nam egestas felis id ipsum dapibus, in ornare leo semper. Duis et sagittis mauris. Quisque scelerisque sit amet arcu vitae porttitor. Morbi odio ex, mattis sed turpis in, dignissim volutpat dui.
        </p>
      </section>
    ];
  }
}
