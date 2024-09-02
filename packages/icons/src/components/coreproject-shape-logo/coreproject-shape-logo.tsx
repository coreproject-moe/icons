import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-logo",
	shadow: true,
	styleUrl: "coreproject-shape-logo.css"
})
export class CoreprojectShapeLogo {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 199 320"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M99.3109 320C154.159 320 198.622 275.537 198.622 220.689C198.622 165.841 154.159 121.378 99.3109 121.378C44.463 121.378 0 165.841 0 220.689C0 275.537 44.463 320 99.3109 320ZM99.3146 264.829C123.691 264.829 143.453 245.068 143.453 220.691C143.453 196.314 123.691 176.553 99.3146 176.553C74.9377 176.553 55.1764 196.314 55.1764 220.691C55.1764 245.068 74.9377 264.829 99.3146 264.829Z"
						fill="#7569E1"
					/>
					<circle cx="99.3116" cy="33.1036" r="33.1036" fill="#F2C94C" />
				</svg>
			</Host>
		);
	}
}
