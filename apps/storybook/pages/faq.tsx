import { CustomFaq } from 'libs/storybook-components/src/lib/custom-faq';

export default function FaqPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <div className="flex flex-col pl-6 p-2">
        <h1 className=" text-2xl pt-4 pb-4">Custom Faq</h1>
        <div className="grid grid-cols-4 gap-6 ">
          <div className="w-[300px] h-[300px]">
            <CustomFaq title="No animation">
              <h3 className="text-4xl">Title 4xl</h3>
              <p className="text-xl">Text xl</p>
            </CustomFaq>
          </div>

          <div className="w-[300px] h-[300px]">
            <CustomFaq title="animateDuration 300" animateDuration={300}>
              <h3 className="text-4xl pt-4 pb-2">Title 4xl</h3>
              <p className="text-xl pt-4 pb-2">Text xl</p>
            </CustomFaq>
          </div>

          <div className="w-[300px] h-[300px]">
            <CustomFaq title="disabled ✕" animateDuration={300} isDisabled={true}>
              <h3 className="text-4xl pt-4 pb-2">Title 4xl</h3>
              <p className="text-xl pt-4 pb-2">Text xl</p>
            </CustomFaq>
          </div>
        </div>
      </div>
    </div>
  );
}