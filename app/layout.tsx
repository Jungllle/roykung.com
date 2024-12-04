import type {Metadata} from 'next';
import {Container} from 'react-bootstrap';
import NavigationBar from '@components/NavigationBar';
import Copyright from '@components/Copyright';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Roy Lin 林昆彥',
  description: '林昆彥 (Roy Lin). I\'m a dreamer, singer and basketball player, loving jogging, reading and cooking, and now running a startup in Taipei, Taiwan.',
  openGraph: {
    title: 'Roy Lin 林昆彥',
    description: '林昆彥 (Roy Lin). I\'m a dreamer, singer and basketball player, loving jogging, reading and cooking, and now running a startup in Taipei, Taiwan.',
    type: 'website',
    locale: 'en',
    url: 'https://roykung.com',
    siteName: 'Roy Lin 林昆彥',
    images: [
      {
        url: 'https://roykung.com/profile.jpeg',
        width: 592,
        height: 569,
        alt: 'Roy Lin 林昆彥',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@roylinkung',
    creator: '@roylinkung',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavigationBar />
        <Container>
          {children}
          <Copyright />
        </Container>
      </body>
    </html>
  );
}

