import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-forum",
	shadow: true,
	styleUrl: "coreproject-shape-forum.css"
})
export class CoreprojectShapeForum {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M22.999 5.5H22.499C22.0847 5.5 21.749 5.83579 21.749 6.25V15.5001C21.749 16.1875 21.1865 16.75 20.4989 16.75H6.24902C5.83481 16.75 5.49902 17.0857 5.49902 17.5V18C5.49902 19.375 6.62402 20.5 7.99902 20.5H20.1883C20.3873 20.5 20.578 20.5791 20.7187 20.7196L24.2186 24.2197C24.6911 24.6922 25.499 24.3576 25.499 23.6893V8C25.499 6.62499 24.374 5.5 22.999 5.5ZM19.249 11.75V2.99999C19.249 1.625 18.124 0.5 16.7489 0.5H2.99901C1.62402 0.5 0.499023 1.625 0.499023 2.99999V17.4394C0.499023 18.1075 1.30688 18.4422 1.77935 17.9697L5.27934 14.4697C5.42 14.329 5.61077 14.25 5.80968 14.25H16.7489C18.124 14.25 19.249 13.125 19.249 11.75Z"
						fill="currentColor"
					/>
				</svg>
			</Host>
		);
	}
}
