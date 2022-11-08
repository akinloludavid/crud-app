import React from "react";

export interface AppRoute {
  element: React.ReactNode;
  path: string;
}

export interface ISetTab {
  setTab: (e: string) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ISignUpPayload {
  firstname: string;
  lastname: string;
  emailaddress: string;
  gender: string;
  password: string;
  username: string;
}
export interface IContract {
  activated: boolean;
  website: string;
  title: string;
  representedBy: string;
  companyName: string;
  email: string;
  telephoneFax: string;
  companyAddress: string;
  nationality: string;
  companyRegistrationNumber: string;
}

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ICreateBuyerPayload {
  companyName: string;
  companyAddress: string;
  companyRegistrationNumber: string;
  representedBy: string;
  telephoneFax: string;
  email: string;
  website: string;
  status?: string;
  nationality?: string;
  contractCode?: string;
  contractStatus?: ContractStatus;
  id?: string;
}

export interface IResetPasswordPayload {
  emailaddress: string;
  password: string;
  token?: string;
}
export enum ContractStatus {
  IN_PROGRESS = "in progress",
  COMPLETED = "completed",
  CLOSED = "closed",
}
