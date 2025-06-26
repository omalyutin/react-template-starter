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

interface WrxNotificationEmailProps {
  title?: string;
  headerSubtext?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
  footerText?: string;
  footerLinkUrl?: string;
}

export const WrxNotificationEmail = ({ 
  title,
  headerSubtext,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl,
  footerText,
  footerLinkUrl
}: WrxNotificationEmailProps) => {
  const previewText = 'WRX Notification';

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

WrxNotificationEmail.PreviewProps = {
  title: 'Important',
  headerSubtext: 'System Alert • Urgent',
  actionTitle: 'Action Required',
  actionSubtitle: 'Please review your account settings',
  actionButtonText: 'Update Settings',
  actionButtonUrl: 'https://example.com/settings',
  footerText: 'This is an automated notification.',
  footerLinkUrl: 'https://example.com/help',
} as WrxNotificationEmailProps;

export default WrxNotificationEmail;
