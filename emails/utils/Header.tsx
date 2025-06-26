import { Section, Text, Img } from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

interface HeaderProps {
  subtext?: string;
}

export const Header = ({ 
  subtext 
}: HeaderProps) => {
  return (
    <Section style={headerSection}>
      <Img
        src={`${baseUrl}/static/notion-logo.png`}
        alt="WRX Company Logo"
        style={iconStyle}
      />
      {subtext && (
        <Text style={subtextStyle}>
          {subtext}
        </Text>
      )}
    </Section>
  );
};

const headerSection = {
  padding: '40px 30px 20px 30px',
  textAlign: 'center' as const,
  width: '100%',
};

const iconStyle = {
  maxWidth: '80px',
  height: 'auto',
  margin: '0 auto 16px auto',
  display: 'block',
};

const subtextStyle = {
  color: '#64748b',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  margin: '0',
  textAlign: 'center' as const,
  lineHeight: '1.5',
};
