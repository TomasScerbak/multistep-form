type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return <main>{props.children}</main>;
};

export default Container;
