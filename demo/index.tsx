import React, { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HnsIdProfile from '../src/HnsIdProfile';
import { AlertCircle } from 'lucide-react';
import { Address } from 'viem';

interface CodeSnippetProps {
  children: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children }) => (
  <pre style={{
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    overflowX: 'auto',
    fontSize: '14px'
  }}>
    <code>{children}</code>
  </pre>
);

interface ExampleSectionProps {
  title: string;
  component: ReactNode;
  code: string;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ title, component, code }) => (
  <div style={{ marginBottom: '30px' }}>
    <h2>{title}</h2>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' }}>
      <div>{component}</div>
      <CodeSnippet>{code}</CodeSnippet>
    </div>
  </div>
);

const CustomLoadingComponent: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '8px' }}></div>
    <div style={{ width: '80px', height: '14px', backgroundColor: '#ccc', borderRadius: '7px' }}></div>
  </div>
);

interface CustomErrorComponentProps {
  error: string;
}

const CustomErrorComponent: React.FC<CustomErrorComponentProps> = ({ error }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', backgroundColor: '#fee', borderRadius: '20px', color: '#d00' }}>
    <AlertCircle size={24} style={{ marginRight: '8px' }} />
    <span>Error: {error}</span>
  </div>
);

const App: React.FC = () => {
  const [clickedProfile, setClickedProfile] = useState<string | null>(null);

  const handleClick = (profileName: string) => {
    setClickedProfile(profileName);
  };

  const exampleAddress: Address = '0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42';

  const examples: Array<ExampleSectionProps> = [
    {
      title: "Default Profile",
      component: <HnsIdProfile address={exampleAddress} />,
      code: `<HnsIdProfile address="${exampleAddress}" />`
    },
    {
      title: "Profile with Copy Button",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          showCopyButton={true}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  showCopyButton={true}
/>`
    },
    {
      title: "Dark Theme Profile",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          theme="dark"
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  theme="dark"
/>`
    },
    {
      title: "Custom Avatar Size",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          avatarSize={50}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  avatarSize={50}
/>`
    },
    {
      title: "Wide Profile",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          isWide={true}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  isWide={true}
/>`
    },
    {
      title: "Custom Background and Text Colors",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          backgroundColor="#e6f7ff"
          textColor="#0066cc"
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  backgroundColor="#e6f7ff"
  textColor="#0066cc"
/>`
    },
    {
      title: "Custom Font Size and Padding",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          fontSize="18px"
          padding="12px 20px"
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  fontSize="18px"
  padding="12px 20px"
/>`
    },
    {
      title: "Custom Border Radius",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          borderRadius="10px"
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  borderRadius="10px"
/>`
    },
    {
      title: "Hide Avatar",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          showAvatar={false}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  showAvatar={false}
/>`
    },
    {
      title: "Use Default Avatar",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          defaultAvatar={"data:image/png;base64,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"}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  defaultAvatar={dataUrl} // can use http path also
/>`
    },
    {
      title: "Custom Loading Component",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          customLoadingComponent={<CustomLoadingComponent />}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  customLoadingComponent={<CustomLoadingComponent />}
/>`
    },
    {
      title: "Custom Error Component",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          customErrorComponent={<CustomErrorComponent error="Failed to load" />}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  customErrorComponent={<CustomErrorComponent error="Failed to load" />}
/>`
    },
    {
      title: "Profile with onClick",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          onClick={() => handleClick("Default")}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  onClick={() => handleClick("Default")}
/>`
    },
    {
      title: "Fully Customized Profile",
      component: (
        <HnsIdProfile 
          address={exampleAddress}
          isWide={true}
          showTooltip={true}
          showCopyButton={true}
          theme="dark"
          avatarSize={28}
          backgroundColor="#ee11bf"
          textColor="#ffffff"
          fontSize="16px"
          padding="10px 15px"
          borderRadius="25px"
          onClick={() => handleClick("Fully Customized")}
        />
      ),
      code: `<HnsIdProfile 
  address="${exampleAddress}"
  isWide={true}
  showTooltip={true}
  showCopyButton={true}
  theme="dark"
  avatarSize={28}
  backgroundColor="#ee11bf"
  textColor="#ffffff"
  fontSize="16px"
  padding="10px 15px"
  borderRadius="25px"
  onClick={() => handleClick("Fully Customized")}
/>`
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>HNS.ID Profile Demo</h1>
      
      {examples.map((example, index) => (
        <ExampleSection 
          key={index}
          title={example.title}
          component={example.component}
          code={example.code}
        />
      ))}

      {clickedProfile && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6f7ff', borderRadius: '5px' }}>
          Last clicked profile: {clickedProfile}
        </div>
      )}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

export default App;