import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-copy",
	shadow: true,
	styleUrl: "coreproject-shape-copy.css"
})
export class CoreprojectShapeCopy {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

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
				>
					<path
						d="M24 10.25H12.75C11.3693 10.25 10.25 11.3693 10.25 12.75V24C10.25 25.3807 11.3693 26.5 12.75 26.5H24C25.3807 26.5 26.5 25.3807 26.5 24V12.75C26.5 11.3693 25.3807 10.25 24 10.25Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5.25 17.75H4C3.33696 17.75 2.70107 17.4866 2.23223 17.0178C1.76339 16.5489 1.5 15.913 1.5 15.25V4C1.5 3.33696 1.76339 2.70107 2.23223 2.23223C2.70107 1.76339 3.33696 1.5 4 1.5H15.25C15.913 1.5 16.5489 1.76339 17.0178 2.23223C17.4866 2.70107 17.75 3.33696 17.75 4V5.25"
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
