import { CustomFaq } from './custom-faq';
import { CustomSelector } from './custom-selector';

/* eslint-disable-next-line */
export interface StorybookComponentsProps {}

export function StorybookComponents(props: StorybookComponentsProps) {
  return (
    <div>
      <h1>Welcome to StorybookComponents!</h1>
      <CustomSelector array={['zzz', 'xxx', 'ccc']} animated={true} />
      <CustomFaq title="title">
        <h3>123</h3>
        <p>text</p>
      </CustomFaq>
    </div>
  );
}

export default StorybookComponents;
