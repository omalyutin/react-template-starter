// Common styles for WRX email templates

export const commonStyles = {
  // Main body styles
  main: {
    backgroundColor: '#f9f9f9',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },

  // Container wrapper
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
    margin: '40px auto',
    maxWidth: '600px',
    padding: '0',
  },

  // Content section
  contentSection: {
    padding: '60px 40px',
    textAlign: 'center' as const,
  },

  // Typography
  heading: {
    color: '#1e293b',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
    lineHeight: '1.2',
  },

  subheading: {
    color: '#475569',
    fontSize: '18px',
    fontWeight: '500',
    margin: '0 0 30px 0',
    textAlign: 'center' as const,
    lineHeight: '1.4',
  },

  text: {
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  },

  // Button styles
  button: {
    backgroundColor: '#2563eb',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '14px 28px',
    margin: '20px 0',
  },

  buttonSection: {
    textAlign: 'center' as const,
    margin: '30px 0',
  },

  // Link styles
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
    fontWeight: '500',
  },
};
