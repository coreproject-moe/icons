import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-thumbs",
	shadow: true,
	styleUrl: "coreproject-shape-thumbs.css"
})
export class CoreprojectShapeThumbs {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "down";

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					class={this?.variant}
				>
					<path
						d="M7.75 26.5H4C3.33696 26.5 2.70107 26.2366 2.23223 25.7678C1.76339 25.2989 1.5 24.663 1.5 24V15.25C1.5 14.587 1.76339 13.9511 2.23223 13.4822C2.70107 13.0134 3.33696 12.75 4 12.75H7.75M16.5 10.25V5.25C16.5 4.25544 16.1049 3.30161 15.4017 2.59835C14.6984 1.89509 13.7446 1.5 12.75 1.5L7.75 12.75V26.5H21.85C22.4529 26.5068 23.038 26.2955 23.4974 25.905C23.9568 25.5145 24.2596 24.9711 24.35 24.375L26.075 13.125C26.1294 12.7667 26.1052 12.4009 26.0042 12.0528C25.9031 11.7048 25.7276 11.3829 25.4898 11.1094C25.252 10.8359 24.9576 10.6174 24.627 10.469C24.2963 10.3206 23.9374 10.2459 23.575 10.25H16.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</Host>
		);
	}
}
