import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-minimize",
	shadow: true,
	styleUrl: "coreproject-shape-minimize.css"
})
export class CoreprojectShapeMinimize {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M8 1.75V5.5C8 6.16304 7.73661 6.79893 7.26777 7.26777C6.79893 7.73661 6.16304 8 5.5 8H1.75M24.25 8H20.5C19.837 8 19.2011 7.73661 18.7322 7.26777C18.2634 6.79893 18 6.16304 18 5.5V1.75M18 24.25V20.5C18 19.837 18.2634 19.2011 18.7322 18.7322C19.2011 18.2634 19.837 18 20.5 18H24.25M1.75 18H5.5C6.16304 18 6.79893 18.2634 7.26777 18.7322C7.73661 19.2011 8 19.837 8 20.5V24.25"
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
