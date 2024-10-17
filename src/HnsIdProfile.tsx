import React, { useState, useEffect } from 'react';
import { createPublicClient, http, Address } from 'viem';
import { optimism, sepolia } from 'viem/chains';
import contractABI from './abi.json';
import { MAINNET_CONTRACT_ADDRESS, SEPOLIA_CONTRACT_ADDRESS } from './exports';
import { User, Copy, Check } from 'lucide-react';

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

const HnsIdProfile: React.FC<HnsIdProfileProps> = ({
  address,
  coinType = 614,
  rpcUrl,
  isSepolia = false,
  backgroundColor,
  textColor,
  fontSize = '14px',
  padding = '8px 12px',
  borderRadius = '20px',
  isWide = false,
  showAvatar = true,
  useDefaultAvatar = false,
  onClick,
  avatarSize = 24,
  showTooltip = false,
  customLoadingComponent,
  customErrorComponent,
  showCopyButton = false,
  theme = 'light',
}) => {
  const [name, setName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [showTooltipContent, setShowTooltipContent] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contractAddress = isSepolia ? SEPOLIA_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS;
        const chain = isSepolia ? sepolia : optimism;
        const defaultRpcUrl = isSepolia ? 'https://sepolia.optimism.io' : 'https://mainnet.optimism.io';

        const client = createPublicClient({
          chain,
          transport: http(rpcUrl || defaultRpcUrl)
        });

        const contract = {
          address: contractAddress as Address,
          abi: contractABI,
        }

        const nameResult = await client.multicall({
          contracts: [
            {
              ...contract,
              functionName: 'getName',
              args: [address, BigInt(coinType)],
            },
            {
              ...contract,
              functionName: 'getText',
              args: [address, 'avatar', BigInt(coinType)],
            },
          ],
          multicallAddress: '0xca11bde05977b3631167028862be2a173976ca11',
          allowFailure: false,
        }) as [string, string];

        setName(nameResult[0]);
        setAvatar(nameResult[1]);

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      }
    };

    fetchData();
  }, [address, coinType, rpcUrl, isSepolia]);

  const themeStyles = {
    light: {
      backgroundColor: backgroundColor || '#f0f0f0',
      textColor: textColor || '#000000',
    },
    dark: {
      backgroundColor: backgroundColor || '#2a2a2a',
      textColor: textColor || '#ffffff',
    },
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: themeStyles[theme].backgroundColor,
    color: themeStyles[theme].textColor,
    fontSize,
    padding,
    borderRadius,
    overflow: 'hidden',
    width: isWide ? '200px' : '120px',
    cursor: onClick ? 'pointer' : 'default',
    position: 'relative',
  };

  const avatarStyle: React.CSSProperties = {
    width: `${avatarSize}px`,
    height: `${avatarSize}px`,
    borderRadius: '50%',
    marginRight: '8px',
    flexShrink: 0,
  };

  const nameStyle: React.CSSProperties = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexGrow: 1,
    minWidth: 0,
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
    color: theme === 'light' ? '#fff' : '#333',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    opacity: showTooltipContent ? 1 : 0,
    transition: 'opacity 0.3s',
    pointerEvents: 'none',
  };

  const copyButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    marginLeft: '4px',
    color: themeStyles[theme].textColor,
  };

  if (loading) {
    return customLoadingComponent || (
      <div style={{
        ...containerStyle,
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return customErrorComponent || (
      <div style={{ color: 'red', width: containerStyle.width }}>Error: {error}</div>
    );
  }

  const truncateAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  const displayName = name || truncateAddress(address);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={containerStyle} 
      onClick={onClick}
      onMouseEnter={() => setShowTooltipContent(true)}
      onMouseLeave={() => setShowTooltipContent(false)}
    >
      {showAvatar && (
        useDefaultAvatar ? (
          <img src="default.png" alt="Default Avatar" style={avatarStyle} />
        ) : avatar ? (
          <img src={avatar} alt="Avatar" style={avatarStyle} />
        ) : (
          <User style={avatarStyle} />
        )
      )}
      <span style={nameStyle}>{displayName}</span>
      {showCopyButton && (
        <button onClick={handleCopy} style={copyButtonStyle}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
      {showTooltip && (
        <div style={tooltipStyle}>
          {name ? `${name} (${address})` : address}
        </div>
      )}
    </div>
  );
};

export default HnsIdProfile;