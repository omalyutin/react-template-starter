import { Section, Text, Link } from '@react-email/components';

interface TextBlockProps {
  text?: string;
  linkUrl?: string;
}

export const TextBlock = ({ 
  text, 
  linkUrl 
}: TextBlockProps) => {
  return (
    <Section style={textSection}>
      <Text style={textStyle}>
        {text || 'Need help or have questions?'}{' '}
        {linkUrl && (
          <Link href={linkUrl} style={linkStyle}>
            {linkUrl}
          </Link>
        )}
      </Text>
    </Section>
  );
};

const textSection = {
  padding: '30px 30px 20px 30px',
  textAlign: 'center' as const,
  width: '100%',
};

const textStyle = {
  color: '#64748b',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  margin: '0',
  textAlign: 'center' as const,
  lineHeight: '1.5',
};

const linkStyle = {
  color: '#64748b',
  textDecoration: 'underline',
  fontWeight: '500',
};
