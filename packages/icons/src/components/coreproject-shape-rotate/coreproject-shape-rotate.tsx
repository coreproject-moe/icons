import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-rotate",
	shadow: true,
	styleUrl: "coreproject-shape-rotate.css"
})
export class CoreprojectShapeRotate {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M26.75 3V10.5H19.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M23.6126 16.75C22.8001 19.0499 21.262 21.0234 19.2303 22.3731C17.1985 23.7229 14.7832 24.3757 12.3481 24.2333C9.91307 24.0908 7.59029 23.1608 5.72979 21.5834C3.86929 20.0059 2.57187 17.8665 2.03305 15.4876C1.49423 13.1086 1.74319 10.619 2.74242 8.39385C3.74165 6.16871 5.43702 4.3286 7.57304 3.15082C9.70906 1.97304 12.17 1.52139 14.585 1.86395C17.0001 2.2065 19.2384 3.32469 20.9626 5.05002L26.7501 10.5"
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
