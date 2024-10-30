import { Container } from '@radix-ui/themes';
import Featured from '@/components/home/Featured/Featured';
import GuideList from '@/components/home/Guides/GuideList/GuideList';

export default function Home() {
  return (
    <Container size='3'>
      <GuideList />
      <Featured />
    </Container>
  );
}
