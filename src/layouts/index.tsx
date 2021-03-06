import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return <div style={{ padding: 20 }}>{props.children}</div>;
};
