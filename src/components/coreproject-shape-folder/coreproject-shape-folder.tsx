import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-folder',
  styleUrl: 'coreproject-shape-folder.css',
  shadow: true,
})
export class CoreprojectShapeFolder {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  @Prop() variant: 'default' | 'minus' | 'plus' = 'default';
  svg_element: SVGElement;

  @Watch('_style')
  watchStyle(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
  }

  @Watch('height')
  watchHeight(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
  }

  @Watch('width')
  watchWidth(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
  }

  render() {
    return (
      <Host>
        <svg
          ref={el => (this.svg_element = el as SVGElement)}
          width={this.width}
          height={this.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'currentColor' }}
        >
          {this.variant === 'default' && (
            <path
              d="M27.5 23.75C27.5 24.413 27.2366 25.0489 26.7678 25.5178C26.2989 25.9866 25.663 26.25 25 26.25H5C4.33696 26.25 3.70107 25.9866 3.23223 25.5178C2.76339 25.0489 2.5 24.413 2.5 23.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H11.25L13.75 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V23.75Z"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
          {this.variant === 'minus' && (
            <g>
              <path
                d="M27.5 23.75C27.5 24.413 27.2366 25.0489 26.7678 25.5178C26.2989 25.9866 25.663 26.25 25 26.25H5C4.33696 26.25 3.70107 25.9866 3.23223 25.5178C2.76339 25.0489 2.5 24.413 2.5 23.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H11.25L13.75 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V23.75Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 17.5H18.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'plus' && (
            <g>
              <path
                d="M27.5 23.75C27.5 24.413 27.2366 25.0489 26.7678 25.5178C26.2989 25.9866 25.663 26.25 25 26.25H5C4.33696 26.25 3.70107 25.9866 3.23223 25.5178C2.76339 25.0489 2.5 24.413 2.5 23.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H11.25L13.75 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V23.75Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 13.75V21.25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 17.5H18.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
        </svg>
      </Host>
    );
  }
}
