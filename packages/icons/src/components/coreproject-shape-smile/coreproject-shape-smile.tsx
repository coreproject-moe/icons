import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-smile",
	shadow: true,
	styleUrl: "coreproject-shape-smile.scss"
})
export class CoreprojectShapeSmile {
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
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="0C"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
					<line x1="9" y1="9" x2="9.01" y2="9"></line>
					<line x1="15" y1="9" x2="15.01" y2="9"></line>
				</svg>
			</Host>
		);
	}
}
