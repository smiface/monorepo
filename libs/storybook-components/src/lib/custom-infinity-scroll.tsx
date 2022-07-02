import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

interface CustomInfinityScrollProps {
  //   component: React.ReactNode;
  generateUrl: (length: number) => string;
}

const ItemComponent = ({ item }: any) => {
  return (
    <div className="flex flex-col text-left max-w-[90%] pt-2 pb-2">
      <p>{item.title.length > 30 ? item.title.slice(0, 27) + '...' : item.title}</p>
      {item.preview == 'no preview' ? <p>🔗 no 🖼 preview  😭</p> : <img alt="img" src={item.preview} />}
    </div>
  );
};

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return isIntersecting;
}

const validItem = (item) => {
  const t = item.volumeInfo?.title ? item.volumeInfo.title : 'no title';
  const p = item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo.imageLinks?.thumbnail : 'no preview';
  return { title: t, preview: p };
};

export const CustomInfinityScroll = ({ generateUrl }: CustomInfinityScrollProps) => {
  const [isOnScreen, setIsOnScreen] = useState(true);
  const [items, setItems] = useState([]);
  const BtnRef = useRef(null);
  const onScreen = useOnScreen(BtnRef, '0px');
  const [loadMoreBtnStr, setLoadMoreBtnStr] = useState('Load more');
  useEffect(() => {
    if (!isOnScreen === true) loadData();
    setIsOnScreen(!isOnScreen);
  }, [onScreen]);

  const loadData = () => {
    axios.get(generateUrl(items.length)).then((res: any) => {
      console.log(res);
      if (res.data.items && res.data.items.length > 0) {
        const arr = res.data.items.map((item) => (item = validItem(item)));
        setItems([...items, ...arr]);
      } else {
        setLoadMoreBtnStr('No more items');
      }
    });
  };

  return (
    <div className="flex flex-col h-[100%] overflow-x-scroll absolute w-[100%]  align-middle pt-4 scroll-parent">
      <div className="grid grid-cols-3 ">{items.length ? items.map((i, idx) => <ItemComponent item={i} />) : 'no items yet..'}</div>
      <button onClick={loadData} ref={BtnRef}>
        {loadMoreBtnStr}
      </button>

      <button className="fixed right-0 top-0 bg-white" onClick={() => console.log(items)}>
        length{' '}
      </button>
    </div>
  );
};
