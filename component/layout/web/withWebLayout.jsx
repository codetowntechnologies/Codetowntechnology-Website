/* eslint-disable no-param-reassign */
import WebLayout from './index';

const withWebLayout = (Component) => {
  Component.Layout = WebLayout;
  return Component;
};
export default withWebLayout;
