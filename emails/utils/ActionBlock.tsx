import { Section, Text, Button } from '@react-email/components';

interface ActionBlockProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export const ActionBlock = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonUrl 
}: ActionBlockProps) => {
  return (
    <Section style={actionSection}>
      {title && (
        <Text style={titleStyle}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text style={subtitleStyle}>
          {subtitle}
        </Text>
      )}
      {buttonText && buttonUrl && (
        <Button style={buttonStyle} href={buttonUrl}>
          {buttonText}
        </Button>
      )}
    </Section>
  );
};

const actionSection = {
  backgroundColor: '#f8f9fa',
  borderRadius: '60px',
  padding: '40px 30px',
  textAlign: 'center' as const,
  width: '100%',
  margin: '20px 0',
};

const titleStyle = {
  color: '#1e293b',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: '600',
  margin: '0 0 16px 0',
  textAlign: 'center' as const,
  lineHeight: '1.3',
};

const subtitleStyle = {
  color: '#64748b',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  fontWeight: '400',
  margin: '0 0 24px 0',
  textAlign: 'center' as const,
  lineHeight: '1.5',
};

const buttonStyle = {
  backgroundColor: '#a855f7',
  borderRadius: '8px',
  color: '#ffffff',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
  margin: '8px 0 0 0',
};
