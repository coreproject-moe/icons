import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-zap-off",
	shadow: true,
	styleUrl: "coreproject-shape-zap-off.css"
})
export class CoreprojectShapeZapOff {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
					<polyline points="18.57 12.91 21 10 15.66 10"></polyline>
					<polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
					<line x1="1" y1="1" x2="23" y2="23"></line>
				</svg>
			</Host>
		);
	}
}
