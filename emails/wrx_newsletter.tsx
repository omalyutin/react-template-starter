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

interface WrxNewsletterEmailProps {
  recipientName?: string;
}

export const WrxNewsletterEmail = ({ 
  recipientName
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

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxNewsletterEmail.PreviewProps = {
  recipientName: 'Sarah',
} as WrxNewsletterEmailProps;

export default WrxNewsletterEmail;
