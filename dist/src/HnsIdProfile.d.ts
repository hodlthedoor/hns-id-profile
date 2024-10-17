import { default as React } from 'react';
import { Address } from 'viem';
interface HnsIdProfileProps {
    address: Address;
    coinType?: number;
    rpcUrl?: string;
    isSepolia?: boolean;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    padding?: string;
    borderRadius?: string;
    isWide?: boolean;
    showAvatar?: boolean;
    useDefaultAvatar?: boolean;
    onClick?: () => void;
    avatarSize?: number;
    showTooltip?: boolean;
    customLoadingComponent?: React.ReactNode;
    customErrorComponent?: React.ReactNode;
    showCopyButton?: boolean;
    theme?: 'light' | 'dark';
}
declare const HnsIdProfile: React.FC<HnsIdProfileProps>;
export default HnsIdProfile;
