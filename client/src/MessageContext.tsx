import { createContext, useContext, useState } from "react";

export interface MessageContextType {
  message: string | null;
  setMessage: (msg: string | null) => void;
}

export const MessageContext = createContext<MessageContextType>({
  message: null,
  setMessage: () => {},
});

export const useMessage = () => {
    return useContext(MessageContext);
};

export const ResponseMessage = ({ children }: any) => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
