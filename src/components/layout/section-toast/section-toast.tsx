import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'section-toast',
  styleUrl: 'section-toast.scss'
})
export class SectionToast {

  @State() hide: boolean;

  onClose = () => {
    this.hide = true;
  }

  hostData() {
    return {
      class: {
        'section-toast--hide': this.hide
      }
    }
  }

  render() {
    return [
      <div class="section-toast__body">
        <slot />
      </div>,
      <a href="javascript:void(0)" class="section-toast__times" onClick={this.onClose}>
        <i class="icon-times"></i>
      </a>
    ];
  }
}
