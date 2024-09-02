import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-hard-drive",
	shadow: true,
	styleUrl: "coreproject-shape-hard-drive.css"
})
export class CoreprojectShapeHardDrive {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M26.5 12H1.5"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5.8125 3.3875L1.5 12V19.5C1.5 20.163 1.76339 20.7989 2.23223 21.2678C2.70107 21.7366 3.33696 22 4 22H24C24.663 22 25.2989 21.7366 25.7678 21.2678C26.2366 20.7989 26.5 20.163 26.5 19.5V12L22.1875 3.3875C21.9805 2.97098 21.6615 2.62046 21.2662 2.37535C20.8709 2.13024 20.4151 2.00025 19.95 2H8.05C7.58489 2.00025 7.12908 2.13024 6.73381 2.37535C6.33853 2.62046 6.01947 2.97098 5.8125 3.3875V3.3875Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.5 17H6.5125"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.5 17H11.5125"
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
