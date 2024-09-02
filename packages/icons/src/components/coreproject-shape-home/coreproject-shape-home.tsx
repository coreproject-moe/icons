import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-home",
	shadow: true,
	styleUrl: "coreproject-shape-home.css"
})
export class CoreprojectShapeHome {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M1.75 10.25L13 1.5L24.25 10.25V24C24.25 24.663 23.9866 25.2989 23.5178 25.7678C23.0489 26.2366 22.413 26.5 21.75 26.5H4.25C3.58696 26.5 2.95107 26.2366 2.48223 25.7678C2.01339 25.2989 1.75 24.663 1.75 24V10.25Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M9.25 26.5V14H16.75V26.5"
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
