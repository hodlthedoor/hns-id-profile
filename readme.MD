# hns-id-react

A React component for displaying HNS.ID profiles with customizable styles and interactions. For use on the Optimism network. Visit [hns.id](https://hns.id) for more information.

You can view a live demo here [https://hns-id-react.vercel.app/](https://hns-id-react.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Development](#development)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install hns-id-react
```

Or using yarn:

```bash
yarn add hns-id-react
```

## Usage

First, import the component in your React file:

```jsx
import { HnsIdProfile } from 'hns-id-react';
```

Then, use it in your component:

```jsx
function App() {
  return (
    <HnsIdProfile address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42" />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| address | `string` | (required) | The Ethereum address to display the profile for |
| coinType | `number` | 614 | The coin type for the address (614 is optimism) |
| rpcUrl | `string` | (optional) | Custom RPC URL for the Optimism network |
| isSepolia | `boolean` | false | Set to true to use Optimism Sepolia testnet |
| backgroundColor | `string` | '#f0f0f0' | Background color of the profile component |
| textColor | `string` | '#000000' | Text color of the profile component |
| fontSize | `string` | '14px' | Font size of the text |
| padding | `string` | '8px 12px' | Padding of the component |
| borderRadius | `string` | '20px' | Border radius of the component |
| isWide | `boolean` | false | If true, uses a wider layout |
| showAvatar | `boolean` | true | Whether to show the avatar |
| useDefaultAvatar | `boolean` | false | If true, uses a default avatar image |
| onClick | `() => void` | (optional) | Function to call when the profile is clicked |
| avatarSize | `number` | 24 | Size of the avatar in pixels |
| showTooltip | `boolean` | false | Whether to show a tooltip on hover |
| customLoadingComponent | `React.ReactNode` | (optional) | Custom component to show while loading |
| customErrorComponent | `React.ReactNode` | (optional) | Custom component to show on error |
| showCopyButton | `boolean` | false | Whether to show a button to copy the address |
| theme | 'light' \| 'dark' | 'light' | Color theme of the component |

## Examples

### Basic Usage

```jsx
<HnsIdProfile address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42" />
```

### With Tooltip and Copy Button

```jsx
<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  showTooltip={true}
  showCopyButton={true}
/>
```

### Custom Styling

```jsx
<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  backgroundColor="#1a1a1a"
  textColor="#ffffff"
  fontSize="16px"
  padding="10px 15px"
  borderRadius="25px"
  theme="dark"
/>
```

### With Click Handler

```jsx
<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  onClick={() => console.log('Profile clicked!')}
/>
```

## Development

To set up the development environment:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

To build the package:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue on the [GitHub repository](https://github.com/hodlthedoor/hns-id-profile/issues).