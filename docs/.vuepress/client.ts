import { defineClientConfig } from '@vuepress/client'
import Layout from "./theme/layouts/Layout.vue";

export default defineClientConfig({
  layouts: {
    // we override the default layout to provide comment service
    Layout,
  },
})