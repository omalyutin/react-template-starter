import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Footer } from './utils/Footer';

interface WrxWelcomeEmailProps {
  username?: string;
}

export const WrxWelcomeEmail = ({ username }: WrxWelcomeEmailProps) => {
  const previewText = 'Welcome to WRX - Your journey begins now!';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>
              Welcome to <strong>WRX</strong>!
            </Heading>
          </Section>
          
          <Section>
            <Text style={{ ...text, textAlign: 'center', fontSize: '16px' }}>
              Hello {username || 'there'},
            </Text>
            <Text style={text}>
              We're thrilled to have you join our community! Your account has been successfully created and you're now ready to explore all the amazing features WRX has to offer.
            </Text>
            <Text style={text}>
              Get started by logging into your dashboard and discovering the powerful tools we've built just for you. Our team is here to support you every step of the way.
            </Text>
            <Text style={text}>
              Welcome aboard, and let's build something amazing together!
            </Text>
          </Section>

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxWelcomeEmail.PreviewProps = {
  username: 'John Doe',
} as WrxWelcomeEmailProps;

export default WrxWelcomeEmail;

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
  fontSize: '28px',
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
