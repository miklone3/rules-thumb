import { Component, h } from '@stencil/core';


@Component({
  tag: 'blur-box',
  styleUrl: 'blur-box.scss'
})
export class BlurBox {

  render() {
    return (
      <slot />
    );
  }
}
