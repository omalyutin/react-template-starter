import { Hr, Section, Text } from '@react-email/components';

export const Footer = () => {
  return (
    <>
      <Hr style={hr} />
      <Section style={section}>
        <Text style={text}>
          © 2025 WRX Company. All rights reserved.
        </Text>
        <Text style={text}>
          You received this email because you are subscribed to our service.
        </Text>
        <Text style={text}>
          If you no longer wish to receive these emails, you can{' '}
          <a href="#" style={link}>
            unsubscribe here
          </a>
          .
        </Text>
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

const section = {
  textAlign: 'center' as const,
};

const text = {
  color: '#666666',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '24px',
  margin: '0 0 8px 0',
};

const link = {
  color: '#666666',
  textDecoration: 'underline',
};
