import { Hr, Section, Text, Img, Column, Row } from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';


export const Footer = () => {
  return (
    <>
      <Hr style={hr} />
      <Section style={footerSection}>
        <Row style={imageRow}>
          <Column style={imageColumn}>
            <Img
              src={`${baseUrl}/static/stripe-logo.png`}
              alt="WRX Company Logo"
              style={logo}
            />
          </Column>
        </Row>
        
        <Row style={menuRow}>
          <Column style={menuColumn}>
            <Text style={menuContainer}>
              <a href="#" style={menuLink}>Home</a>
              <span style={menuSeparator}>|</span>
              <a href="#" style={menuLink}>About</a>
              <span style={menuSeparator}>|</span>
              <a href="#" style={menuLink}>Legal</a>
            </Text>
          </Column>
          <Column style={copyrightColumn}>
            <Text style={copyrightText}>
              © 2025 WRX Company. All rights reserved.
            </Text>
          </Column>
        </Row>
      </Section>
    </>
  );
};

const hr = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '26px 0',
  width: '100%',
};

const footerSection = {
  backgroundColor: '#f5f5f5',
  padding: '24px',
  width: '100%',
};

const imageRow = {
  width: '100%',
  marginBottom: '16px',
};

const imageColumn = {
  textAlign: 'right' as const,
  width: '100%',
};

const logo = {
  maxWidth: '120px',
  height: 'auto',
  display: 'block',
  marginLeft: 'auto',
};

const menuRow = {
  width: '100%',
};

const menuColumn = {
  textAlign: 'left' as const,
  verticalAlign: 'top' as const,
  width: '50%',
};

const copyrightColumn = {
  textAlign: 'right' as const,
  verticalAlign: 'top' as const,
  width: '50%',
};

const menuContainer = {
  margin: '0',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const menuLink = {
  color: '#333333',
  textDecoration: 'none',
  fontWeight: '500',
  margin: '0 8px',
};

const menuSeparator = {
  color: '#cccccc',
  margin: '0 4px',
};

const copyrightText = {
  color: '#999999',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0',
};
