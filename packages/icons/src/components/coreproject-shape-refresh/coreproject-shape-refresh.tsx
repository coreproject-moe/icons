import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-refresh",
	shadow: true,
	styleUrl: "coreproject-shape-refresh.css"
})
export class CoreprojectShapeRefresh {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M28.75 3V10.5H21.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1.25 23V15.5H8.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M4.3875 9.24997C5.02146 7.45845 6.09892 5.85673 7.51933 4.59425C8.93975 3.33176 10.6568 2.44968 12.5104 2.0303C14.3639 1.61091 16.2934 1.6679 18.119 2.19594C19.9445 2.72398 21.6066 3.70586 22.95 5.04997L28.75 10.5M1.25 15.5L7.05 20.95C8.39343 22.2941 10.0555 23.276 11.881 23.804C13.7066 24.332 15.6361 24.389 17.4896 23.9697C19.3432 23.5503 21.0602 22.6682 22.4807 21.4057C23.9011 20.1432 24.9785 18.5415 25.6125 16.75"
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
