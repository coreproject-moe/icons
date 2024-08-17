import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-language',
    styleUrl: 'coreproject-shape-language.css',
    shadow: true,
})
export class CoreprojectShapeLanguage {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5388 12.0572C10.6519 11.7536 10.5765 11.4119 10.346 11.1841L8.74376 9.60081C8.66778 9.52573 8.66433 9.40428 8.73474 9.32395C10.0521 7.821 11.0686 6.04288 11.6803 4.14053C11.7071 4.05709 11.7844 3.99999 11.8721 3.99999H13.333C13.7932 3.99999 14.1663 3.62689 14.1663 3.16666C14.1663 2.70642 13.7932 2.33332 13.333 2.33332H8.33301V1.49999C8.33301 1.03975 7.95991 0.666656 7.49967 0.666656C7.03944 0.666656 6.66634 1.03975 6.66634 1.49999V2.33332H1.66634C1.2061 2.33332 0.833008 2.70642 0.833008 3.16666C0.833008 3.62689 1.2061 3.99999 1.66634 3.99999H9.85972C9.99741 3.99999 10.0939 4.13585 10.0457 4.26484C9.50884 5.70242 8.70714 7.07353 7.64674 8.29215C7.56886 8.38164 7.43039 8.38179 7.35241 8.29238C6.74997 7.60176 6.23177 6.85983 5.79781 6.08334C5.65624 5.83003 5.39216 5.66666 5.10197 5.66666C4.54126 5.66666 4.17002 6.24377 4.44131 6.73448C4.945 7.64553 5.55458 8.51419 6.2645 9.32382C6.33497 9.40418 6.33145 9.52572 6.25536 9.60077L2.74749 13.0604C2.418 13.3854 2.41616 13.9165 2.74339 14.2437C3.06903 14.5693 3.59699 14.5693 3.92263 14.2437L7.35825 10.8081C7.43636 10.73 7.56299 10.73 7.6411 10.8081L9.18501 12.352C9.60899 12.776 10.3295 12.6191 10.5388 12.0572ZM15.6597 7.9822C15.5133 7.5919 15.1402 7.33332 14.7233 7.33332H14.4427C14.0258 7.33332 13.6527 7.5919 13.5063 7.9822L10.3948 16.2796C10.2036 16.7895 10.5805 17.3333 11.125 17.3333C11.4505 17.3333 11.7418 17.1312 11.8557 16.8262L12.5511 14.9634C12.5803 14.8852 12.655 14.8333 12.7385 14.8333H16.4196C16.5029 14.8333 16.5774 14.8849 16.6068 14.9628L17.3093 16.8278C17.4238 17.132 17.7148 17.3333 18.0398 17.3333C18.5849 17.3333 18.9622 16.7889 18.7708 16.2785L15.6597 7.9822ZM13.5214 13.1667C13.3818 13.1667 13.2851 13.0273 13.3341 12.8966L14.3957 10.059C14.4605 9.88577 14.7055 9.88577 14.7703 10.059L15.832 12.8966C15.8809 13.0273 15.7842 13.1667 15.6446 13.1667H13.5214Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
