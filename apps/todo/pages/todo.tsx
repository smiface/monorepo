import { TodoComponents } from "@joindev/todo/components";
import { MainLayout } from "@joindev/todo/layouts";

const links = [
  { href: '/about', str: 'about' },
  { href: '/todo/1', str: 'todo' },
  { href: '/todo', str: 'all todo' },
];

function TodoPage() {
  return (
    <MainLayout links={links}>
      <TodoComponents />
    </MainLayout>
  );
}

export default TodoPage;
