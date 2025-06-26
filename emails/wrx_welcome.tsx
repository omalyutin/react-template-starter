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

interface WrxWelcomeEmailProps {
  username?: string;
  actionTitle?: string;
  actionSubtitle?: string;
  actionButtonText?: string;
  actionButtonUrl?: string;
}

export const WrxWelcomeEmail = ({ 
  username,
  actionTitle,
  actionSubtitle,
  actionButtonText,
  actionButtonUrl
}: WrxWelcomeEmailProps) => {
  const previewText = 'WRX Welcome';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={commonStyles.main}>
        <Container style={commonStyles.container}>
          <Section style={commonStyles.contentSection}>
            <Heading style={commonStyles.heading}>
              Welcome Template
            </Heading>
            <Text style={commonStyles.text}>
              Hello {username || 'User'}
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

WrxWelcomeEmail.PreviewProps = {
  username: 'John',
  actionTitle: 'Welcome to WRX',
  actionSubtitle: 'Start exploring our amazing features',
  actionButtonText: 'Get Started',
  actionButtonUrl: 'https://example.com/dashboard',
} as WrxWelcomeEmailProps;

export default WrxWelcomeEmail;
