import { TodoComponents } from "@joindev/todo/components";
import { MainLayout } from "@joindev/todo/layouts";

function TodoPage() {
  return (
    <MainLayout>
      <TodoComponents />
    </MainLayout>
  );
}

export default TodoPage;
