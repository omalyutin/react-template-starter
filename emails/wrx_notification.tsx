import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Footer } from './utils/Footer';

interface WrxNotificationEmailProps {
  title?: string;
  message?: string;
  actionUrl?: string;
  actionText?: string;
}

export const WrxNotificationEmail = ({ 
  title, 
  message, 
  actionUrl, 
  actionText 
}: WrxNotificationEmailProps) => {
  const previewText = title || 'Important notification from WRX';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>
              {title || 'Notification'}
            </Heading>
          </Section>
          
          <Section>
            <Text style={text}>
              {message || 'We have an important update for you regarding your WRX account.'}
            </Text>
            <Text style={text}>
              This notification requires your attention to ensure your account remains secure and up-to-date with the latest features and improvements.
            </Text>
            <Text style={text}>
              Please take a moment to review this information and take any necessary actions.
            </Text>
          </Section>

          {actionUrl && (
            <Section style={buttonSection}>
              <Button style={button} href={actionUrl}>
                {actionText || 'Take Action'}
              </Button>
            </Section>
          )}

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxNotificationEmail.PreviewProps = {
  title: 'Security Update Required',
  message: 'We have detected unusual activity on your account and recommend updating your password.',
  actionUrl: 'https://example.com/security',
  actionText: 'Update Security Settings',
} as WrxNotificationEmailProps;

export default WrxNotificationEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
  maxWidth: '465px',
};

const section = {
  marginTop: '32px',
};

const h1 = {
  color: '#333',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'normal',
  margin: '30px 0',
  padding: '0',
  textAlign: 'center' as const,
};

const text = {
  color: '#333',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  lineHeight: '24px',
  margin: '16px 0',
};

const buttonSection = {
  marginTop: '32px',
  marginBottom: '32px',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#ffffff',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};
