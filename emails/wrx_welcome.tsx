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
import { Header } from './utils/Header';
import { Footer } from './utils/Footer';
import { ActionBlock } from './utils/ActionBlock';
import { TextBlock } from './utils/TextBlock';
import { commonStyles } from './utils/styles';

interface WrxWelcomeEmailProps {
  username?: string;
  headerSubtext?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
  footerText?: string;
  footerLinkUrl?: string;
}

export const WrxWelcomeEmail = ({ 
  username,
  headerSubtext,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl,
  footerText,
  footerLinkUrl
}: WrxWelcomeEmailProps) => {
  const previewText = 'WRX Welcome';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={commonStyles.main}>
        <Container style={commonStyles.container}>
          <Header 
            subtext={headerSubtext}
          />
          <ActionBlock 
            title={actionTitle}
            subtitle={actionSubtitle}
            buttonText={actionButtonText}
            buttonUrl={actionButtonUrl}
          />
          <TextBlock 
            text={footerText}
            linkUrl={footerLinkUrl}
          />
          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxWelcomeEmail.PreviewProps = {
  username: 'John',
  headerSubtext: 'Welcome to WRX • Account Created',
  actionTitle: 'Welcome to WRX',
  actionSubtitle: 'Start exploring our amazing features',
  actionButtonText: 'Get Started',
  actionButtonUrl: 'https://example.com/dashboard',
  footerText: 'Need assistance getting started?',
  footerLinkUrl: 'https://example.com/help',
} as WrxWelcomeEmailProps;

export default WrxWelcomeEmail;
