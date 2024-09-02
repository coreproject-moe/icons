import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-delete",
	shadow: true,
	styleUrl: "coreproject-shape-delete.css"
})
export class CoreprojectShapeDelete {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M26.25 2H10L1.25 12L10 22H26.25C26.913 22 27.5489 21.7366 28.0178 21.2678C28.4866 20.7989 28.75 20.163 28.75 19.5V4.5C28.75 3.83696 28.4866 3.20107 28.0178 2.73223C27.5489 2.26339 26.913 2 26.25 2V2Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M22.5 8.25L15 15.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15 8.25L22.5 15.75"
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
