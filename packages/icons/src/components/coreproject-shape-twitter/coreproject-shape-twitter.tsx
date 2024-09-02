import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-twitter",
	shadow: true,
	styleUrl: "coreproject-shape-twitter.css"
})
export class CoreprojectShapeTwitter {
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
						d="M28.75 1.74987C27.553 2.59422 26.2276 3.24001 24.825 3.66237C24.0722 2.79676 23.0717 2.18324 21.9588 1.90478C20.8459 1.62632 19.6744 1.69637 18.6026 2.10544C17.5308 2.51451 16.6106 3.24288 15.9662 4.19202C15.3219 5.14116 14.9846 6.26529 15 7.41237V8.66237C12.8033 8.71933 10.6266 8.23214 8.66376 7.24418C6.70093 6.25622 5.0129 4.79817 3.75 2.99987C3.75 2.99987 -1.25 14.2499 10 19.2499C7.42566 20.9973 4.35895 21.8735 1.25 21.7499C12.5 27.9999 26.25 21.7499 26.25 7.37487C26.2488 7.02669 26.2154 6.67937 26.15 6.33737C27.4258 5.07924 28.326 3.49077 28.75 1.74987V1.74987Z"
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
