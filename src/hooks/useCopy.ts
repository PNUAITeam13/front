import useToast from "./useToast";

const useCopy = () => {
  const { successToast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);

    successToast("Copied to clipboard");
  };

  return handleCopy;
};

export default useCopy;
