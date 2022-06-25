import { CustomFaq } from './custom-faq';
import { CustomModal } from './custom-modal';
import { CustomSelector } from './custom-selector';
import {CustomGrid} from './custom-grid';

export function StorybookComponents() {
  return (
    <div>
      <h1>Welcome to StorybookComponents!</h1>

<CustomGrid />

      <CustomFaq title={'Title Faq'}>
        <h3 className="text-2xl">H3 Title {}</h3>
        <p>
          Text <span>spanned</span> in my FAQ #{}
        </p>
      </CustomFaq>

      <CustomSelector array={['zzz', 'xxx', 'ccc']} animated={true} />

      <CustomModal />
    </div>
  );
}

export default StorybookComponents;
