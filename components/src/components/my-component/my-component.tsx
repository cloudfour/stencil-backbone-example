import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Whether or not the component is checked
   */
  @Prop() checked: boolean;

  render() {
    return <label><input type="checkbox" checked={this.checked}/><slot /></label>;
  }
}
