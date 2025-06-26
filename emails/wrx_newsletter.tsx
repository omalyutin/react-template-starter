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
import { ActionBlock } from './utils/ActionBlock';
import { commonStyles } from './utils/styles';

interface WrxNewsletterEmailProps {
  recipientName?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
}

export const WrxNewsletterEmail = ({ 
  recipientName,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl
}: WrxNewsletterEmailProps) => {
  const previewText = 'WRX Newsletter';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={commonStyles.main}>
        <Container style={commonStyles.container}>
          <Section style={commonStyles.contentSection}>
            <Heading style={commonStyles.heading}>
              Newsletter Template
            </Heading>
            <Text style={commonStyles.text}>
              {recipientName || 'User'} Content
            </Text>
          </Section>

          <ActionBlock 
            title={actionTitle}
            subtitle={actionSubtitle}
            buttonText={actionButtonText}
            buttonUrl={actionButtonUrl}
          />

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxNewsletterEmail.PreviewProps = {
  recipientName: 'Sarah',
  actionTitle: 'Get Started Today',
  actionSubtitle: 'Join thousands of users already using our platform',
  actionButtonText: 'Sign Up Now',
  actionButtonUrl: 'https://example.com/signup',
} as WrxNewsletterEmailProps;

export default WrxNewsletterEmail;
