import { Component, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'section-screen',
  styleUrl: 'section-screen.scss'
})
export class SectionScreen {
  @Prop() background: string = 'assets/images/background-papa.png';

  render() {
    return (
      <Host
        style={{
          'background-image': `url(${this.background})`,
        }}
      >
        <slot></slot>

      </Host>
    );
  }
}
