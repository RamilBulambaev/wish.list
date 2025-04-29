import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import i18nForTest from "@/shared/config/i18n/i18nForTest";
// eslint-disable-next-line plugin-path-checker-fsd-r/layer-imports
import "@/app/styles/index.scss";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider({ options = {}, children }: TestProviderProps) {
  const { route = "/", initialState, asyncReducers } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>{children}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
