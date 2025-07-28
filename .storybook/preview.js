import { setCompodocJson } from "@storybook/addon-docs/angular";
import '!style-loader!css-loader!sass-loader!./../projects/pattern-lib/static/assets/scss/main.scss';
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}