import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GET_TODOS @cached {
    test_todos {
      id
      date
      title
      author_id
    }
  }
`;

export const GET_USERS = gql`
  query MyQuery {
    test_users {
      id
      name
      role
    }
  }
`;

export const GET_TODOS_WITH_USER_DATA = gql`
  query GET_TODOS_WITH_USER_DATA {
    test_todos {
      author_info {
        name
        role
      }
      date
      done
      title
      id
    }
  }
`;

export const TOGGLE_TODO_DONE = gql`
  mutation MUTATION_TOGGLE_TODO_DONE ($id: Int, $done: Boolean) {
    update_test_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        done
      }
    }
  }
`;
