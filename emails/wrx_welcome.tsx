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

interface WrxWelcomeEmailProps {
  username?: string;
}

export const WrxWelcomeEmail = ({ username }: WrxWelcomeEmailProps) => {
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

          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

WrxWelcomeEmail.PreviewProps = {
  username: 'John',
} as WrxWelcomeEmailProps;

export default WrxWelcomeEmail;
