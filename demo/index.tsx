import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import HnsIdProfile from '../src/HnsIdProfile';

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
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
      <div>{component}</div>
      <CodeSnippet>{code}</CodeSnippet>
    </div>
  </div>
);

const App: React.FC = () => {
  const examples = [
    {
      title: "Default Profile",
      component: <HnsIdProfile address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42" />,
      code: `<HnsIdProfile address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42" />`
    },
    {
      title: "Profile with onClick",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          onClick={() => alert('Profile clicked!')}
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  onClick={() => alert('Profile clicked!')}
/>`
    },
    {
      title: "Profile with Tooltip",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          showTooltip={true}
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  showTooltip={true}
/>`
    },
    {
      title: "Profile with Copy Button",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          showCopyButton={true}
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  showCopyButton={true}
/>`
    },
    {
      title: "Dark Theme Profile",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          theme="dark"
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  theme="dark"
/>`
    },
    {
      title: "Custom Avatar Size",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          avatarSize={50}
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  avatarSize={50}
/>`
    },
    {
      title: "Fully Customized Profile with onClick",
      component: (
        <HnsIdProfile 
          address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
          isWide={true}
          showTooltip={true}
          showCopyButton={true}
          theme="dark"
          avatarSize={28}
          backgroundColor="#1a1a1a"
          textColor="#ffffff"
          fontSize="16px"
          padding="10px 15px"
          borderRadius="25px"
          onClick={() => alert('Customized profile clicked!')}
        />
      ),
      code: `<HnsIdProfile 
  address="0x91769843CEc84Adcf7A48DF9DBd9694A39f44b42"
  isWide={true}
  showTooltip={true}
  showCopyButton={true}
  theme="dark"
  avatarSize={28}
  backgroundColor="#1a1a1a"
  textColor="#ffffff"
  fontSize="16px"
  padding="10px 15px"
  borderRadius="25px"
  onClick={() => alert('Customized profile clicked!')}
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