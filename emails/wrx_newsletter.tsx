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

interface WrxNewsletterEmailProps {
  recipientName?: string;
  headerSubtext?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
  footerText?: string;
  footerLinkUrl?: string;
}

export const WrxNewsletterEmail = ({ 
  recipientName,
  headerSubtext,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl,
  footerText,
  footerLinkUrl
}: WrxNewsletterEmailProps) => {
  const previewText = 'WRX Newsletter';

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

WrxNewsletterEmail.PreviewProps = {
  recipientName: 'Sarah',
  headerSubtext: 'Monthly Newsletter • December 2025',
  actionTitle: 'Get Started Today',
  actionSubtitle: 'Join thousands of users already using our platform',
  actionButtonText: 'Sign Up Now',
  actionButtonUrl: 'https://example.com/signup',
  footerText: 'Questions about this newsletter?',
  footerLinkUrl: 'https://example.com/support',
} as WrxNewsletterEmailProps;

export default WrxNewsletterEmail;
