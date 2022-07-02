import { Button } from '@joindev/button';
import { useState } from 'react';

const useCustomHook = () => {
  const [isShow, setIsShow] = useState(false);

  const modalPre =
    'fixed z-40 top-0 left-0  h-full w-full duration-300 flex items-center justify-center ';
  const modalSlt1 = modalPre + ' opacity-0';
  const modalSlt2 = modalPre + ' opacity-1';

  const [modalStr, setModalStr] = useState('');

  const Open = () => {
    setModalStr(modalSlt1);
    setIsShow(true);

    setTimeout(() => {
      setModalStr(modalSlt2);
    }, 300);
  };

  const Close = () => {
    setModalStr(modalSlt1);

    setTimeout(() => {
      setIsShow(false);
    }, 600);
  };

  const toggleShow = () => (isShow ? Close() : Open());

  return { toggleShow, isShow, modalStr };
};

export const CustomModal = () => {
  const hook = useCustomHook();
  return (
    <div>
      <Button text="Open modal" fn={hook.toggleShow} addition="ml-4" color="lite" />

      {hook.isShow ? (
        <div className={hook.modalStr}>
          {/* overlay */}
          <div
            className="absolute  bg-gray-400 h-full w-full opacity-50"
            onClick={hook.toggleShow}
          ></div>

          <div className="z-10">
            <Button
              text="Close modal"
              fn={hook.toggleShow}
              addition=" w-max rounded-sm"
              color="lite"
            />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
