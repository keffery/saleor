/* tslint:disable */
// This file was automatically generated and should not be edited.

import { TaxRateType } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: FetchTaxes
// ====================================================

export interface FetchTaxes_shopFetchTaxRates_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface FetchTaxes_shopFetchTaxRates_shop_countries_vat_reducedRates {
  __typename: "ReducedRate";
  rateType: TaxRateType;
  rate: number;
}

export interface FetchTaxes_shopFetchTaxRates_shop_countries_vat {
  __typename: "VAT";
  standardRate: number | null;
  reducedRates: (FetchTaxes_shopFetchTaxRates_shop_countries_vat_reducedRates | null)[] | null;
}

export interface FetchTaxes_shopFetchTaxRates_shop_countries {
  __typename: "CountryDisplay";
  country: string;
  code: string;
  vat: FetchTaxes_shopFetchTaxRates_shop_countries_vat | null;
}

export interface FetchTaxes_shopFetchTaxRates_shop {
  __typename: "Shop";
  countries: (FetchTaxes_shopFetchTaxRates_shop_countries | null)[];
}

export interface FetchTaxes_shopFetchTaxRates {
  __typename: "ShopFetchTaxRates";
  errors: FetchTaxes_shopFetchTaxRates_errors[] | null;
  shop: FetchTaxes_shopFetchTaxRates_shop | null;
}

export interface FetchTaxes {
  shopFetchTaxRates: FetchTaxes_shopFetchTaxRates | null;
}
