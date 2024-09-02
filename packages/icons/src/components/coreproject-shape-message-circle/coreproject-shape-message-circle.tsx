import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-message-circle",
	shadow: true,
	styleUrl: "coreproject-shape-message-circle.css"
})
export class CoreprojectShapeMessageCircle {
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
						d="M24.25 12.375C24.2543 14.0249 23.8688 15.6524 23.125 17.125C22.243 18.8897 20.8872 20.374 19.2093 21.4116C17.5314 22.4493 15.5978 22.9993 13.625 23C11.9752 23.0043 10.3476 22.6189 8.875 21.875L1.75 24.25L4.125 17.125C3.38116 15.6524 2.9957 14.0249 3 12.375C3.00076 10.4022 3.55076 8.4686 4.5884 6.79072C5.62603 5.11285 7.11032 3.75699 8.875 2.87504C10.3476 2.1312 11.9752 1.74573 13.625 1.75004H14.25C16.8554 1.89378 19.3163 2.99349 21.1614 4.83861C23.0065 6.68373 24.1063 9.1446 24.25 11.75V12.375Z"
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
