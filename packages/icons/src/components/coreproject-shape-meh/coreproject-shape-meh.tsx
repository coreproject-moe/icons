import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-meh",
	shadow: true,
	styleUrl: "coreproject-shape-meh.scss"
})
export class CoreprojectShapeMeh {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-svg-scope-marker-0d=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="8" y1="15" x2="16" y2="15"></line>
					<line x1="9" y1="9" x2="9.01" y2="9"></line>
					<line x1="15" y1="9" x2="15.01" y2="9"></line>
				</svg>
			</Host>
		);
	}
}
