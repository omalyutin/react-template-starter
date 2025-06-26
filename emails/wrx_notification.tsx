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
import { commonStyles } from './utils/styles';

interface WrxNotificationEmailProps {
  title?: string;
}

export const WrxNotificationEmail = ({ 
  title
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

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxNotificationEmail.PreviewProps = {
  title: 'Important',
} as WrxNotificationEmailProps;

export default WrxNotificationEmail;
