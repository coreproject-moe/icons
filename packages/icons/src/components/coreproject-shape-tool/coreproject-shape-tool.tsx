import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-tool",
	shadow: true,
	styleUrl: "coreproject-shape-tool.css"
})
export class CoreprojectShapeTool {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M16.3749 6.87516C16.1459 7.10882 16.0176 7.42297 16.0176 7.75016C16.0176 8.07735 16.1459 8.3915 16.3749 8.62516L18.3749 10.6252C18.6086 10.8542 18.9227 10.9825 19.2499 10.9825C19.5771 10.9825 19.8913 10.8542 20.1249 10.6252L24.8374 5.91266C25.466 7.30164 25.6563 8.8492 25.383 10.3491C25.1097 11.849 24.3858 13.23 23.3078 14.308C22.2297 15.386 20.8488 16.1099 19.3489 16.3832C17.849 16.6565 16.3014 16.4662 14.9124 15.8377L6.27494 24.4752C5.77766 24.9724 5.1032 25.2518 4.39994 25.2518C3.69668 25.2518 3.02222 24.9724 2.52494 24.4752C2.02766 23.9779 1.74829 23.3034 1.74829 22.6002C1.74829 21.8969 2.02766 21.2224 2.52494 20.7252L11.1624 12.0877C10.5339 10.6987 10.3436 9.15112 10.6169 7.65123C10.8902 6.15134 11.614 4.77035 12.6921 3.69231C13.7701 2.61427 15.1511 1.89037 16.651 1.61709C18.1509 1.3438 19.6985 1.53411 21.0874 2.16266L16.3874 6.86266L16.3749 6.87516Z"
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
