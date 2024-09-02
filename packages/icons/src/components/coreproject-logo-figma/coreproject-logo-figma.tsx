import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-logo-figma",
	shadow: true,
	styleUrl: "coreproject-logo-figma.css"
})
export class CoreprojectLogoFigma {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 22 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M2.25 5.875C2.25 4.71468 2.71094 3.60188 3.53141 2.78141C4.35188 1.96094 5.46468 1.5 6.625 1.5H11V10.25H6.625C5.46468 10.25 4.35188 9.78906 3.53141 8.96859C2.71094 8.14812 2.25 7.03532 2.25 5.875Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11 1.5H15.375C15.9495 1.5 16.5184 1.61316 17.0492 1.83303C17.58 2.05289 18.0623 2.37515 18.4686 2.78141C18.8748 3.18766 19.1971 3.66996 19.417 4.20076C19.6368 4.73156 19.75 5.30047 19.75 5.875C19.75 6.44953 19.6368 7.01844 19.417 7.54924C19.1971 8.08004 18.8748 8.56234 18.4686 8.96859C18.0623 9.37485 17.58 9.69711 17.0492 9.91697C16.5184 10.1368 15.9495 10.25 15.375 10.25H11V1.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11 14.625C11 14.0505 11.1132 13.4816 11.333 12.9508C11.5529 12.42 11.8752 11.9377 12.2814 11.5314C12.6877 11.1252 13.17 10.8029 13.7008 10.583C14.2316 10.3632 14.8005 10.25 15.375 10.25C15.9495 10.25 16.5184 10.3632 17.0492 10.583C17.58 10.8029 18.0623 11.1252 18.4686 11.5314C18.8748 11.9377 19.1971 12.42 19.417 12.9508C19.6368 13.4816 19.75 14.0505 19.75 14.625C19.75 15.1995 19.6368 15.7684 19.417 16.2992C19.1971 16.83 18.8748 17.3123 18.4686 17.7186C18.0623 18.1248 17.58 18.4471 17.0492 18.667C16.5184 18.8868 15.9495 19 15.375 19C14.8005 19 14.2316 18.8868 13.7008 18.667C13.17 18.4471 12.6877 18.1248 12.2814 17.7186C11.8752 17.3123 11.5529 16.83 11.333 16.2992C11.1132 15.7684 11 15.1995 11 14.625V14.625Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.25 23.375C2.25 22.2147 2.71094 21.1019 3.53141 20.2814C4.35188 19.4609 5.46468 19 6.625 19H11V23.375C11 24.5353 10.5391 25.6481 9.71859 26.4686C8.89812 27.2891 7.78532 27.75 6.625 27.75C5.46468 27.75 4.35188 27.2891 3.53141 26.4686C2.71094 25.6481 2.25 24.5353 2.25 23.375Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.25 14.625C2.25 13.4647 2.71094 12.3519 3.53141 11.5314C4.35188 10.7109 5.46468 10.25 6.625 10.25H11V19H6.625C5.46468 19 4.35188 18.5391 3.53141 17.7186C2.71094 16.8981 2.25 15.7853 2.25 14.625Z"
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
