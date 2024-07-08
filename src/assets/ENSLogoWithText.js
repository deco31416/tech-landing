const getFillColor = (color) => {
    if (color === 'blue') return '#5d83f6';

    if (color === 'black') return '#011A25';

    return color;
};

export function ENSLogo({ style }) {
    const fill = getFillColor(style);

    return (
        <svg viewBox="0 0 97 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M87.0387 26.3364C81.9936 26.3364 77.781 24.3351 77.2216 19.5545C77.2043 19.4066 77.3109 19.2726 77.4584 19.2538L82.6349 18.5911C82.7969 18.5703 82.9409 18.6946 82.9551 18.8575C83.1628 21.2388 84.8472 22.3147 87.1682 22.3147C89.6293 22.3147 90.8814 21.4065 90.8814 19.8065C90.8814 18.3794 89.2407 17.8605 85.8297 17.0388C81.6848 16.0442 77.8852 14.7469 77.8852 10.2927C77.8852 5.53579 82.0734 3.67627 86.7365 3.67627C91.4006 3.67627 95.3985 5.21935 96.0722 9.94373C96.093 10.0896 95.9923 10.2256 95.8473 10.2503L90.8427 11.1052C90.6793 11.1331 90.5288 11.0112 90.5115 10.8461C90.2799 8.64298 88.8868 7.65477 86.8228 7.65477C85.0526 7.65477 83.5846 8.30344 83.5846 9.817C83.5846 11.2873 85.1389 11.8063 88.0318 12.4549C91.8745 13.3198 96.6671 14.3577 96.6671 19.5038C96.6671 24.6931 92.0904 26.3364 87.0387 26.3364Z"
                fill={fill}
            />
            <path
                d="M73.8403 5.73538C75.5674 7.46516 75.7832 9.80037 75.7832 12.6113V25.8701C75.7832 26.0234 75.6592 26.1477 75.5061 26.1477H69.9725C69.8194 26.1477 69.6953 26.0234 69.6953 25.8701V13.1302C69.6953 11.1409 69.5226 10.1031 68.5727 9.19494C67.7956 8.45979 67.0615 8.33005 65.7662 8.33005C63.9096 8.33005 61.7508 9.58414 61.7508 14.0383V25.8701C61.7508 26.0234 61.6267 26.1477 61.4737 26.1477H55.9832C55.8301 26.1477 55.7061 26.0234 55.7061 25.8701V4.49938C55.7061 4.34609 55.8301 4.22182 55.9832 4.22182H61.4305C61.5835 4.22182 61.7076 4.34609 61.7076 4.49938V6.85266C61.7076 6.98561 61.9049 7.02764 61.9667 6.90999C63.1815 4.59857 65.4906 3.70288 68.0978 3.70288C70.8611 3.70288 72.4586 4.35155 73.8403 5.73538Z"
                fill={fill}
            />
            <path
                d="M50.9229 6.45725C53.0191 8.59229 54.0751 11.8373 54.164 15.9467C54.1673 16.0978 54.0478 16.223 53.8971 16.2278L38.654 16.7104C38.4997 16.7153 38.3788 16.8462 38.3894 17.0004C38.6258 20.4417 40.4009 22.1499 43.5529 22.0501C46.2126 21.9659 47.555 20.7598 47.9728 18.6512C48.0004 18.5116 48.1248 18.4103 48.2667 18.4183L53.5757 18.7186C53.7466 18.7282 53.868 18.8905 53.826 19.0568C52.646 23.7284 49.1321 26.1568 43.688 26.3292C40.3218 26.4357 37.6121 25.4399 35.7437 23.7251C33.6081 21.7592 32.4824 18.9393 32.3678 15.3085C32.2586 11.8507 33.1153 8.88148 35.1658 6.78305C37.0059 4.86435 39.5639 3.78824 42.93 3.68167C46.3392 3.57373 49.049 4.5696 50.9229 6.45725ZM43.0623 7.8743C41.2929 7.93032 40.0578 8.48862 39.272 9.59515C38.7439 10.3214 38.4365 11.2201 38.3159 12.2598C38.2968 12.4241 38.4302 12.5639 38.5953 12.5587L47.6044 12.2734C47.7679 12.2683 47.8918 12.1229 47.8663 11.961C47.677 10.7595 47.2956 9.75413 46.5543 9.01847C45.7071 8.17996 44.6159 7.82512 43.0623 7.8743Z"
                fill={fill}
            />
            <path
                d="M12.8059 0.278909L4.52032 13.9123C4.45534 14.0192 4.30436 14.0311 4.22376 13.9354C3.49433 13.0693 0.776816 9.38466 4.13946 6.02631C7.20789 2.96181 11.1162 0.776893 12.5647 0.0217387C12.729 -0.0639373 12.9021 0.120655 12.8059 0.278909Z"
                fill={fill}
            />
            <path
                d="M12.3428 29.9655C12.5082 30.0812 12.7119 29.8838 12.6011 29.7153C10.7504 26.9004 4.59842 17.5346 3.74859 16.1286C2.91038 14.7419 1.26174 12.4373 1.12421 10.4656C1.11048 10.2687 0.838295 10.2288 0.769825 10.4139C0.6594 10.7124 0.541837 11.0687 0.432269 11.4758C-0.950933 16.614 1.0579 22.0665 5.42067 25.1202L12.3428 29.9655V29.9655Z"
                fill={fill}
            />
            <path
                d="M13.4817 29.7198L21.7673 16.0864C21.8323 15.9795 21.9833 15.9676 22.0639 16.0633C22.7933 16.9294 25.5108 20.614 22.1482 23.9724C19.0798 27.0369 15.1715 29.2218 13.723 29.9769C13.5587 30.0626 13.3855 29.878 13.4817 29.7198Z"
                fill={fill}
            />
            <path
                d="M13.9441 0.0346591C13.7788 -0.0810829 13.575 0.116302 13.6859 0.284863C15.5366 3.09974 21.6886 12.4655 22.5384 13.8715C23.3766 15.2582 25.0252 17.5628 25.1628 19.5346C25.1765 19.7314 25.4487 19.7714 25.5172 19.5863C25.6276 19.2877 25.7451 18.9314 25.8547 18.5243C27.2379 13.3861 25.2291 7.93365 20.8663 4.87989L13.9441 0.0346591Z"
                fill={fill}
            />
        </svg>
    );
}
