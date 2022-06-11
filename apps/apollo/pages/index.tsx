import { ApolloMain } from '@joindev/apollo-main';
import { MainLayout } from '@joindev/todo/layouts';
// 
const links = [
  { href: '/', str: 'home' },
];

export function App() {
  return (
    <MainLayout links={links}>
      <ApolloMain />
    </MainLayout>
  );
}

export default App;
