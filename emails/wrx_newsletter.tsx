import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Footer } from './utils/Footer';

interface WrxNewsletterEmailProps {
  recipientName?: string;
  monthYear?: string;
}

export const WrxNewsletterEmail = ({ 
  recipientName, 
  monthYear 
}: WrxNewsletterEmailProps) => {
  const previewText = `WRX Newsletter - ${monthYear || 'Latest Updates'}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={title}>
              WRX Newsletter
            </Heading>
            <Text style={subtitle}>
              {monthYear || 'December 2025'} Edition
            </Text>
          </Section>
          
          <Section style={contentSection}>
            <Text style={greeting}>
              Hi {recipientName || 'Subscriber'},
            </Text>
            <Text style={text}>
              Welcome to this month's WRX Newsletter! Here are the latest updates and insights from our platform.
            </Text>
            
            <Heading style={sectionHeading}>
              🚀 What's New
            </Heading>
            <Text style={text}>
              • Enhanced dashboard with improved analytics<br />
              • New collaboration tools for teams<br />
              • Advanced security features
            </Text>
            
            <Heading style={sectionHeading}>
              📊 Quick Stats
            </Heading>
            <Text style={text}>
              Our community has grown by 25% this month with over 10,000 active users.
            </Text>
            
            <Text style={text}>
              Check out our{' '}
              <Link href="#" style={link}>
                latest blog posts
              </Link>
              {' '}for more insights.
            </Text>
          </Section>

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxNewsletterEmail.PreviewProps = {
  recipientName: 'Sarah Johnson',
  monthYear: 'December 2025',
} as WrxNewsletterEmailProps;

export default WrxNewsletterEmail;

const main = {
  backgroundColor: '#f9f9f9',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #e6e6e6',
  borderRadius: '8px',
  margin: '40px auto',
  maxWidth: '800px',
  padding: '0',
};

const headerSection = {
  backgroundColor: '#2563eb',
  borderRadius: '8px 8px 0 0',
  padding: '40px 30px',
  textAlign: 'center' as const,
};

const contentSection = {
  padding: '30px',
};

const title = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  textAlign: 'center' as const,
};

const subtitle = {
  color: '#e2e8f0',
  fontSize: '16px',
  margin: '0',
  textAlign: 'center' as const,
};

const greeting = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1e293b',
  margin: '0 0 20px 0',
};

const sectionHeading = {
  color: '#1e293b',
  fontSize: '20px',
  fontWeight: '600',
  margin: '30px 0 15px 0',
};

const text = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 15px 0',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
};
