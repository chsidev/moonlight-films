import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
# Change 0 on 2019-02-07
# Change 2 on 2019-02-05
# Change 3 on 2019-02-05
# Change 2 on 2019-02-22
# Change 0 on 2019-03-01
# Change 0 on 2019-03-15
# Change 1 on 2019-03-15
# Change 0 on 2019-01-30
# Change 1 on 2019-02-08
# Change 1 on 2019-02-06
# Change 2 on 2019-02-06
# Change 0 on 2019-02-16
# Change 1 on 2019-02-16
