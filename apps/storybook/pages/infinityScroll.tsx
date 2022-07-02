import { CustomInfinityScroll } from 'libs/storybook-components/src/lib/custom-infinity-scroll';

const generateUrl = (length: number) =>
  `https://www.googleapis.com/books/v1/volumes?q=dotamoba&maxResults=40&startIndex=${length}&key=AIzaSyCF8Z3jo8SKB8IEdCnC2EhSQtdL9DGwmWM`; //мой

const ItemComponent = () => {
  return (
    <div>
      <h1>ItemComponent</h1>
    </div>
  );
};

export default function infinityScroll() {
  return (
    <div className="relative overflow-hidden w-[100%]">
      <CustomInfinityScroll generateUrl={generateUrl} />
      {/* infinity scroll component that allows you to load more items when you scroll to the bottom of the page */}
    </div>
  );
}
