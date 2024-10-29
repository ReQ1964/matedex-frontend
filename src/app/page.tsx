import { Container } from '@radix-ui/themes';
import Featured from '@/components/home/Featured/Featured';
import Guides from '@/components/home/Guides/Guides';

export default function Home() {
  return (
    <Container size='3'>
      <Guides />
      <Featured />
    </Container>
  );
}
