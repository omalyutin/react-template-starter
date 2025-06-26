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

interface WrxNotificationEmailProps {
  title?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
}

export const WrxNotificationEmail = ({ 
  title,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl
}: WrxNotificationEmailProps) => {
  const previewText = 'WRX Notification';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={commonStyles.main}>
        <Container style={commonStyles.container}>
          <Section style={commonStyles.contentSection}>
            <Heading style={commonStyles.heading}>
              Notification Template
            </Heading>
            <Text style={commonStyles.text}>
              {title || 'Alert'} Message
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

WrxNotificationEmail.PreviewProps = {
  title: 'Important',
  actionTitle: 'Action Required',
  actionSubtitle: 'Please review your account settings',
  actionButtonText: 'Update Settings',
  actionButtonUrl: 'https://example.com/settings',
} as WrxNotificationEmailProps;

export default WrxNotificationEmail;
