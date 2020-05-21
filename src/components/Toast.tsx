// @ts-ignore
export default function Toast(toast, title, status, desc) {
  return toast({
    position: "bottom-right",
    title: title,
    description: desc,
    status: status,
    duration: 3000,
    isClosable: true,
  });
}
