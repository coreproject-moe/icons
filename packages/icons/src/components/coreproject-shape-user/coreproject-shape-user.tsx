import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-user",
	shadow: true,
	styleUrl: "coreproject-shape-user.css"
})
export class CoreprojectShapeUser {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "normal" | "check" | "minus" | "plus" | "x";

	render() {
		if (this.variant === "normal") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M22 24.25V21.75C22 20.4239 21.4732 19.1521 20.5355 18.2145C19.5979 17.2768 18.3261 16.75 17 16.75H7C5.67392 16.75 4.40215 17.2768 3.46447 18.2145C2.52678 19.1521 2 20.4239 2 21.75V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 11.75C14.7614 11.75 17 9.51142 17 6.75C17 3.98858 14.7614 1.75 12 1.75C9.23858 1.75 7 3.98858 7 6.75C7 9.51142 9.23858 11.75 12 11.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "check") {
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
							d="M20 24.25V21.75C20 20.4239 19.4732 19.1521 18.5355 18.2145C17.5979 17.2768 16.3261 16.75 15 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.625 11.75C13.3864 11.75 15.625 9.51142 15.625 6.75C15.625 3.98858 13.3864 1.75 10.625 1.75C7.86358 1.75 5.625 3.98858 5.625 6.75C5.625 9.51142 7.86358 11.75 10.625 11.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M21.25 11.75L23.75 14.25L28.75 9.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "minus") {
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
							d="M20 24.25V21.75C20 20.4239 19.4732 19.1521 18.5355 18.2145C17.5979 17.2768 16.3261 16.75 15 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.625 11.75C13.3864 11.75 15.625 9.51142 15.625 6.75C15.625 3.98858 13.3864 1.75 10.625 1.75C7.86358 1.75 5.625 3.98858 5.625 6.75C5.625 9.51142 7.86358 11.75 10.625 11.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M28.75 11.75H21.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "plus") {
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
							d="M20 24.25V21.75C20 20.4239 19.4732 19.1521 18.5355 18.2145C17.5979 17.2768 16.3261 16.75 15 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.625 11.75C13.3864 11.75 15.625 9.51142 15.625 6.75C15.625 3.98858 13.3864 1.75 10.625 1.75C7.86358 1.75 5.625 3.98858 5.625 6.75C5.625 9.51142 7.86358 11.75 10.625 11.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M25 8V15.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M28.75 11.75H21.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "x") {
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
							d="M20 24.25V21.75C20 20.4239 19.4732 19.1521 18.5355 18.2145C17.5979 17.2768 16.3261 16.75 15 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.625 11.75C13.3864 11.75 15.625 9.51142 15.625 6.75C15.625 3.98858 13.3864 1.75 10.625 1.75C7.86358 1.75 5.625 3.98858 5.625 6.75C5.625 9.51142 7.86358 11.75 10.625 11.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22.5 8L28.75 14.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M28.75 8L22.5 14.25"
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
}
