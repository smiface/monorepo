import { TodoComponents } from '@joindev/todo/components';
import { MainLayout } from '@joindev/todo/layouts';

export function Index() {
  return (
    <MainLayout>
      <TodoComponents />
    </MainLayout>
  );
}

export default Index;
